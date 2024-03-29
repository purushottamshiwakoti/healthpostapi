import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,params:any){
    try {
        const id=params.params.id;
        const hp=await db.healthPosts.findUnique({
            where:{
                id
            },
            include:{
                favourties:true,
                ratings:true
            }
        });

        return NextResponse.json({message:"Successfully fetched",hp})

    } catch (error) {
     return NextResponse.json({message:"Something went wrong",error})
    }
}