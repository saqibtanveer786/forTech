import GoogleProvider from "next-auth/providers/google"
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            httpOptions: {
                timeout: 40000,
            },
        }),
    ],
    pages: {
        signIn: '/signin',
        signOut: '/signout',
        newUser: '/'
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                }
            })

            if (!dbUser) {
                token.id = user.id
                return token
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
                role: dbUser.role,
            }
        }
    },
    secret: process.env.SECRET
}

export const getAuthSession = async () => {
    let session = await getServerSession(authOptions)
    return session
}