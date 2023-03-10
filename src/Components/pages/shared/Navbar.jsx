import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import logo from "../../../assets/images/navbar.png";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink to={"/"} className="p-1  font-bold ">
        Home
      </NavLink>
      <NavLink to={"/about"} className="p-1  font-bold ">
        About
      </NavLink>
      <NavLink to={"/appointment"} className="p-1  font-bold ">
        Appointment
      </NavLink>
      <NavLink to={"/reviews"} className="p-1  font-bold ">
        Reviews
      </NavLink>
      <NavLink to={"/contact"} className="p-1  font-bold ">
        Contact us
      </NavLink>
      <NavLink to={"/login"} className="p-1  font-bold ">
        Login
      </NavLink>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl h-[64px] shadow-none border-none text-black  py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="mr-4 cursor-pointer py-1.5 font-normal">
          <span className="font-bold flex text-3xl">
            <img src={logo} className="w-10 mr-3" alt="" />
            Doctors portal
          </span>
        </Link>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
