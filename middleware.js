import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'
import { getToken } from 'next-auth/jwt'
import { redirect } from 'next/dist/server/api-utils'

export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname

        const isAuthenticated = await getToken({ req })

        if (pathname.startsWith('/pages/addblog')) {
            const token = isAuthenticated

            const isAdmin = token.role === 'ADMIN'
            if (isAdmin) return NextResponse.next()

            const isAuther = token.role === 'AUTHER'
            if (!isAuther || !isAuthenticated) return NextResponse.redirect(new URL('/', req.url))
        }

        return NextResponse.next()
    }
)
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/pages/blogs', '/pages/profile', '/pages/addblog'],
}