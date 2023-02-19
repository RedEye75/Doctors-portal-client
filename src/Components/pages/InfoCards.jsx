import React from "react";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import marker from "../../assets/icons/marker.svg";
import Infocard from "./Infocard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening hours",
      description: "Open 9:00 am to 5:00pm everyday",
      bgColour: "bg-accent",
      icon: clock,
    },
    {
      id: 2,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United StatesOpen 9:00 am to 5:00pm",
      bgColour: "bg-primary",
      icon: marker,
    },
    {
      id: 3,
      title: "Contuct us now",
      description: "++000 123 456789",
      icon: phone,
      bgColour: "bg-success",
    },
  ];
  return (
    <div className="grid grid-cols-3  max-w-[1440px] mx-auto gap-[24px]">
      {cardData.map((card) => (
        <Infocard key={card.id} card={card}></Infocard>
      ))}
    </div>
  );
};

export default InfoCards;
