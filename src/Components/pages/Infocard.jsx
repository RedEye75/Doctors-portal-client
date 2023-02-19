import React from "react";

const Infocard = ({ card }) => {
  const { title, description, icon, bgColour } = card;
  return (
    <div className={` ${bgColour} p-5 text-white rounded ${icon}`}>
      <a class="" href="">
        <img src={icon} alt="" />

        <h3 class="mt-3 text-xl font-bold text-white">{title}</h3>

        <p class="mt-4 text-sm text-gray-300">{description}</p>
      </a>
    </div>
  );
};

export default Infocard;
