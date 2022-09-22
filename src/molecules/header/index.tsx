import React from "react";

export default function Header() {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white text-white shadow">
      <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          ></path>
        </svg>
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <h4 className="md:ml-0 mt-4">Dashboard</h4>
        </div>

        <div className="ml-4 flex items-center md:ml-6">
          <button className="bg-slate-900 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>

          <div className="ml-3 relative">
            <div>
              <button
                type="button"
                className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="user-menu-button"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://joeschmoe.io/api/v1/random"
                  alt=""
                />
              </button>
            </div>

            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              style={{ display: "none" }}
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Your Profile
              </a>

              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Settings
              </a>

              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
