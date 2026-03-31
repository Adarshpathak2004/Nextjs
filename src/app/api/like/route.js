

let likecount=0;
export async function POST() {
    likecount++;
    return  Response.json({likes:likecount});
}