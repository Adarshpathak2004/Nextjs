

import {getServerSession} from "next-auth/next"
import { cookies } from "next/headers";
import {redirect} from "next/navigation";
import LogoutButton from "../Logoutbutton";


export default async function DashboardPage() {
    const session = await getServerSession();
    const cookieStore = await cookies();
    const cookieUser = cookieStore.get("user")?.value;
    

    if(!session && !cookieUser) {
        return redirect("/");
    }

    const displayName = session?.user?.name || cookieUser;
    const displayEmail = session?.user?.email || cookieUser;
    const displayImage = session?.user?.image;

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {displayName}!</p>
            <p>Email: {displayEmail}</p>
            {displayImage ? <img src={displayImage} alt="User Avatar" className="w-16 h-16 rounded-full" /> : null}
            <LogoutButton />
        </div>
    )
    }
