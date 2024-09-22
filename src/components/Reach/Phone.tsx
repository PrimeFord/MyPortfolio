import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MAIL, MAP, PHONE, WHATSAPP } from "../Theme/ThemeIcons";

const Phone = () => {
  return (
    <div className="w-[13rem] font-[500] text-left lg:text-center">
      <h2 className="text-[1.15rem] font-[700] mb-5">Contact Me</h2>
      <div className="flex flex-col text-[0.9rem] gap-2 justify-center items-start lg:items-center">
        <p className="flex gap-2 items-start lg:items-center hover:text-[1.15rem]">
          <Link href="wa.me/+2348166619654" className="flex">
            <i>
              <WHATSAPP />
            </i>
            <span>WhatsApp</span>
          </Link>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <Link href="tel:+2348166619654" className="flex">
            <i>
              <PHONE />
            </i>
            <span>+234 816 661 9654</span>
          </Link>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <Link href="mailto:wolabash@gmail.com" className="flex">
            <i>
              <MAIL />
            </i>
            <span>wolabash@gmail.com</span>
          </Link>
        </p>
        <p className="flex gap-2 items-center hover:text-[1.15rem]">
          <i>
            <MAP />
          </i>
          <span>Lagos, Nigeria.</span>
        </p>
      </div>
    </div>
  );
};

export default Phone;
