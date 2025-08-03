import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(request,{params:{id}}) {
    try {
        const item = await db.item.findUnique({
            where: {
                id
            },
        })
        return NextResponse.json(item)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the item"
        },{
            status: 500
        })
    }
}

export async function PUT(request,{params:{id}}) {
    try {
        const itemData = await request.json();
        console.log('Name of the item to be updated',itemData.name);
        
        console.log(itemData.name);        
        const item = await db.item.update({
            where: {
                id,
            },
            data: {
            name: itemData.name, 
            description: itemData.description, 
            categoryId: itemData.categoryId, 
            sku: itemData.sku, 
            barcode: itemData.barcode, 
            quantity: parseInt(itemData.qty), 
            unitId: itemData.unitId, 
            brandId: itemData.brandId, 
            sellingPrice: parseFloat(itemData.sellingPrice), 
            buyingPrice: parseFloat(itemData.buyingPrice), 
            supplierId: itemData.supplierId, 
            reOrderPoint: parseInt(itemData.reOrderPoint), 
            warehouseId: itemData.warehouseId, 
            imageUrl: itemData.imageUrl, 
            weight: parseFloat(itemData.weight), 
            dimensions: itemData.dimensions, 
            taxRate: parseFloat(itemData.taxRate), 
            notes: itemData.notes
            }
        })
        console.log('item updated to');        
        console.log(item);
        
        return NextResponse.json(item)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to update the item"
        },{
            status: 500
        })
    }
}