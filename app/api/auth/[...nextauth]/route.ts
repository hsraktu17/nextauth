import prisma from "@/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        try {
          const { email, password } = credentials;

          const user = await prisma.user.findUnique({
            where: {
              email: email,
              password: password,
            },
          });

          if (!user) {
            return NextResponse.json({
              message: "User not found",
            });
          }
          return {
            name: user.username,
            email: user.email,
          };
        } catch (e) {
          console.error("error encountered : ", e);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
