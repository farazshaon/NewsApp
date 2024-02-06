import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req, res) {
    try {
        let reqBody = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.subscribers.create({data:reqBody})
        return NextResponse.json({status:"Success", data:result})
    }catch (e){
        NextResponse.json({status: "fail", data: e})
    }

}