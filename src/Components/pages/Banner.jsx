import React from "react";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div id="banner" className="max-w-screen-xl min-h-screen mx-auto">
      <section className="dark:bg-gray-800  dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Doctors portal
            </h1>
            <p className="mt-6  text-lg sm:mb-12">
              We offer a platform that enables doctors to assess their own
              performance against key performance metrics established by health
              organizations that strive for excellence and quality care.
            </p>
            <div className="flex flex-col  sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link>
                <button className="px-10 py-3 bg-[#14d8d0] border rounded-md border-black font-bold">
                  Get started
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 ">
            <img src={chair} alt="" className="w-[594px] h-[355px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
