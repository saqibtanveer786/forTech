import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'
import { getToken } from 'next-auth/jwt'

export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname

        const isAuthenticated = await getToken({ req })
        const token = isAuthenticated
        const isAdmin = token.role === 'ADMIN'
        const isAuther = token.role === 'AUTHER'

        if (pathname.startsWith('/addblog')) {
            if (isAdmin) return NextResponse.next()
            if (!isAuther || !isAuthenticated) return NextResponse.redirect(new URL('/', req.url))
        }

        if (pathname.startsWith('/dashboard')) {
            if (isAdmin || isAuther) return NextResponse.next()
            if (!isAdmin || !isAuther) return NextResponse.redirect(new URL('/', req.url))
        }

        return NextResponse.next()
    }
)

export const config = {
    matcher: ['/blogs', '/profile', '/addblog'],
}