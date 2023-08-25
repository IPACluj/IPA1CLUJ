import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddForm from "../components/add-form";
import prismadb from "@/lib/prismadb";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { User } from "@/app/(auth)/user";
import { LoginButton, LogoutButton } from "@/app/(auth)/auth";
import { redirect } from "next/navigation";

const Admin = async () => {
  const session = await getServerSession(authOptions);

  const categories = await prismadb.category.findMany();

  if (!session) {
    redirect("api/auth/signin");
  }

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
