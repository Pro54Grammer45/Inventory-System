import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}) {
    try {
        const warehouse = await db.warehouse.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the warehouse"
        },{
            status: 500
        })
    }
}

export async function PUT(request,{params:{id}}) {
    try {
        const { name, location, description, type } = await request.json();
        console.log('Name of the warehouse to be updated',name);        
        console.log(name);        
        const warehouse = await db.warehouse.update({
            where: {
                id,
            },
            data: { 
                name,
                location,
                description,
                warehouseType: type,
            }
        })
        console.log('warehouse updated to');        
        console.log(warehouse);
        
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to update the warehouse"
        },{
            status: 500
        })
    }
}