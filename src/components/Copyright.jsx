import React from "react";
import { copyright } from "@/data.js";

function Copyright() {
  const { link1, link2, copyText, social } = copyright;
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="200"
      className="mt-2 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-y-2"
    >
      {/* link */}
      <div className="flex gap-x-6">
        <a className="hover:text-accent transition" href={link1.href}>
          {link1.name}
        </a>
        <a className="hover:text-accent transition" href={link2.href}>
          {link2.name}
        </a>
      </div>
      {/* copyright text */}
      <div>{copyText}</div>
      {/* social icon */}
      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          // destructure item
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href}>
                <img src={icon} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Copyright;
