import React from "react";
import { Link } from "react-router-dom";

const AppointOption = ({ value }) => {
  const { name, slots } = value;
  return (
    <div>
      <div className="w-[425px] h-[180px] mx-auto mt-[80px] rounded-lg shadow-lg">
        <h3 class="text-[20px] text-[#19D3AE] font-bold">{name}</h3>

        <div class="mt-4 border-t-2 border-gray-100 pt-4">
          <p class="text-sm font-medium uppercase text-gray-500">
            {slots.length > 0 ? (
              slots[0]
            ) : (
              <p className="text-red-800 font-bold text-sm">Not available</p>
            )}
          </p>
          {slots.length < 1 ? (
            <></>
          ) : (
            <p>
              {slots.length} {slots.length > 1 ? "spaces" : "space"} available
            </p>
          )}
        </div>
        {slots.length > 0 ? (
          <Link to={"/"}>
            <button className="p-2 text-[14px] mt-[13px] bg-[#19D3AE] text-white font-medium rounded">
              Book Appointment
            </button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AppointOption;
