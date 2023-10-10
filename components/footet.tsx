import { MailCheck } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" text-muted-foreground  w-full fixed  text-left bottom-0 ">
      <span className="w-full border-t border-blue-300 text-xs ">
        Copyright © 2023
      </span>
      <p className="w-full flex text-xs ">
        {" "}
        Ripan Ionut{" "}
        <a href="mailto:ripan.ionut.web@gmail.com">
          <MailCheck className="w-5=4 h-4 ml-1 text-red-500" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
