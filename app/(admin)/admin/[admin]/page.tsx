import AddForm from "../../components/add-form";
import prismadb from "@/lib/prismadb";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface AdminProps {
  params: {
    admin: string;
  };
}

const Admin = async ({ params }: AdminProps) => {
  const id = params.admin;

  const categories = await prismadb.category.findMany();
  const cardEdit = await prismadb.card.findUnique({
    where: {
      id: id,
    },
  });
 

  return (
    <div>
      <AddForm
        initialData={cardEdit}
        categories={categories}
      />
    </div>
  );
};

export default Admin;
