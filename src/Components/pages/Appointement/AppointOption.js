import React from "react";
import { Link } from "react-router-dom";

const AppointOption = ({ value, setTreatment }) => {
  const { name, slots } = value;
  return (
    <div>
      <div className="w-[425px] h-[180px] mx-auto mt-[80px] rounded-lg shadow-lg">
        <h3 className="text-[20px] text-[#19D3AE] font-bold">{name}</h3>

        <div className="mt-4 border-t-2 border-gray-100 pt-4">
          <p className="text-sm font-medium uppercase text-gray-800">
            {slots.length > 0 ? (
              slots[0]
            ) : (
              <p className="text-red-800 font-bold text-sm">Not available</p>
            )}
          </p>
          {slots.length < 1 ? (
            <></>
          ) : (
            <p className="text-[16px] font-bold text-orange-600">
              {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
          )}
        </div>
        {slots.length > 0 ? (
          <div className="mt-[13px]">
            {" "}
            <label
              onClick={() => setTreatment(value)}
              htmlFor="bookingModal"
              className=" p-2 text-[14px]  bg-[#19D3AE] text-white font-medium rounded"
            >
              Book Appointment
            </label>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AppointOption;
