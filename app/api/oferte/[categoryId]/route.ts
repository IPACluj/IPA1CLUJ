import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    var cards = await prismadb.card.findMany();
    const categories = await prismadb.category.findMany();

    return NextResponse.json({ categories, cards });
  } catch (error) {
    console.log("db error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export const dynamic = "force-dynamic";
