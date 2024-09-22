import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GITHUB, LINKEDIN, MAIL, TWITTER } from "../Theme/ThemeIcons";

const OfficeDesk = () => {
  return (
    <div className="flex gap-4">
      <p>
        <Link
          href="https://linkedin.com/in/muhammedfuad-bashar"
          aria-label="link to linkedIn"
          rel="noopener"
        >
          <i>
            <LINKEDIN />
          </i>
        </Link>
      </p>
      <p>
        <Link
          href="https://github.com/PrimeFord"
          aria-label="link to github"
          rel="noopener"
        >
          <i>
            <GITHUB />
          </i>
        </Link>
      </p>
      <p>
        <Link
          href="https://twitter.com/BMuhammedfuad"
          aria-label="link to twitter"
          rel="noopener"
        >
          <i>
            <TWITTER />
          </i>
        </Link>
      </p>
      <p>
        <Link
          href="mailto:wolabash@gmail.com"
          aria-label="link to Gmail"
          rel="noopener"
        >
          <i>
            <MAIL />
          </i>
        </Link>
      </p>
    </div>
  );
};

export default OfficeDesk;
