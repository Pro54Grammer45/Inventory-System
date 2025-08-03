import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}) {
    try {
        const unit = await db.unit.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the unit"
        },{
            status: 500
        })
    }
}

export async function PUT(request,{params:{id}}) {
    try {
        const { name, abbreviation } = await request.json();
        console.log('Name of the Brand to be updated',name);
        
        console.log(name);        
        const unit = await db.unit.update({
            where: {
                id,
            },
            data: {
                name,
                abbreviation,
            }
        })
        console.log('Unit updated to');        
        console.log(unit);
        
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to update the unit"
        },{
            status: 500
        })
    }
}