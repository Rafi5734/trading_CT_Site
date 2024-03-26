import axios from "axios";
import Banner from "../../SharedComponent/SubPages/Banner";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
// import { useState, useEffect } from "react";
// import HashLoader from "react-spinners/HashLoader";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSendMessage = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const telephone = form.telephone.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const question = form.question.value;
    const postData = {
      name,
      telephone,
      email,
      subject,
      question,
    };
    const apiUrl = "https://stock-back.vercel.app/api/v1/message";
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(apiUrl, postData, { headers })
      .then((response) => {
        if (response.data.status === "error") {
          toast.error(response.data.message);
          setIsLoading(true);
        } else {
          Swal.fire({
            title: "Message sent successful!",
            text: "After review your message we will contact with you.",
            icon: "success",
            confirmButtonText: "OK",
            font: 'Montserrat'
          });
          setIsLoading(false);
          form.reset();
        }
      })
      .catch((error) => {
        console.error("updated Error: ", error);
      });
  };
  return (
    <div>
      <Banner pageTitle={"Give The Feedback & Contact Now"} />
      <div className="w-11/12 2xl:max-w-[1600px] mx-auto mb-10 rounded-xl bg-background p-5">
        <div className="w-full lg:w-[80%] mx-auto mt-8">
          <h1 className="text-center pt-3 titleStyle font-montserrat">
            Get Closer <span>with Me</span>
          </h1>
          <p className="cardDescriptionStyle font-montserrat">
            We are an industry-leading trading website that provides some
            amazing features to do trading smartly and safely and insights about
            trading, investing, and how it impacts your business -and career.
            Have a question for us or feedback? <br /> <br /> Please click on
            the most appropriate category and fill out the form to reach us.
          </p>
        </div>
        <div className="font-montserrat w-full lg:w-[80%] mx-auto mt-8">
          <p className="cardDescriptionStyle">DKI Jakarta —</p>
          <p className="cardDescriptionStyle">Jl. Patimura Timur XII, No. 68</p>
          <p className="cardDescriptionStyle">South Jakarta, 81566</p>

          <p className="mt-5 cardDescriptionStyle">Email Address:</p>
          <p className="text-lg font-normal text-justify">
            tradiz.admin@mail.com
          </p>
          <form
            className="w-full lg:w-[100%] mx-auto mt-8 pb-5 ps-0 pe-0"
            onSubmit={handleSendMessage}
          >
            <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-1 gap-4 w-full">
              <div className="flex flex-col w-full justify-start pb-2">
                <label className="font-montserrat">
                  Your Name
                  <span className="">
                    <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your name here..."
                  name="name"
                  className="font-montserrat border border-slate-500 mt-2 ps-3 bg-background text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                  required
                />
              </div>
              <div className="flex flex-col w-full justify-start pb-2">
                <label className="font-montserrat">
                  Telephone
                  <span className="">
                    <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Telephone"
                  name="telephone"
                  className="font-montserrat border border-slate-500	 mt-2 ps-3 bg-background text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                  required
                />
              </div>
              <div className="flex flex-col w-full justify-start pb-2">
                <label className="font-montserrat">
                  Email Address
                  <span className="">
                    <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  className="font-montserrat border border-slate-500 mt-2 ps-3 bg-background text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                  required
                />
              </div>

              <div className="flex flex-col w-full justify-start pb-2">
                <label className="font-montserrat">
                  Subject
                  <span className="">
                    <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Write your subject"
                  name="subject"
                  className="font-montserrat border border-slate-500 mt-2 ps-3 bg-background text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                  required
                />
              </div>

              <div className="flex flex-col col-span-2 w-full justify-start pb-3">
                <label className="font-montserrat">
                  Comments/Questions
                  <span className="">
                    <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="How can we help you?"
                  name="question"
                  className="font-montserrat border border-slate-500 mt-2 pt-2 ps-3  bg-background text-inherit w-full rounded focus:outline-none pr-2 h-28"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer flex items-center justify-center gap-[6px] bg-primary font-montserrat font-medium w-48 p-3 rounded-full mt-8 mb-3"
            >
              {isLoading ? (
                <>
                  Send Message{" "}
                  <span className="loading loading-spinner !w-[16px]"></span>
                </>
              ) : (
                <p className="">Send Message</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
