import prismadb from "@/lib/prismadb";
// import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  
  try {
    const categories = await prismadb.category.findMany();
    const cards = await prismadb.card.findMany();
    // Perform any necessary backend logic using the 'id'
    // return  NextResponse.json(categories);
    return NextResponse.json({categories,cards});
  } catch (error) {
    console.log("db error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
