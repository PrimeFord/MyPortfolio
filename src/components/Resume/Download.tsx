"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Download = () => {
  return (
    <Link
      href="https://drive.google.com/uc?export=download&id=13zg4nWJF3EecYkm_nPFEdFHegPE2KvnA"
      rel="noopener"
    >
      <p className="px-2 flex items-center transition duration-700 ease-in-out hover:scale-[1.15] hover:transition hover:ease-in-out hover:duration-700">
        Download CV{" "}
        <span className="animate-bounce">
          <Image
            src="/images/download.svg"
            alt="download"
            width={24}
            height={24}
          />
        </span>
      </p>
    </Link>
  );
};

export default Download;
