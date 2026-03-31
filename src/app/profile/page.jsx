import {cookies} from "next/headers"

import {redirect} from "next/navigation"


export default async function ProfilePage(){
    const cookiestore=await cookies();
    const user=cookiestore.get("user")?.value;
    if(!user){
        redirect("/signin");
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user}!</p>
        </div>
    );
      
}

// This is a simple profile page that checks for a "user" cookie. If the cookie is not present, it redirects the user to the sign-in page. If the cookie is present, it displays a welcome message with the user's email.
// To test this page, you can first log in using the login page, which will set the "user" cookie. Then, when you navigate to the profile page, it should display the welcome message with your email. If you try to access the profile page without logging in, it should redirect you to the sign-in page.
// Note: In a real application, you would want to implement proper authentication and security measures, such as using secure cookies, implementing token-based authentication, and validating user input.