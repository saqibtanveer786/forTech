import GoogleProvider from "next-auth/providers/google"
import { getServerSession } from "next-auth";
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
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, user, token }) {
            return session
        },
    },
    secret: process.env.SECRET
}

export const getAuthSession = async () => { await getServerSession(authOptions) }