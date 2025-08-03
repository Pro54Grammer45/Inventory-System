import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name } = await request.json();

        const brand = await db.brand.create({
            data: { 
                name,
            }
        });
        console.log(brand);
        
        return NextResponse.json(brand)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to create brand"
        },{
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const brands = await db.brand.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Warehouse
            },
        })
        return NextResponse.json(brands)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the brands"
        },{
            status: 500
        })
    }
}