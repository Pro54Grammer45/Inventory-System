import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const itemData = await request.json();

        const item = await db.item.create({
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
        
        return NextResponse.json(item)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to create item"
        },{
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const items = await db.item.findMany({
            orderBy: {
                createdAt: 'desc' //Latest Warehouse
            },
            include: {
                category: true, //retuwn all categories fields
                supplier: true, //retuwn all suppliers fields
            }
        })
        return NextResponse.json(items)
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error,
            message: "Failed to fetch the items"
        },{
            status: 500
        })
    }
}