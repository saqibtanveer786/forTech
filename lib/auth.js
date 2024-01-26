import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 40000,
      },
    }),
    CredentialsProvider({
      id: "credentials",
      name: "fortech-credentials-provider",
      async authorize(credentials, req) {
        const { email, pass } = credentials;
        const user = prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        return user;
      },
      credentials: {
        username: { label: "Username", type: "text ", placeholder: "jsmith" },
        "2fa-key": { label: "2FA Key" },
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    newUser: "/",
    error: "/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.role = token.role;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        role: dbUser.role,
        username: dbUser.username,
      };
    },
  },
  secret: process.env.SECRET,
};

export const getAuthSession = async () => {
  let session = await getServerSession(authOptions);
  return session;
};
