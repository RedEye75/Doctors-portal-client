import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selectedDate, setselectedDate] = useState(new Date());
  return (
    <div className="max-w-screen-xl mx-auto">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex justify-evenly px-5 py-24 md:flex-row flex-col items-center">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setselectedDate}
          />

          <div class="w-[594px] h-[355px]">
            <img
              class="object-cover object-center rounded"
              alt="dentist chair"
              src={chair}
            />
          </div>
        </div>
        <p>You have selected {format(selectedDate, "PPP")}</p>
      </section>
    </div>
  );
};

export default AppointmentBanner;
