"use client";

import { cn } from "@/lib/utils";
import {
  MailPlus,
  BookCopy,
  User,
  Home,
  Plus,
  Settings,
} from "../node_modules/lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Footer from "./footet";
const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Acasa",
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
    {
      icon: Settings,
      href: "/admin",
      label: "Setari Admin",
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
            <div
              onClick={() => onNavigate(route.href, route.pro)}
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
            </div>
          ))}
        </div>{" "}
      </div>
      <Footer />
    </div>
    
  );
};

export default Sidebar;
