import { navData } from "@/utility/data";
import Link from "next/link";
import React from "react";

const Outline = () => {
  return (
    <div className="w-[12rem] font-[500] text-left lg:text-center">
      <h2 className="text-[1.15rem] font-[700] mb-5">Prime.</h2>
      <div className="flex flex-col gap-2">
        {navData.map((e, i) => (
          <Link key={i} href={e.route}>
            <p className="text-[0.9rem] hover:text-[1rem]">{e.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Outline;
