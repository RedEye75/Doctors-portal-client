import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ x }) => {
  return (
    <div>
      <h1 className="text-[#19D3AE] text-[22px]">
        Available Services on {format(x, "PPP")}
      </h1>
    </div>
  );
};

export default AvailableAppointment;
