import CryptoTable from "./CryptoTable/CryptoTable";

const CryptomarketPrice = () => {
  return (
    <div className="mt-[70px] md:mt-[50px]">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-2xl font-bold font-montserrat titleStyle">
          Crypto Market <span>Price</span>
        </p>

        <div className="w-full md:max-w-[360px] md:ml-auto mt-5 flex items-center justify-center gap-2">
          <div className="relative w-full">
            <i
              className="fa-solid pt-4 fa-magnifying-glass absolute left-3"
              style={{
                color: "grey",
                fontSize: "18px",
                fontWeight: "100",
              }}
            ></i>
            <input
              type="search"
              placeholder="Search"
              name="search"
              className="bg-background text-inherit	w-full h-[50px] rounded focus:outline-none pl-10 pr-2"
            />
          </div>

          <button className="flex items-center rounded font-montserrat font-bold bg-primary p-3">
            <p className="">Search</p>
          </button>
        </div>
      </div>
      <CryptoTable />
    </div>
  );
};

export default CryptomarketPrice;
