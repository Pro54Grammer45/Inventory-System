import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, location, description, type } = await request.json();

        const warehouse = await db.warehouse.create({
            data: { 
                name,
                location,
                description,
                warehouseType: type,
            }
        });
        console.log(warehouse);
        
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to create warehouse"
        },{
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const warehouse = await db.warehouse.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Warehouse
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

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get('id')
        

        const deletedWarehouse = await db.warehouse.delete({
            where: {
                id,
            }
        })
        console.log('Deleted warehouse is ',deletedWarehouse);
        return NextResponse.json(deletedWarehouse)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to delete warehouse"
        },{
            status: 500
        })        
    }
}