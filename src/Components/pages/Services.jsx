import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      image: fluoride,
      title: "Fluoride Treatment",
      description:
        "Fluoride joins the tooth structure when your teeth develop, thus strengthening the teeth' enamel, making them less susceptible to bacteria and cavities",
    },
    {
      id: 2,
      image: cavity,
      title: "Cavity Filling",
      description:
        "A filling is used to repair a small hole in a tooth, sometimes known as a cavity. A dentist will first remove the rotten tooth tissue from the cavity before filling it with a filling substance.",
    },
    {
      id: 3,
      image: whitening,
      title: "Teeth Whitening",
      description:
        "Bleaching your teeth results in tooth whitening, which lightens them. Although it can't make your teeth completely white, it can lighten the color by many shades.",
    },
  ];
  return (
    <div className="mt-[131px]">
      <h1 className="text-[20px] font-bold text-[#19D3AE]">OUR SERVICES</h1>
      <h1 className="text-[36px] font-medium">Services We Provide</h1>
      <div className="grid grid-cols-3 gap-[34px] mt-[70px]">
        {" "}
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
