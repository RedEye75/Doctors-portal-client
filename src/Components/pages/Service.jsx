import React from "react";

const Service = ({ service }) => {
  //   console.log(service);
  const { image, title, description } = service;

  return (
    <div>
      <section>
        <div className="mx-auto flex  flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
          <img
            className="w-[100.63px] h-[115px] mx-auto"
            src={`${image}`}
            alt=""
          />
          <div className="p-6">
            <h1 className="text-2xl font-medium text-gray-700 pb-2">{title}</h1>
            <p className="text text-gray-500 leading-6">{description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
