import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { Adapter } from "next-auth/adapters"
import { db } from "@/app/_lib/prisma"

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as String,
      clientSecret: process.env.GOOGLE_SECRET as String,
    }),
  ],
})

export { handler as GET, handler as POST }
