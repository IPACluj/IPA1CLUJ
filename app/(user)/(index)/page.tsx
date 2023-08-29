"use client";
import prismadb from "@/lib/prismadb";
import Card from "./components/card";
import CatMenu from "./components/cat-menu";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface RootPageProps {
  searchParams: {
    id: string;
    name: string;
  };
}

const Home = ({ searchParams }: RootPageProps) => {

  const [categories, setCategories] = useState<any[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  const [filteredCards, setFilteredCards] = useState<any[]>([]); // Store the filtered cards

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
      setFilteredCards(cards)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Re-fetch data whenever the categoryId changes

    const sortData = (searchParams: RootPageProps["searchParams"]) => {
    console.log(searchParams.id, searchParams.name);
    const selectedCategory = categories.find(
      (category) => category.name === searchParams.id
    );
    if (searchParams.id == "Toate") {
      console.log(cards);
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
    if(searchParams.name){
      const fcards = cards.filter(card =>
        card.name.toLowerCase().includes(searchParams.name.toLowerCase()) // 
      );
      setFilteredCards(fcards)
    }

    // Sorting logic here to create 'sortedData'
    // const sortedData = searchParams.sort(/* sorting logic */);

    return 0;
  };

  useEffect(() => {
    sortData(searchParams);
  }, [ searchParams]); // Re-fetch data whenever the categoryId changes

  return (
    <div className="h-full  mr-2 ">
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
export const dynamic = "force-dynamic";
