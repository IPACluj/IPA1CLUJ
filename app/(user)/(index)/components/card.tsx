import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { PhoneOutgoing } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { Clock3, BadgePercent } from "lucide-react";
import Image from "next/image";
import styles from "../../pages.module.css";
import { Card } from "@prisma/client";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
// import { ToastAction } from "@/components/ui/toast";
import { useSession } from "next-auth/react";
import { stat } from "fs";

interface CardProps {
  data: Card[];
}

const font = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const Card = ({ data }: CardProps) => {
  const { status } = useSession();
  const { toast } = useToast();

  async function Delete(id: string, name: string) {
    try {
      toast({
        variant: "destructive",
        title: `Ai Sters ${name} `,
      });
      await axios.delete(`/api/card/${id}`);
    } catch (error) {
      // router.refresh();
      console.log(error);
    }
  }
  return (
    <div className="grid mt-6 md:gap-4 lg:gap-8 xl:gap-12 content-around max-w-[100rem] mx-auto 2xl:grid-cols-2">
      {data.map((item) => (
        <div
          key={item.id}
          className={cn(
            "font flex bg-primary/5  shadow-md md:mx-5 mx-2 mb-4 rounded-xl  transition border-0",
            font.className
          )}
        >
          <Link
           
            href={item.maps_link}
          >
            {" "}
            <div className="cursor-pointer hover:opacity-75 h-32 w-32 xl:h-52  md:w-40 xl:w-56 mt-[0.5rem] mb-2 ml-[0.4rem]">
              <img
                alt="img"
                className="rounded-xl m-auto h-full object-cover  shadow-md"
                src={item.photo}
              ></img>
            </div>
          </Link>

          <div className="ml-1 mt-1 mb-1 flex-1 flex flex-col  ">
            <div className="flex mr-2">
              <div className=" flex-1 ">{item.name}</div>
              <div className="rounded-sm  bg-red-600  ">
                <span className=" flex flex-2  items-center border-blue-300  px-0.5">
                  <Image
                    src="https://res.cloudinary.com/dls9oufks/image/upload/v1692617121/price-tag_fw5iva.png"
                    alt="icon"
                    className={`${styles.coloredImage} z-1 `}
                    width={18}
                    height={18}
                  />
                  {/* <BadgePercent className="w-4 h-4" /> */}
                  <span className="ml-1 text-white">{item.procent}%</span>
                </span>{" "}
              </div>
            </div>
            <div className="flex-1 xl:text-md md:text-xs text-xs h-full text-muted-foreground">
              {item.s_description}
            </div>
            <div className="flex  text-primary items-center ">
              <Clock3 className="w-4 h-4 mr-1 mb-1" />
              <span className="text-xs pb-1">{item.time}</span>{" "}
              {status === "authenticated" && (
                <div className="ml-auto">
                  {" "}
                  <Link
                    href={`/admin/${item.id}`}
                    className=" mx-1 items-center rounded-sm bg-blue-500 py-0.2 px-2  "
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => Delete(item.id, item.name)}
                    className="ml-auto items-center rounded-sm bg-red-500 py-0.2 px-2  "
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

            <div className="grid border-t-2 text-sm border-slate-600 pt-1 grid-cols-2 place-items-center">
              <Link
                target="_blank"
                href="tel:0752023611"
              >
                {" "}
                <div className="flex ml-0 items-center hover:text-blue-300 cursor-pointer col-span-1">
                  <span className="pr-2 hidden md:block">{item.tel}</span>
                  <PhoneOutgoing className="w-4 h-4 text-blue-300" />
                </div>
              </Link>

              <Link
               
                href={item.maps_link}
              >
                <div className="flex items-center hover:text-blue-300 cursor-pointer">
                  <span className="pr-2 hidden md:block">Visit</span>
                  <MapPin className="w-4 h-4 text-blue-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
