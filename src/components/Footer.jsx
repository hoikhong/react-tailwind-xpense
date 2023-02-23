import React from "react";
// import data
import { footer } from "@/data.js";
// import components
import Copyright from "@/components/Copyright";
function Footer() {
  // destructure footer data
  const { logo, links, legal, newsletter, form } = footer;
  return (
    <footer className="pt-[142px] pb-[60px]">
      <section className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          {/* logo  */}
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
            <img src={logo} alt="" />
          </div>
          {/* list 1 */}
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                //destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a className="font-medium hover:text-accent" href={href}>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* list2 */}
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {legal.map((item, index) => {
                //destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a className="font-medium hover:text-accent" href={href}>
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* new Letter */}
          <div
            className=""
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
          >
            <div className="text-2xl uppercase font-medium mb-6">
              {newsletter.title}
            </div>
            <div className="text-xl text-light mb-[18px]">
              {newsletter.subtitle}
            </div>
            {/* form */}
            <form className="bg-pick-200 max-w-[350px] mb-[10px]">
              <div className="h-[62px] p-[7px] flex border border-dark">
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-dark"
                  type="text"
                  placeholder={form.placeholder}
                />
                <button className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white">
                  {form.btnText}
                </button>
              </div>
            </form>
            <span className="text-sm">{form.smallText}</span>
          </div>
        </div>
        <hr />
        <Copyright />
      </section>
    </footer>
  );
}

export default Footer;
