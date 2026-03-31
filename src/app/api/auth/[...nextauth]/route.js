
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleClientId =
    process.env.GOOGLE_CLIENT_ID || process.env.AUTH_GOOGLE_ID || process.env.CLIENT_ID;
const googleClientSecret =
    process.env.GOOGLE_CLIENT_SECRET || process.env.AUTH_GOOGLE_SECRET || process.env.CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
    throw new Error(
        "Missing Google OAuth env vars. Set GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET (or AUTH_GOOGLE_ID/AUTH_GOOGLE_SECRET)."
    );
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
        }),
    ],
});

export { handler as GET, handler as POST };