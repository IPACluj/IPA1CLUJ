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
          <div className="flex justify-center rounded-md text-xl border-2 border-dashed border-red-400">
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
      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl ">
        {" "}
        <Link
          href="/A_Cerere-inscriere-membru-de-drept.pdf"
          download="/A_Cerere-inscriere-membru-de-drept.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div>Cerere inscriere membru de drept </div>
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>
      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl ">
        {" "}
        <Link
          href="/B_Cerere-inscriere-membru-simpatizant.pdf"
          download="/B_Cerere-inscriere-membru-simpatizant.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div>Cerere inscriere membru simpatizant </div>
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>
      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl ">
        {" "}
        <Link
          href="/C_Cerere-inscriere-membru-extraordinar.pdf"
          download="/C_Cerere-inscriere-membru-extraordinar.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div>Cerere inscriere membru extraordinar</div>
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>
      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl ">
        {" "}
        <Link
          href="/D_Cerere-reinscriere-membru-de-drept.pdf"
          download="/D_Cerere-reinscriere-membru-de-drept.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div>Cerere reinscriere membru de drept</div>
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>
      
      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl ">
        {" "}
        <Link
          href="/E_Cerere-reinscriere-membru-simpatizant.pdf"
          download="/E_Cerere-reinscriere-membru-simpatizant.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div>Cerere reinscriere membru simpatizant</div>
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>

      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl ">
        {" "}
        <Link
          href="/F_Cerere-reinscriere-membru-extraordinar.pdf"
          download="/F_Cerere-reinscriere-membru-extraordinar.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div> Cerere reinscriere membru extraordinar</div> 
                <div className="text-red ml-2">
                  {" "}
                  <ArrowDownToLine />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </Link>
      </div>

      <div className="text-center md:w-2/3 mx-4 md:mx-auto mt-5 text-xl ">
        {" "}
        <Link
          href="/G_cerere-transfer.pdf"
          download="/G_cerere-transfer.pdf"
        >
          <div className="flex justify-center rounded-md  border-2 border-dashed border-blue-500">
            <div>
              <div className="flex">
                {" "}
                <div>Cerere transfer</div> 
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
