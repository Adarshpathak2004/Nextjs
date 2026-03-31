

import { cookies } from "next/headers";
import {redirect} from "next/navigation";


export default async function LogoutPage(){
    const cookieStore = await cookies();
   cookieStore.delete("user");
   return new Response("Logout successful", {status: 200});
    // redirect("/signin");
}

// This is a simple logout page that deletes the "user" cookie and redirects the user to the sign-in page. In a real application, you would want to implement proper authentication and security measures.
// To test this page, you can first log in using the login page, which will set the "user" cookie. Then, when you navigate to the logout page, it should delete the "user" cookie and redirect you to the sign-in page. If you try to access the logout page without logging in, it should simply redirect you to the sign-in page.
// Note: In a real application, you would want to implement proper authentication and security measures, such as using secure cookies, implementing token-based authentication, and validating user input.