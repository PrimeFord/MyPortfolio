"use client";
import React, { useEffect, useState } from "react";
import { TOP } from "../Theme/ThemeIcons";

const Top = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let prev: number = window.scrollY;
    window.addEventListener("scroll", () => {
      const currenSc: number = scrollY;
      if (prev > currenSc) {
        setVisible(true);
      }
      if (prev < currenSc) {
        setVisible(false);
      }
      prev = currenSc;
    });
  });
  return (
    <div
      className={`fixed drop-shadow-lg bottom-[4rem] right-[1.5rem] transition-all duration-1000 ease-in-out ${
        visible ? "" : "transform translate-y-40 "
      }`}
    >
      <a href="#top">
        <p className="w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-lg bg-[#263138] dark:bg-[#FBFBFB] bg-opacity-[0.85] shadow-xl">
          <i>
            <TOP />
          </i>
        </p>
      </a>
    </div>
  );
};

export default Top;
