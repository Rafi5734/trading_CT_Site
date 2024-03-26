import "./Banner.css";
const Banner = ({ pageTitle }) => {
  console.log(pageTitle);
  return (
    <div>
      <div id="banner">
        <svg
          id="banner-waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0f0f0f"
            fillOpacity="1"
            d="M0,160L288,192L576,224L864,288L1152,192L1440,96L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
        <h1
          className="text-white font-bold text-center md:text-left text-[30px] lg:text-[40px] capitalize leading-[48px] lg:leading-[68px]"
          id="pageTitle"
        >
          {pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
