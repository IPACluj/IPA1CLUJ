import Navbar from "@/components/navbar";
import Image from "next/image";
import CatMenu from "./components/cat-menu";
import Card from "./components/card";
import prismadb from "@/lib/prismadb";

export default async function Home() {


  const categories = await prismadb.category.findMany();
  const data = await prismadb.card.findMany();



  return (
    <div className="h-full  mr-2 ">
      <div className="">
        <CatMenu categories={categories} />
      </div>
      <div className="">
        <Card data={data}></Card>
      </div>
    </div>
  );
}
