
"use client";
import {use, useState} from "react";
import {signIn} from "next-auth/react";


export default function LoginPage() {
    const[error,setError] = useState(null);

    return (
        <div>
            <h2>Login with Google</h2>
            <button onClick={()=>signIn("google")}>sign in with Google</button>
       </div>
    );
}