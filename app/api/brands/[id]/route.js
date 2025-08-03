import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}) {
    try {
        const brand = await db.brand.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(brand)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the brand"
        },{
            status: 500
        })
    }
}

export async function PUT(request,{params:{id}}) {
    try {
        const {name} = await request.json();
        console.log('Name of the Brand to be updated',name);
        
        console.log(name);        
        const brand = await db.brand.update({
            where: {
                id,
            },
            data: {
                name,
            }
        })
        console.log('Brand updated to');        
        console.log(brand);
        
        return NextResponse.json(brand)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to update the brand"
        },{
            status: 500
        })
    }
}