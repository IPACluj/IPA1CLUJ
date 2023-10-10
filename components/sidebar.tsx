"use client";

import { cn } from "@/lib/utils";
import {
  MailPlus,
  BookCopy,
  User,
  Home,
  Plus,
  Settings,
  Target,
} from "../node_modules/lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Footer from "./footet";
import { SheetTrigger } from "./ui/sheet";
import { Menu } from "@radix-ui/react-menubar";
import { Signal } from "lucide-react";
import { BedDouble } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Colaborari Cluj",
      pro: false,
    },
    {
      icon: Signal ,
      href: "/tel",
      label: "Telefonie",
      pro: false,
    },
    {
      icon: BedDouble  ,
      href: "https://caseipa.iparomania.ro/?_ga=2.124805134.526262126.1694691861-544348090.1694691861",
      label: "Case IPA",
      pro: false,
    },
    {
      icon: User,
      href: "/echipa",
      label: "Echipa",
      pro: false,
    },
    {
      icon: BookCopy,
      href: "/acte",
      label: "Acte Normative",
      pro: false,
    },
    {
      icon: MailPlus,
      href: "/contact",
      label: "Contact",
      pro: false,
    },
   
  ];
  const onNavigate = (url: string, pro: boolean) => {
    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full  text-primary bg-secondary ">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <a
              href={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary  "
              )}

              key={route.href}
            >
              <div className="flex text-md flex-col gap-y-2 text-center items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 ",
                    route.label == "Acasa" && "text-[#0077b6] w-6 h-6 "
                  )}
                />
                {route.label}
              </div>
            </a>
          ))}
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
