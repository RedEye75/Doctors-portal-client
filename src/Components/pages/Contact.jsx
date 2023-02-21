import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div
      className="h-[604px] mt-36 "
      style={{ background: `url(${appointment})` }}
    >
      <div className="mt-[149px]">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="mt-[155px] font-bold text-[20px] text-[#19D3AE]">
            Contact Us
          </h1>
          <h1 className="text-white  text-[36px]">Stay connected with us</h1>
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="peer h-8 w-[450px] mt-[41px] border-none bg-white p-6 rounded focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="peer h-8 w-[450px] mt-[19px] border-none bg-white p-6 rounded focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <textarea
            placeholder="Bio"
            className="textarea rounded mt-[19px]  w-[450px] "
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
