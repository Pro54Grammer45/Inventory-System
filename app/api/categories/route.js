import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description } = await request.json();

        const category = await db.category.create({
            data: { 
                title,
                description,
            }
        });
        console.log(category);
        
        return NextResponse.json(category)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to create category"
        },{
            status: 500
        })
    }
}