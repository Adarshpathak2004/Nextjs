
import NextAuth from "next-auth/provider/github";
import GitHubProvider from "next-auth/providers/github";
import {signIn} from "next-auth/react";


const handler= NextAuth({
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
        maxage: 60*60*24, // 1 day
    },
    pages:{
        signIn: "/signin",
    }
});
export { handler as GET, handler as POST };