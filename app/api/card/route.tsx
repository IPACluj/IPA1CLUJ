import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      s_description,
      l_description,
      procent,
      photo,
      time,
      maps_link,
      tel,
      categoryId,
    } = body;

    console.log(body)


    const card = await prismadb.card.create({
      data: {
        name,
        s_description,
        l_description,
        procent,
        photo,
        time,
        maps_link,
        tel,
        categoryId,
      },
    });

    console.log(card)

    return NextResponse.json(card);
  } catch (error) {
    console.log("Erroare in Backend", error);
    return new NextResponse("Erroare in Backend", { status: 500 });
  }
}
