import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, description } = await request.json();

        const category = await db.category.create({
            data: { 
                name,
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

export async function GET(request) {
    try {
        const categories = await db.category.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Warehouse
            },
        })
        return NextResponse.json(categories)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the categories"
        },{
            status: 500
        })
    }
}