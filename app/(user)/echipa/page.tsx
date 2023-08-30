const Echipa = () => {
  return (
    <div>
      <div className="items-center text-xl justify-items-center grid grid-cols-2">
        <div className="shadow-md place-items-center w-72 p-3 rounded-sm border-red-400 border-dashed border-2  bg-primary/5 text-center col-span-2 mt-5 ">
          <h1 className="font-semibold border-b-2 border-primary-25">
            Presedinte:
          </h1>
          <span>Szekely Elena Maria</span>
        </div>
        <div className="shadow-md w-64 col-span-2 md:col-span-1 place-items-center mt-5 p-3 rounded-sm border-blue-400 border-dashed border-2 bg-primary/5 text-center  ">
          <h1 className="font-semibold">Vicepresedinte 1</h1>
          <span>Padurean Aurel Ioan</span>
        </div>
        <div className="shadow-md w-64 col-span-2 md:col-span-1  place-items-center mt-5 p-3 rounded-sm border-blue-400 border-dashed border-2 bg-primary/5 text-center  ">
          <h1 className="font-semibold">Vicepresedinte 2</h1>
          <span>Coc Ovidiu Sorin</span>
        </div>
        <div className="shadow-md w-64 col-span-2 md:col-span-1  place-items-center mt-5 p-3 rounded-sm border-blue-400 border-dashed border-2 bg-primary/5 text-center  ">
          <h1 className="font-semibold">Secretar</h1>
          <span>Iosip Claudia Roxana</span>
        </div>
        <div className="shadow-md w-64 col-span-2 md:col-span-1  place-items-center mt-5 p-3 rounded-sm border-blue-400 border-dashed border-2 bg-primary/5 text-center  ">
          <h1 className="font-semibold">Trezorier</h1>
          <span>Ionescu Diana</span>
        </div>
      </div>
    </div>
  );
};

export default Echipa;
