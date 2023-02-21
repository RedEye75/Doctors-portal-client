import { format } from "date-fns";
import React from "react";
import { Select, Option, Input } from "@material-tailwind/react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PPP");

  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="space-y-3 mt-5">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full max-w-xs"
            />
            <div className=" w-full max-w-xs mx-auto mt-5 mb-10">
              <Select label="Select Slot">
                {slots.map((slot) => (
                  <Option value={slot}>{slot}</Option>
                ))}
              </Select>
            </div>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />{" "}
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn w-full max-w-xs btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
