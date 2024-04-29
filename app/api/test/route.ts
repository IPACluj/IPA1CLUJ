import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check if the body contains an array of cards
    if (!Array.isArray(body)) {
      throw new Error("Request body must be an array of cards");
    }

    // Insert each card into the database
    const cardPromises = body.map(async (cardData) => {
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
      } = cardData;

      return prismadb.card.create({
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
    });

    // Wait for all card insertions to complete
    const insertedCards = await Promise.all(cardPromises);

    return new NextResponse(JSON.stringify(insertedCards));
  } catch (error) {
    console.error("Error in backend:", error);
    return new NextResponse("Error in backend", { status: 500 });
  }
}
