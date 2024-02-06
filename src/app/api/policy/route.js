import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
    
        const prisma = new PrismaClient();
        let {searchParams} = new URL(reu.url);
        let type = searchParams.get('type');
        const result = await prisma.policies.findUnique({where:{type:type}})
        return NextResponse.json({status:"success", data:result})
    } catch(e) {
        return NextResponse.json({status:"fail", data:e})
    }
}