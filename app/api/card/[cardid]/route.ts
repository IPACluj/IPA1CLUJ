import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { cardid: string } }
) {
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

    const card = await prismadb.card.update({
      where: {
        id: params.cardid,
      },
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

    return NextResponse.json(card);
  } catch (error) {
    console.log("Erroare in Backend", error);
    return new NextResponse("Erroare in Backend", { status: 500 });
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: { cardid: string } }
) {
  try {

    const cardDelete = await prismadb.card.delete({
      where: {
        id: params.cardid,
      },
    });

    return NextResponse.json(cardDelete);
  } catch (error) {
    console.log("[ERROR_delete]");

    return new NextResponse("Internal Error", { status: 500 });
  }
}
