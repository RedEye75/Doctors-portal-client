import React from "react";
import { Link } from "react-router-dom";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor-small.png";

const MakeAppointment = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      className="h-[533px] mt-[169px] ]"
    >
      <section className="grid grid-cols-2 items-center gap-[102px]">
        <div>
          <img
            className="w-[606.84px] h-[636px] -mt-[102px]  ml-[135.19px] rounded"
            src={doctor}
            alt=""
          />
        </div>
        <div className="mr-[97px]">
          <div className="text-start">
            <p className="text-[#19D3AE] font-bold">Appointment</p>
            <h1 className="text-[36px] text-white  leading-[55.05px]">
              Make an appointment Today
            </h1>
          </div>
          <div className="text-start">
            <p className="text-start  text-white mt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Link to={"/"}>
              <button className="font-bold mt-[25px] text-white text-start rounded bg-[#19D3AE] px-10 py-3 ">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
