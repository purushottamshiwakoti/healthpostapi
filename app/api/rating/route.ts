import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {rating,healthPostsId,userId}=await req.json()
        await db.ratings.create({
            data:{
                rating,
                healthPostsId,
                userId
            }
        });

        return NextResponse.json({message:"Successfullt added rating"},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}