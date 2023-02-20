import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  // here i use lift up the state strategy
  const [selectedDate, setselectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        x={selectedDate}
        y={setselectedDate}
      ></AppointmentBanner>
      <AvailableAppointment x={selectedDate}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
