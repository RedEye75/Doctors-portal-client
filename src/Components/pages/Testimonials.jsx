import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Testimonial from "./Testimonial";
import quote from "../../assets/icons/quote.svg";

const Testimonials = () => {
  const testiData = [
    {
      id: 1,
      description:
        "I recently visited Dr. Afiya khanom . She is authentic. She immediately put me at ease, which is something I seldom experience while visiting a doctor. She was friendly and well-mannered.",
      name: "Yusuf Bin Imam",
      location: "New York",
      image: people1,
    },
    {
      id: 2,
      description:
        "I am overjoyed with the care and consideration I get from Dr. Zaid Washim. I can always count on Dr. Zaid Washim to be there for me whenever I need him, and I heartily suggest him to anyone seeking for a doctor.",
      name: "Aisha Fatema",
      location: "California",
      image: people2,
    },
    {
      id: 3,
      description:
        "Dr. Ehsanul Karim has a sincere concern for his patients. One's anxieties are allayed by the simplicity of communication and his grasp of your issue. Knowing that Dr. Ehsanul Karim is always available to us gives us peace of mind.",
      name: "Zainab Farah",
      location: "Texas",
      image: people3,
    },
  ];
  return (
    <div className="mt-[84px] max-w-[1440px] mx-auto">
      <div className="flex justify-between">
        <div className="text-start">
          <small className="font-bold text-[#19D3AE] text-[20px]">
            Testimonial
          </small>
          <h1 class="text-[36px] leading-[41.29px] font-medium title-font text-gray-900 mb-12 text-center">
            What Our Patients Says
          </h1>
        </div>
        <img className="w-[192px] h-[156px]" src={quote} alt="" />
      </div>
      <div className="grid grid-cols-3 mt-[88px] mx-auto">
        {testiData.map((data) => (
          <Testimonial key={data.id} data={data}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
