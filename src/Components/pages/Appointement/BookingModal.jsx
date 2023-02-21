import { format } from "date-fns";
import React from "react";
import { Select, Option, Input } from "@material-tailwind/react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PPP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.selectedSlot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    console.log(date, slot, name, phone, email);
  };

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
          <form onSubmit={handleBooking} className="space-y-3 mt-5">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full max-w-xs"
            />
            <div className=" w-full max-w-xs mx-auto mt-5 mb-10">
              {/* <Select label="Select Slot">
                {slots.map((slot, i) => (
                  <Option name="selectedSlot" key={i} value={slot}>
                    {slot}
                  </Option>
                ))}
              </Select> */}
              <select
                name="selectedSlot"
                className="select border border-gray-500 w-full max-w-xs"
              >
                {slots?.map((slot, i) => (
                  <option>{slot}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />{" "}
            <br />
            <input
              type="submit"
              onBlur={handleBooking}
              value="submit"
              className="btn w-full max-w-xs btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
