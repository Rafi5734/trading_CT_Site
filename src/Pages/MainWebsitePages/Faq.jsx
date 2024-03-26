import Banner from "../../SharedComponent/SubPages/Banner";
import FaqAccordion from "./FaqAccordion/FaqAccordion";

const Faq = () => {
  return (
    <div>
      <Banner pageTitle={"Your Frequently Asked Questions"} />
      <div className="w-11/12 2xl:max-w-[1600px] mx-auto mb-10">
        <div className="w-full lg:w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 bg-background p-5 rounded-xl">
            <div>
              <p className="innerTitleStyle">
                Getting Started: How to{" "}
                <span className="text-[#289dcf]">Create an Account</span>
              </p>
              <p className="cardDescriptionStyle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?
              </p>
            </div>
            <div>
              <FaqAccordion
                title="How do i create an account on the trading app?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
              <FaqAccordion
                title="Can I have multiple trading accounts under one profile?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
              <FaqAccordion
                title="Is there minimum age requirement to open an account?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
              <FaqAccordion
                title="How long doest it take to verify my account?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
            </div>
            <div className="mt-10">
              <p className="innerTitleStyle">
                Trading Features:{" "}
                <span className="text-[#289dcf]">Order Type and Execution</span>
              </p>
              <p className="cardDescriptionStyle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?
              </p>
            </div>
            <div className="lg:pt-10 sm:pt-0 xs:pt-0">
              <FaqAccordion
                title="What are the different types of orders available on the app?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
              <FaqAccordion
                title="How does the app execute market orders?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
              <FaqAccordion
                title="What is the difference between limit and stop orders?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
              <FaqAccordion
                title="Can I place after-market or pre-market orders?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
              <FaqAccordion
                title="Are there any order restrictions or limitations?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nihil minima eaque ducimus. Earum quibusdam natus facere quasi
                asperiores cumque?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
