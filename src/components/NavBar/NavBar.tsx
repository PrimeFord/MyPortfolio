"use client";

import React, { useEffect, useState } from "react";
// import { navData } from "../../utility/data";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import { navData } from "@/utility/data";
const NavBar = ({ setShowModal, toggle, setToggle }: any) => {
  const [navbar, setNavbar] = useState(false);
  const [visible, setVisible] = useState(false);
  if (typeof window !== "undefined") {
    let prev = window.scrollY;
    const navBg = () => {
      if (window.scrollY >= 85) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    const navPos = () => {
      const currenSc = scrollY;
      if (prev > currenSc || currenSc === 0) {
        setVisible(true);
      }
      if (prev < currenSc) {
        setVisible(false);
      }
      prev = currenSc;
    };
    useEffect(() => {
      window.addEventListener("scroll", navBg);
      window.addEventListener("scroll", navPos);
      setVisible(true);
    }, []);
  } else {
    console.log("Dom Undefined");
  }

  const logo = "Prime.";
  return (
    <nav
      className={`w-full h-[4rem] lg:h-[5rem] fixed flex items-center p-4 lg:p-0 justify-between lg:justify-around z-[30] transition ease-in-out duration-700 shadow-xl bg-opacity-80 dark:bg-opacity-80 top-0 backdrop-blur-[5px]
     ${
       navbar
         ? "bg-[#263138] text-[#FBFBFB] transition duration-700"
         : "bg-[#FBFBFB] text-[#263138] transition duration-700 dark:bg-[#263138] dark:text-[#FBFBFB]"
     }${visible ? "" : "transition-all duration-1000 translate-y-[-5rem]"}`}
    >
      <div className="w-[65%] lg:w-[40%] flex-grow-1">
        <a href="#home">
          <p className="text-[1.8rem] lg:text-[3.2rem]">{logo}</p>
        </a>
      </div>
      <div className="hidden lg:flex lg:h-fit lg:w-[40%] lg:justify-between lg:font-[500]">
        {navData.map((e, i) => (
          <div
            key={i}
            className="my-[2rem] lg:my-0 hover:text-[#fbfbfbd0] ease-in-out"
          >
            <a href={e.route}>{e.name}</a>
          </div>
        ))}
      </div>
      <div
        className={`nav lg:hidden fixed w-[100%] top-[0rem] z-[30] h-[110vh] ${
          toggle
            ? "right-[-100%] duration-700 ease-in-out"
            : "transition-all duration-700 ease-in-out right-0 backdrop-blur-sm"
        }`}
      >
        <div
          className={`nav w-[70%] fixed h-[110vh] top-[0rem] pt-[5rem] text-center text-[1.25rem] ease-in-out z-[55] text-[#fafafa] dark:text-[#263138] bg-[#263138] backdrop-blur-lg dark:bg-[#FBFBFB] bg-opacity-80 dark:bg-opacity-80 lg:hidden ${
            toggle
              ? "right-[-70%] duration-700 ease-in-out"
              : "transition-all duration-700 ease-in-out right-0"
          } ${visible ? ` ease-in-out` : `translate-y-[4rem] ease-in-out`}`}
        >
          {navData.map((e, i) => (
            <div
              key={i}
              className="my-[2rem] hover:text-[#fbfbfbd0] ease-in-out"
            >
              <a href={e.route} onClick={() => setToggle(true)}>
                {e.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <ThemeSwitcher />
      <div
        className="hamburger cursor-pointer z-[56] lg:hidden"
        onClick={() => setToggle(!toggle)}
      >
        <span
          className={`bar block w-[25px] h-[3px] my-[5px] transition-all duration-[0.3s] ease-in-out ${
            !toggle &&
            "transform translate-y-2 rotate-45 bg-[#FBFBFB] dark:bg-[#263138]"
          } ${navbar ? "bg-[#FBFBFB]" : "bg-[#263138]"} ${
            toggle && "dark:bg-[#FBFBFB]"
          }`}
        ></span>
        <span
          className={`bar block w-[25px] h-[3px] my-[5px] transition-all duration-[0.3s] ease-in-out ${
            !toggle && "opacity-0 bg-[#FBFBFB]"
          }  ${navbar ? "bg-[#FBFBFB]" : "bg-[#263138]"} ${
            toggle && "dark:bg-[#FBFBFB]"
          }`}
        ></span>
        <span
          className={`bar block w-[25px] h-[3px] my-[5px] transition-all duration-[0.3s] ease-in-out  ${
            !toggle &&
            "transform -translate-y-[8px] -rotate-45 bg-[#FBFBFB] dark:bg-[#263138]"
          } ${navbar ? "bg-[#FBFBFB]" : "bg-[#263138]"} ${
            toggle && "dark:bg-[#FBFBFB]"
          }`}
        ></span>
      </div>
      <div className="hidden lg:block">
        <button
          className="w-fit rounded-md bg-[#263138] dark:bg-[#FBFBFB] dark:text-[#263138] text-[#FBFBFB] py-2 px-4 drop-shadow-xl transition duration-700 ease-in-out hover:scale-[1.15] text-right hover:transition hover:ease-in-out hover:duration-700"
          onClick={() => setShowModal(true)}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
