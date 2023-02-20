import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import bg from "../../../assets/images/bg.png";

const AppointmentBanner = ({ x, y }) => {
  return (
    <div
      style={{ background: `url(${bg})` }}
      className="max-w-screen-2xl  mx-auto"
    >
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex justify-evenly px-5 py-24 md:flex-row flex-col items-center">
          <div>
            <DayPicker mode="single" selected={x} onSelect={y} />
            {/* 
            <p className="text-green-500 font-bold ]">
              You have selected {format(x, "PPP")}
            </p> */}
          </div>

          <div class="w-[594px] h-[355px]">
            <img
              class="object-cover object-center rounded"
              alt="dentist chair"
              src={chair}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBanner;
