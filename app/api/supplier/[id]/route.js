import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}) {
    try {
        const supplier = await db.supplier.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the supplier"
        },{
            status: 500
        })
    }
}

export async function PUT(request,{params:{id}}) {
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
        console.log('Name of the supplier to be updated',name);
        
        console.log(name);        
        const supplier = await db.supplier.update({
            where: {
                id,
            },
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
        })
        console.log('supplier updated to');        
        console.log(supplier);
        
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to update the supplier"
        },{
            status: 500
        })
    }
}