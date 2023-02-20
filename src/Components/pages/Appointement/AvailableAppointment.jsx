import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AppointOption from "./AppointOption";

const AvailableAppointment = ({ x }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div>
      <h1 className="text-[#19D3AE] text-[22px]">
        Available Services on {format(x, "PPP")}
        <div className="grid grid-cols-3 gap-[35px]">
          {appointments.map((appointment) => (
            <AppointOption
              key={appointment._id}
              value={appointment}
            ></AppointOption>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default AvailableAppointment;
