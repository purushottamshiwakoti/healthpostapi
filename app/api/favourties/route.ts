import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {userId}=await req.json()
        await db.favourites.create({
            data:{
                userId
            }
        });

        return NextResponse.json({message:"Successfullt added favourties"},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}