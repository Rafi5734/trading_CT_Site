import { Link } from "react-router-dom";
import Banner from "../../SharedComponent/SubPages/Banner";
import { useGetMediaListQuery } from "../../API/Media/mediaSlice";

const Help = () => {
  const { data: mediaData, isLoading } = useGetMediaListQuery();
  console.log(mediaData?.data);
  return (
    <div>
      <Banner pageTitle={"Help"} />
      <div className="w-11/12 2xl:max-w-[1600px] mx-auto mb-10 rounded-xl bg-background p-3">
        <div className="w-full lg:w-[80%] mx-auto mt-8 pb-5">
          <h1 className="poppins text-center titleStyle poppins">
            Paid<span> Media</span>
          </h1>
          <div className="w-full md:w-10/12 lg:w-9/12 mx-auto">
            <p className="cardDescriptionStyle poppins">
              We are an industry-leading trading website that provides some
              amazing features to do trading smartly and safely and insights
              about trading, investing, and how it impacts your business -and
              career. Have a question for us or feedback?
            </p>
          </div>

          <div className="mt-8 poppins grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            {mediaData &&
              mediaData?.data?.map((data, index) => (
                <div key={index} className="border border-slate-500 rounded-xl">
                  <img className="rounded-t-lg" src={data?.image} />
                  {/* to={videoUrl} */}
                  <Link to={data?.videoUrl}>
                    <p className="p-3 text-lg font-bold no-underline hover:underline">
                      {data?.authorName}
                    </p>
                  </Link>
                  <p className="p-3 text-[#289dcf] font-bold">{data?.title}</p>

                  <p className="pt-0 ps-3 pe-3 pb-3  cardDescriptionStyle">
                    {data?.description}
                  </p>
                </div>
              ))}
            {/* <div className="border border-slate-500 rounded-xl">
              <img
                className=""
                src="https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
              <Link>
                <p className="p-3 text-lg font-bold no-underline hover:underline">
                  5 Reasons Why Your PPC Leads Are Not Converting
                </p>
              </Link>
              <p className="p-3 text-[#289dcf] font-bold">ITS - options</p>

              <p className="pt-0 ps-3 pe-3 pb-3  cardDescriptionStyle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                temporibus cupiditate quidem a dolor! Exercitationem tempora
                possimus sed libero cumque voluptas excepturi, corrupti sunt,
                facere nulla et, rerum animi deserunt?
              </p>
            </div>
            <div className="border border-slate-500 rounded-xl">
              <img
                className=""
                src="https://plus.unsplash.com/premium_photo-1670249419932-a7027d9003f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
              <Link>
                <p className="p-3 text-lg font-bold no-underline hover:underline">
                  5 Reasons Why Your PPC Leads Are Not Converting
                </p>
              </Link>
              <p className="p-3 text-[#289dcf] font-bold">ITS - options</p>

              <p className="pt-0 ps-3 pe-3 pb-3  cardDescriptionStyle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                temporibus cupiditate quidem a dolor! Exercitationem tempora
                possimus sed libero cumque voluptas excepturi, corrupti sunt,
                facere nulla et, rerum animi deserunt?
              </p>
            </div>
            <div className="border border-slate-500 rounded-xl">
              <img
                className=""
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              />
              <Link>
                <p className="p-3 text-lg font-bold no-underline hover:underline">
                  5 Reasons Why Your PPC Leads Are Not Converting
                </p>
              </Link>
              <p className="p-3 text-[#289dcf] font-bold">ITS - options</p>

              <p className="pt-0 ps-3 pe-3 pb-3  cardDescriptionStyle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                temporibus cupiditate quidem a dolor! Exercitationem tempora
                possimus sed libero cumque voluptas excepturi, corrupti sunt,
                facere nulla et, rerum animi deserunt?
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
