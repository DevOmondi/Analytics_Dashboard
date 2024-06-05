import React from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidSchool } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col w-[16rem] bg-slate-100 min-h-full fixed  top-0 left-0 border-solid border-[1px] border-right border-gray overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl text-indigo-500">Zeraki</h1>
        </div>
        <ul className="flex flex-col py-4 pl-3">
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <BiSolidDashboard/>
              </span>
              <span className="text-lg font-bold">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <BiSolidSchool/>
              </span>
              <span className="text-lg font-bold">Schools</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <BiLogOut/>
              </span>
              <span className="text-lg font-bold">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
