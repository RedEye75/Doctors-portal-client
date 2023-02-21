import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import AppointOption from "./AppointOption";
import BookingModal from "./BookingModal";
import ChooseSlot from "./ChooseSlot";

const AvailableAppointment = ({ x }) => {
  const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);
  // const [name, setName] = useState("");

  // const { slots } = appointments;
  // console.log(slots);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div>
      <h1 className="text-[#19D3AE] text-[22px]">
        Available Services on {format(x, "PPP")}
      </h1>

      <p className="text-[22px] mt-20 -mb-10 text-[#939393]">
        These are all of our services.
      </p>

      <div className="grid grid-cols-3 mt-[140px] w-[1200px] mx-auto gap-[60px]">
        {appointments.map((appointment) => (
          <ChooseSlot
            key={appointment._id}
            // setName={setName}
            value={appointment}
          ></ChooseSlot>
        ))}
      </div>

      {/* {name && (
        <p className="text-center text-[22px] text-[#19D3AE] mt-20">
          Available slots for {name}
        </p>
      )} */}

      <div className="grid grid-cols-3 mt-[150px] gap-[35px]">
        {appointments.map((appointment) => (
          <AppointOption
            key={appointment._id}
            value={appointment}
            setTreatment={setTreatment}
          ></AppointOption>
        ))}{" "}
      </div>
      {treatment && (
        <BookingModal selectedDate={x} treatment={treatment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
