import { PhoneCall, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-10 flex justify-center text-xl ">
      <div className="flex-row ">
        {" "}
        <div className="flex items-center justify-center">
          <div className="mr-2 mb-1 hover:bg-primary/30 bg-primary/25 p-[0.6rem] shadow-md rounded-full text-blue-400 ">
            {" "}
            <a target="blank" href="tel:0745 301 015">
              <PhoneCall />
            </a>
          </div>
          <div className="mb-2">0745 301 015</div>
        </div>
        <div className="text-muted-foreground mx-auto text-center">
          Szekely Elena Maria
        </div>
        <div className="flex mt-6 items-center justify-center  ">
        <div className="mr-2 mb-1 hover:bg-primary/30 bg-primary/25 p-[0.6rem] shadow-md rounded-full text-blue-400 ">
            {" "}
            <a target="blank" href="mailto:cluj1ipa@gmail.com
">
              <Mail />
            </a>
          </div>
          <div className="mb-2">cluj1ipa@gmail.com</div>
        </div>{" "}
        <div className="text-muted-foreground text-center">
          IPA Cluj-Napoca
        </div>
      </div>
    </div>
  );
};

export default Contact;
