import Navbar from "@/components/navbar";
import Image from "next/image";
import CatMenu from "./components/cat-menu";
import Card from "./components/card";
import prismadb from "@/lib/prismadb";

export default async function Home() {


  const categories = await prismadb.category.findMany();
  const card = await prismadb.card.findMany();

  console.log(card)


  return (
    <div className="h-full  mr-2 ">
      <div className="">
        <CatMenu categories={categories} />
      </div>
      <div className="grid mt-6 md:gap-4 lg:gap-8 xl:gap-12 content-around max-w-6xl mx-auto md:grid-cols-2">
        <Card data={card}></Card>
        
      </div>
    </div>
  );
}
