import React from "react";
import { nav } from "@/data.js";

function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-10">
        {nav.map((item, index) => {
          // Destructure Item
          const { href, name } = item;
          return (
            <li key={index}>
              <a className="hover:text-accent transaction" href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>{" "}
    </nav>
  );
}

export default Nav;
