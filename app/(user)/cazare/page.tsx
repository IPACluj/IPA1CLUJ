import Link from "next/link";

const Tel = () => {
  return (
    <div className="flex flex-col mt-16  gap-10 text-center text-2xl items-center ">
    
      <div className="  hover:shadow-2xl">
        <div>
          <Link href="https://parteneriate.iparomania.ro/listing/oferta-orange/?_ga=2.81905493.234356833.1693901517-1383527654.1693901517">
            <img
              className="h-40 w-40"
              src="orange.png"
            ></img>
          </Link>
        </div>
      </div>
      <div className="w-1/2 border-2 border-gray-300"></div>
      <div className="">
        <div>
          <Link href="https://vodafone.ipasr-regiuni.ro/">
            <img
              className="hover:shadow-2xl h-40 w-40"
              src="vd.png"
            ></img>
          </Link>
        </div>
      </div>{" "}
      <div className="w-1/2 border-2 border-gray-300"></div>
      <div className="">
        <div className="hover:shadow-2xl">
          <Link
            href="
          https://parteneriate.iparomania.ro/listing/oferta-telekom/?_ga=2.217060758.1090511260.1693901501-695918688.1693901501"
          >
            {" "}
            <img
              className="h-40 w-40"
              src="tk.svg"
            ></img>
            <div className="mb-2 font-bold"> Telekom</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tel;
