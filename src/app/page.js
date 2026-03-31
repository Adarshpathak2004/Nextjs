// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// //       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={100}
// //           height={20}
// //           priority
// //         />
// //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// //             To get started, edit the page.js file.
// //           </h1>
// //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// //             Looking for a starting point or more instructions? Head over to{" "}
// //             <a
// //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Templates
// //             </a>{" "}
// //             or the{" "}
// //             <a
// //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Learning
// //             </a>{" "}
// //             center.
// //           </p>
// //         </div>
// //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// //           <a
// //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={16}
// //               height={16}
// //             />
// //             Deploy Now
// //           </a>
// //           <a
// //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Documentation
// //           </a>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }


// import Image from "next/image";
// import {Button} from "@/components/ui/button";
// import {Input} from "@/components/ui/input";
// import {Card,CardContent} from "@/components/ui/card";

// export default function Home() {
//   return (
//     <Card className="w-[350px]mx auto mt-20 p-4 shadow-lg">
//       <CardContent>
//         <Input placeholder="email" className="mb-2" />
//         <Input placeholder="password" type="password" className="mb-2" />
//         <Button className="w-full">Login</Button>
//       </CardContent>
//     </Card>
//   );


// }

"use client";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const [email,setEmail] = useState("");
    const router = useRouter();


    // This function sends a test email to the specified email address using the /api/send-email endpoint. It makes a POST request with the email details in the request body. If the email is sent successfully, it shows an alert message; otherwise, it shows an error message.
    // To use this function, simply enter an email address in the input field and click the "Send Test Email" button. Make sure that the email address you enter is valid and that you have access to it, as you will receive the test email in that inbox.
    // Note: Ensure that your Resend API key is correctly set in your environment variables and that the /api/send-email endpoint is properly implemented to handle the email sending functionality.

    async function sendEmail(){
      const res=await fetch("/api/send-email",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },

        // In this example, the email is sent to the address specified in the "email" state variable, with a subject of "welcome to my nextjs application" and a simple HTML body. You can customize these values as needed.
        // Make sure to replace the "to" field with a valid email address that you have access to, as you will receive the test email in that inbox. If the email is sent successfully, you should receive it in your inbox. If there is an error, you can check the response for more details.
        // html: "<p>This is a test email sent from my Next.js application.</p>",is what the email body will look like. You can customize it with your own HTML content as needed.
        // subject: "welcome to my nextjs application" is the subject of the email. You can change it to whatever you like.
        // what here html field is the content of the email, and the subject field is the subject line of the email. You can customize these values as needed when calling the sendEmail function.
        body:JSON.stringify({
          to:email,
          subject:"welcome to my nextjs application",
          html:"<p>this is a test email sent from my nextjs application</p>",
        })
      });
      if(res.ok){
        alert("Email sent successfully");
      }else{
        alert("Failed to send email");
      }
    }

    // This function handles the login process when the user submits the login form. It prevents the default form submission behavior, sends a POST request to the /api/loginsession endpoint with the user's email in the request body, and checks the response. If the login is successful (response.ok is true), it redirects the user to the dashboard page. If the login fails, it shows an alert message indicating that the login failed.
    // To use this function, simply enter a valid email address in the input field and click the "Login" button. Make sure that the /api/loginsession endpoint is properly implemented to handle the login functionality and that it sets the appropriate cookies or session data upon successful login.
    // Note: In a real application, you would want to implement proper authentication and security measures, such as validating user input, hashing passwords, and using secure cookies or token-based authentication.
    async function handleLogin(event){
        event.preventDefault();

        const response = await fetch("/api/loginsession",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email.trim()}),
        });
        if(response.ok){
            router.push("/dashboard");
        }else{
            alert("Login failed");
        }
      }
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Login page</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>



            {/* resend email page ui */}
            <h2>Resend Email</h2>
            <input type="email" placeholder="Enter email to send test email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mb-4 w-full" />
            <button
                onClick={sendEmail}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Send Test Email
            </button>
        </div>
    );
}


