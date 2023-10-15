"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar1 = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  const [show, setShow] = useState(false);
  const [see, setSee] = useState(false);

  console.log(show);
  return (
    <nav className="bg-transparent z-20 w-full">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                <Image
                  src="/cycorp_final.png"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="m1-4 flex items-center space-x-4 font-bold">
              <Link
                href="/"
                className="text-white hover:bg-black hover:bg-opacity-25 rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:bg-black hover:bg-opacity-25 rounded-lg p-2"
              >
                About
              </Link>
              <div
                className="relative"
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
              >
                <button
                  id="dropdownDividerButton"
                  data-dropdown-toggle="dropdownDivider"
                  className="text-white hover:bg-black hover:bg-opacity-25 font-bold rounded-lg text-md text-center inline-flex items-center p-2"
                  type="button"
                >
                  Our Work{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {show && (
                  <div
                    id="dropdownDivider"
                    className="absolute -mt-2 right-0 shadow bg-red-700 text-white z-10 p-0 w-28"
                  >
                    <ul
                      className=" text-sm text-center"
                      aria-labelledby="dropdownDividerButton"
                    >
                      <li>
                        <Link
                          href="/liasion"
                          className="block px-4 py-2 hover:bg-black hover:bg-opacity-25"
                        >
                          Liason
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/design"
                          className="block px-4 py-2 hover:bg-black hover:bg-opacity-25"
                        >
                          Designs
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/awards"
                className="text-white hover:bg-black hover:bg-opacity-25 rounded-lg p-2"
              >
                Accolades
              </Link>
              <Link
                href="https://stallion.build/"
                target="_blank"
                className="text-white hover:bg-black hover:bg-opacity-25 rounded-lg p-2"
              >
                Stallion
              </Link>
              <Link
                href="https://www.realinc.in/"
                target="_blank"
                className="text-white hover:bg-black hover:bg-opacity-25 rounded-lg p-2"
              >
                Real Inc
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-slate-400 bg-opacity-20">
            <Link
              href="/"
              className="text-white hover:text-red-600 rounded-lg p-1"
            >
              Home
            </Link>
            <hr />
            <Link
              href="/about"
              className="text-white hover:text-red-600 rounded-lg p-1"
            >
              About
            </Link>
            <hr />
            <div
              className="flex justify-between items-center text-white hover:text-red-600 rounded-lg p-1"
              onClick={() => setSee(!see)}
            >
              <p>Our Work</p>
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </div>
            {see && (
              <div className="flex flex-col">
                <Link
                  href="/liasion"
                  className="text-white hover:text-red-600 rounded-lg p-1"
                >
                  Liasion
                </Link>
                <hr />
                <Link
                  href="/design"
                  className="text-white hover:text-red-600 rounded-lg p-1"
                >
                  Designs
                </Link>
              </div>
            )}
            <hr />
            <Link
              href="/awards"
              className="text-white hover:text-red-600 rounded-lg p-1"
            >
              Accolades
            </Link>
            <hr />
            <Link
              href="https://stallion.build/"
              target="_blank"
              className="text-white hover:text-red-600 rounded-lg p-1"
            >
              Stallion
            </Link>
            <hr />
            <Link
              href="https://www.realinc.in/"
              target="_blank"
              className="text-white hover:text-red-600 rounded-lg p-1"
            >
              Real Inc
            </Link>
            <hr />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
