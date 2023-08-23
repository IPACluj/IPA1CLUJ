import AddForm from "../components/add-form";
import prismadb from "@/lib/prismadb";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Admin = async () => {
 


  const categories = await prismadb.category.findMany();
  const cards = await prismadb.card.findMany();

  console.log(categories,cards)

  return (
    <div>
      <AddForm
        initialData={null}
        categories={categories}
      />
    </div>
  );
};

export default Admin;
