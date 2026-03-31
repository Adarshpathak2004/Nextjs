"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <button
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >   
                Sign in with Github
            </button>
            
        </div>
    );
}
