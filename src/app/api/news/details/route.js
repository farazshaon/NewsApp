import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"


export async function GET(req, res) {
    try{
        let {searchParams} = new URL(req.url)
        let id = parseInt(searchParams.get('id'))
        const prisma = new PrismaClient();
        const result = await prisma.news_list.findUnique({
            where:{id:id},
            include:{categories:true}
        })

        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}