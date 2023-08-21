"use client";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { PhoneOutgoing } from "lucide-react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { Clock3, BadgePercent } from "lucide-react";
import Image from "next/image";
import styles from "../../pages.module.css";
import { Card } from "@prisma/client";


interface CardProps {
  data:Card[];
}


const font = Poppins({
  weight: "500",
  subsets: ["latin"],
});
const Card = ({data}:CardProps) => {
  return (
    <div>
    {data.map((item) => (
      <div
      key={item.id}
      className={cn(
        "font flex bg-primary/5  shadow-md mx-5 md:mx-0 mb-4 rounded-xl  transition border-0",
        font.className
      )}
    >
      <Link target="_blank" href={item.maps_link}>
        {" "}
        <div className="cursor-pointer hover:opacity-75 h-full w-44 xl:w-56 mt-2 mb-2 ml-[0.4rem]">
          <img
            className="rounded-xl object-cover  shadow-md"
            src={item.photo}
          ></img>
        </div>
      </Link>

      <div className="ml-1 mt-1 mb-1 flex-1 flex flex-col  ">
        <div className="flex mr-2">
          <div className=" flex-1 ">{item.name}</div>
          <div className="rounded-sm mb-1 bg-red-600  h-[1.7rem]">
            <span className=" flex flex-2  items-center border-blue-300 p-[0.05rem] px-0.5">
              <Image
                src="/price-tag.png "
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
        <div className="flex-1 xl:text-md md:text-sm text-md h-full text-muted-foreground">
          {item.s_description}
        </div>
        <div className="flex  text-primary items-center ">
          <Clock3 className="w-5 h-5 mr-1 mb-1" />
          <span className="text-sm pb-1">{item.time}</span>
        </div>

        <div className="grid border-t-2  border-slate-600 pt-1 grid-cols-2 place-items-center">
          <Link href="tel:0752023611">
            {" "}
            <div className="flex ml-0 items-center hover:text-blue-300 cursor-pointer col-span-1">
              <span className="pr-2">{item.tel}</span>
              <PhoneOutgoing className="w-5 h-5 text-blue-300" />
            </div>
          </Link>

          <Link
            target="black"
            href="https://www.google.com/search?sca_esv=558024616&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=AB5stBiGAkpMexJ7ALNZqrQIwvPKpw9DoA:1692338318168&q=kfc+locations+cluj&rflfq=1&num=10&ved=2ahUKEwiA6qzCw-WAAxVG_qQKHVeECdUQtgN6BAghEAc#rlfi=hd:;si:;mv:[[46.7741839,23.6343039],[46.7488526,23.5280465]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4"
          >
            <div className="flex items-center hover:text-blue-300 cursor-pointer">
              <span className="pr-2">Visit</span>
              <MapPin className="w-5 h-5 text-blue-300" />
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
