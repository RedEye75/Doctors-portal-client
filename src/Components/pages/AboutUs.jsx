import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen mt-[154px] ]">
      <section className="grid grid-cols-2 items-center gap-[102px]">
        <div>
          <img
            className="w-[458px] h-[576px] ml-[217px] rounded"
            src={treatment}
            alt=""
          />
        </div>
        <div className="mr-[166px]">
          <h1 className="text-[48px] text-start leading-[55.05px]">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="text-start mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
            <Link to={"/"}>
              <button className="font-bold mt-[25px] text-white text-start rounded bg-[#19D3AE] px-10 py-3 ">
                Get started
              </button>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
