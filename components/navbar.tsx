"use client";
import Typewriter from "../components/Typewriter";

import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import MobileSidebar from "./mobile-sidebar";
import SearchInput from "./search-input";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { LoginButton, LogoutButton } from "@/app/(auth)/auth";
import { User } from "@/app/(auth)/user";
import { useSession } from "next-auth/react";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("no login");
    },
  });
  console.log(status)
  const textToType = "Cluj";
  return (
    <div className="sticky top-0 z-20">
      <div className="w-full px-4 items-center border-primary/10 bg-secondary border-b-2 flex">
        <img
          className="w-[5rem]  "
          src="/ipa_logo_edit.png"
          alt="IPA Logo"
        />
        <div className={cn("ml-3 text-[23px] mr-4 ", font.className)}>
          {" "}
          <div className="-mb-1">I.P.A_1</div>
          <div className="text-blue-300 ">
            <Typewriter text={textToType} />
          </div>
        </div>

        {/* <MobileSidebar /> */}
        <div className="hidden md:block flex-1 ">
          <SearchInput />
        </div>
        <div>
          {" "}
          {/* <LoginButton></LoginButton> */}
          {status !== 'loading'? <LogoutButton></LogoutButton> : null}{" "}
        </div>
        <div className="flex ml-auto items-center space-x-2">
          {/* <Button
            className="hidden  md:block px-2.5 py-1"
            variant="premium"
            size="sm"
          >
            Login
          </Button> */}

          <ModeToggle />
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
