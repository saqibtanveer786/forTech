import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    pages: {
        signIn: '/pages/signin',
        signOut: '/pages/signout',
        newUser: '/'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }