import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";

const Acte = () => {
  return (
    <div>
      {" "}
      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl font-semibold">
        {" "}
        <Link
          href="/Statutul-IPA.pdf"
          download="/Statutul-IPA.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-red-400">
            <div>
              <div className="flex">
                {" "}
                <div>Statutul-IPA </div>
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>
      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl font-semibold">
        {" "}
        <Link
          href="assets/A_Cerere-inscriere-membru-de-drept.pdf"
          download="assets/A_Cerere-inscriere-membru-de-drept.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div>Statutul-IPA </div>
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Acte;
