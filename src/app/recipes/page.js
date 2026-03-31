

"use client";
import {useState} from "react";

export default function RecipesPage() {
    const [likes,setlikes] = useState(0);


    async function handleLike() {
        const res=await fetch("/api/like",{
            method:"POST",
        });

        const data = await res.json();
        setlikes(data.likes);
    }

    return (
        <div>
            <h1>Recipes</h1>
            <button onClick={handleLike}>Like</button>
            <p>Likes: {likes}</p>
        </div>
    )
}