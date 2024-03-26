// import Banner from "../../SharedComponent/SubPages/Banner";

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Support = () => {
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
          Swal.fire({
            title: "Failed!",
            text: "Something wen't wrong, please try again.",
            icon: "success",
            confirmButtonText: "OK",
            font: "Montserrat",
          });
          setIsLoading(false);
        } else {
          Swal.fire({
            title: "Message sent successful!",
            text: "After review your message we will contact with you.",
            icon: "success",
            confirmButtonText: "OK",
            font: "Montserrat",
          });
          setIsLoading(false);
          form.reset();
        }
      })
      .catch((error) => {
        console.error("updated Error: ", error);
        setIsLoading(false)
        Swal.fire({
          title: "Failed!",
          text: "Something wen't wrong, please try again.",
          icon: "success",
          confirmButtonText: "OK",
          font: "Montserrat",
        });
      });
  };
  return (
    <div className="main-container !mt-[90px] sm:!mt-[50px]">
      <div className="w-full mx-auto rounded-xl glass py-2 px-5 -mt-[70px] sm:-mt-[20px] md:-mt-[5px] lg:mt-[30px] xl:mt-[25px]">
        <div className="lg:w-[80%] mx-auto">
          <h1 className="text-center subTitleStyle poppins">
            Get <span>Support</span> From <span>Mentors</span>.
          </h1>
        </div>
        <div className="poppins w-full lg:w-[80%] mx-auto mt-8">
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

export default Support;
