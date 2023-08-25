"use client";
import prismadb from "@/lib/prismadb";
import Card from "./components/card";
import CatMenu from "./components/cat-menu";
import { useEffect, useState } from "react";
import axios from "axios";

interface RootPageProps {
  searchParams: {
    id: string ;
    name:string ;
  };
}

// export const revalidate = 10;
const Home = ({ searchParams }: RootPageProps) => {
  const [categories, setCategories] = useState<any[]>([]); // Use the appropriate type for your data
  const [cards, setCards] = useState<any[]>([]); // Use the appropriate type for your data

  const fetchData = async (id: string) => {
    try {
    
      const queryString = new URLSearchParams(searchParams).toString()
      console.log(queryString);

      console.log(searchParams.id, searchParams.name)
      const response = await fetch(`/api/oferte/${queryString || 'all'}`, {
        cache: "no-cache",
      }); //
      // console.log(response)
      const responseData = await response.json();
      const categories = responseData.categories;
      const cards = responseData.cards;
      
      
      setCategories(categories);
      setCards(cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(searchParams.id);
  }, [searchParams.id, searchParams.name]); // Re-fetch data whenever the categoryId changes

  return (
    <div className="h-full  mr-2 ">
      <div className="">
        <CatMenu categories={categories} />
      </div>
      <div className="">
        <Card data={cards}></Card>
      </div>
    </div>
  );
};
export default Home;
