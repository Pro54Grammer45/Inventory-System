import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { 
            referenceNumber, 
            itemId, 
            addStockQty, 
            receivingWarehouseId, 
            notes
        } = await request.json();

        const adjustment = await db.addStockAdjustment.create({
            data: { 
                referenceNumber,
                itemId,
                addStockQty: parseInt(addStockQty),
                receivingWarehouseId,
                notes,
            }
        });
        console.log(adjustment);
        
        return NextResponse.json(adjustment)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to create adjustment"
        },{
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const adjustments = await db.addStockAdjustment.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Warehouse
            },
        })
        return NextResponse.json(adjustments)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the adjustments"
        },{
            status: 500
        })
    }
}