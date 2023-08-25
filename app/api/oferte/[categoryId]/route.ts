import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  // res: Response,
  {
    params,
  }: {
    params: {
      categoryId?: any;
    };
  }
) {
  try {
    const getparams = new URLSearchParams(params.categoryId);

    const id = getparams.get("id") as string;
    const name = getparams.get("name") as string;
    console.log(name);
    const categories = await prismadb.category.findMany();

    if (id == null || id == "Toate" || id == undefined) {
      var cards = await prismadb.card.findMany();
      cards = await prismadb.card.findMany({
        where: {
          name: {
            contains: name || "",
          },
        },
      });
    } else {
      const filtedcat = await prismadb.category.findMany({
        where: {
          name: {
            equals: id,
          },
        },
      });

      cards = await prismadb.card.findMany({
        where: {
          categoryId: filtedcat[0]?.id,
          name: {
            contains: name || "",
          },
        },
      });
    }

    return NextResponse.json({ categories, cards });
  } catch (error) {
    console.log("db error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export const dynamic = "force-dynamic";
