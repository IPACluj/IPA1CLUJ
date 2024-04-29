"use client";
export const dynamic = "force-dynamic";

import prismadb from "@/lib/prismadb";
import Card from "./components/card";
import CatMenu from "./components/cat-menu";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Home =  () => {

  const [categories, setCategories] = useState<any[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]); // Store the filtered cards
  const searchParams = useSearchParams();
  const fetchData = async () => {
    try {
      // const queryString = new URLSearchParams(searchParams).toString()
      const response = await fetch(`/api/oferte/}`, {
        cache: "no-cache",
      }); //
      const responseData = await response.json();
      const categories = responseData.categories;
      const cards = responseData.cards;
      setCategories(categories);
      setCards(cards);
      setFilteredCards(cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Re-fetch data whenever the categoryId changes

  const sortData = (name: any, id: any) => {
    console.log(id, name);
    const selectedCategory = categories.find(
      (category) => category.name === id
    );      console.log(cards);

    if (id == "Toate") {
      setFilteredCards(cards);
    } else if (selectedCategory) {
      // Filter cards based on the selected category's id
      const cardsInSelectedCategory = cards.filter(
        (card) => card.categoryId === selectedCategory.id
      );
      if (cardsInSelectedCategory) {
        setFilteredCards(cardsInSelectedCategory);
      } else {
        setFilteredCards(cards);
      }
    }
    if (name) {
      const fcards = cards.filter((card) =>
        card.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredCards(fcards);
    }

    return 0;
  };

  useEffect(() => {
    var name = searchParams.get("name");
    var id = searchParams.get("id");
    sortData(name, id);
  }, [searchParams]);

  return (
    <div className="h-full mr-2 pb-5">
      <div className="">
        <CatMenu categories={categories} />
      </div>
      <div className="">
        <Card data={filteredCards}></Card>
      </div>
    </div>
  );
};
export default Home;
