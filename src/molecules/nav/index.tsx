import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <nav className="flex-1 px-6 py-2 bg-black space-y-1">
        <Link
          to="/dashboard"
          className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md mb-16"
        >
          <svg
            className="text-gray-300 mr-3 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 9.5V0.5H0V9.5H9ZM21 9.5V0.5H12V9.5H21ZM9 21.5V12.5H0V21.5H9ZM21 21.5V12.5H12V21.5H21Z"
              fill="white"
            />
          </svg>
          Dashboard
        </Link>

        <Link
          to="/dashboard/all-accounts"
          className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md mt-32"
        >
          <span className="w-3 h-3 rounded bg-blue-300 mr-3"></span>
          Account
        </Link>

        <Link
          to="/dashboard/cards"
          className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <span className="w-3 h-3 rounded bg-blue-300 mr-3"></span>
          Card
        </Link>

        <Link
          to="/dashboard/users"
          className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <span className="w-3 h-3 rounded bg-blue-300 mr-3"></span>
          Users
        </Link>
      </nav>
    </div>
  );
}
