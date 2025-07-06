import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="border-b border-gray-300 tracking-wide relative z-50">
        <section className="py-3 bg-[#1d294f] text-white text-center px-10">
          <p className="text-sm">
            Summer Sale: Save up to 40% on select items. Limited-time offer!
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-4 px-10 py-3 relative bg-white min-h-[65px]">
          <Link href="" className="hidden max-lg:block">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </Link>

          <div
            id="collapseMenu"
            className="w-full max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="mb-6 hidden max-lg:block">
                  <Link href="/About">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      className="w-36"
                    />
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
                  <Link
                    href="/"
                    className="hover:text-blue-700 font-medium text-blue-700 block text-[15px]"
                  >
                    Home
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
                  <Link
                    href="/Team"
                    className="hover:text-blue-700 font-medium text-slate-900 block text-[15px]"
                  >
                    Team
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
                  <Link
                    href="/Feature"
                    className="hover:text-blue-700 font-medium text-slate-900 block text-[15px]"
                  >
                    Feature
                  </Link>
                </li>
               
              </ul>

              <Link
                href=""
                className="m-auto absolute lg:left-2/4 lg:top-1/4 lg:-translate-x-1/2 max-lg:hidden"
              >
                <img
                  src="https://3.imimg.com/data3/FR/DR/IMFCP-8052891/images-logodesign-500x500.jpg"
                  alt="logo"
                  className="w-36"
                />
              </Link>

              <ul className="lg:flex lg:space-x-8 max-lg:space-y-2 max-lg:mt-2 ml-auto">
                 <li className="text-[15px] max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
                  <Link
                    href="/Blog"
                    className="hover:text-blue-700 font-medium text-slate-900 block text-[15px]"
                  >
                    Blog
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
                  <Link
                    href="/About"
                    className="hover:text-blue-700 font-medium text-slate-900 block text-[15px]"
                  >
                    About
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
                  <Link
                    href="/Contact"
                    className="hover:text-blue-700 font-medium text-slate-900 block text-[15px]"
                  >
                    Contact
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>

          <div className="flex ml-auto lg:hidden">
            <button id="toggleOpen" className="cursor-pointer">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
              
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
