import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,params:any){
    try {
        const id=params.params.id;
        const favourties=await db.favourites.findMany({
            where:{
                userId:id
            }

        });
        return NextResponse.json({
            message:"Successfully fetched favourites",favourties
        },{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
        
    }
}