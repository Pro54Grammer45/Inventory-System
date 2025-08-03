import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}) {
    try {
        const category = await db.category.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(category)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the category"
        },{
            status: 500
        })
    }
}

export async function PUT(request,{params:{id}}) {
    try {
        const { name, description } = await request.json();
        console.log('Name of the category to be updated',name);
        
        console.log(name);        
        const category = await db.category.update({
            where: {
                id,
            },
            data: { 
                name,
                description,
            }
        })
        console.log('category updated to');        
        console.log(category);
        
        return NextResponse.json(category)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to update the category"
        },{
            status: 500
        })
    }
}