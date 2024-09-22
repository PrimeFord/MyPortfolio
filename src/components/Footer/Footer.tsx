import React from "react";
import OfficeDesk from "../Socials/OfficeDesk";

const Footer = () => {
  return (
    <div className="w-[100%] px-2 lg:px-[2rem] py-[0.75rem] text-center flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center shadow-inner dark:text-[#FBFBFB]">
      <p className="">
        <OfficeDesk />
      </p>
      <p className="text-[0.85rem] font-[400]">
        Copyright ©2023 Bashar Muhammedfuad. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
