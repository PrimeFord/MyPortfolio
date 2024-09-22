import React from "react";
import { socialData } from "../../utility/data";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="w-[12rem] font-[500] text-left lg:text-center">
      <h2 className="text-[1.15rem] font-[700] mb-5">Connect</h2>
      <div className="flex flex-col gap-2">
        {socialData.map((e, i) => (
          <Link key={e.name} href={e.link} rel="noopener">
            <p className="text-[0.9rem] hover:text-[1.15rem]">{e.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Connect;
