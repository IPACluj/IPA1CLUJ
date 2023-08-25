"use client";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";
import axios from "axios";
import { getServerSession } from "next-auth";
import React, { useState, useEffect } from "react";
import { User } from "@/app/(auth)/user";
import { LoginButton, LogoutButton } from "@/app/(auth)/auth";

import { useSession } from "next-auth/react";

const Protect = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log('no login')
    },
  });

  if(status === 'loading') {
    return "loadin or unauth"
  }


  return <div>Protected</div>;
};

export default Protect;
