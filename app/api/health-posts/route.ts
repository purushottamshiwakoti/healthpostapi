import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const data=[
            {
                name:"Helping Hands Community Hospital",
                latitude:"27.71746",
                longitude:"85.3462",
                image:"https://corporatekhabar.com/wp-content/uploads/2021/11/helping.jpg"

            },
            {
                name:"kathmandu thapathali matrimoni hospital",
                latitude:"21.8616",
                longitude:"21.6048",
                image:"https://myrepublica.nagariknetwork.com/uploads/media/ParopakarMaternityandWomen'sHospital_20200823151136.jpg"

            },
            {
                name:"Teaching hospital Kathmandu",
                latitude:"27.7374",
                longitude:"85.3319",
                image:"https://assets-cdn.kathmandupost.com/uploads/source/news/2023/news/Untitled2copy-1702087396.jpg"

            },
            {
                name:"Blue Cross Hospital",
                latitude:"27.6937248",
                longitude:"27.6937248",
                image:"https://www.the-corporate.com/public/profile_images/26460-1620378685.jpg"

            },
        ];
        const hp=await db.healthPosts.findMany({
            // data
        })
        return NextResponse.json({message:"yes",hp},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}