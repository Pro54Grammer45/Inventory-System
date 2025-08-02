import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { 
            name, 
            phone, 
            email, 
            address, 
            contactPerson, 
            supplierCode, 
            taxID, 
            paymentTerms, 
            notes 
        } = await request.json();

        const supplier = await db.supplier.create({
            data: { 
                name, 
                phone, 
                email, 
                address, 
                contactPerson, 
                supplierCode, 
                taxID, 
                paymentTerms, 
                notes                 
            }
        });
        console.log(supplier);
        
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to create supplier"
        },{
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const supplier = await db.supplier.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Warehouse
            },
        })
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the suppliers"
        },{
            status: 500
        })
    }
}