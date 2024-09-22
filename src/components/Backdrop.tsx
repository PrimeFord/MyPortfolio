import React from "react";

const Backdrop = ({ toggle }: any) => {
  return (
    <div
      className={`nav lg:hidden fixed w-[100%] z-[30] h-[100vh] ${
        toggle
          ? "right-[-100%] duration-700 top-[0rem] ease-in-out"
          : "transition-all duration-700 ease-in-out right-0 backdrop-blur-sm"
      }`}
    ></div>
  );
};

export default Backdrop;
