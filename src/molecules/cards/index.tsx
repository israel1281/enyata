import React from "react";

const data = [
  {
    title: "Films",
    color: "#a9ffe0",
  },
  {
    title: "Starship",
    color: "#a9c1ff",
  },
  {
    title: "People",
    color: "#ffa9ec",
  },
  {
    title: "Species",
    color: "#fdffa9",
  },
];

export default function Cards() {
  return (
    <div className="lg:flex md:flex  sm:flex-wrap w-full gap-4">
      {data.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className="relative w-60 rounded-lg border  bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-1 min-w-0">
              <div className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm flex justify-between font-medium text-gray-900">
                  {item.title}{" "}
                  <span
                    className={`w-6 h-6 rounded bg-[${item.color}] mr-3`}
                  ></span>
                </p>
                <p className="text-sm font-medium text-gray-900 mt-10">200</p>
                <p className="text-sm text-green-500 truncate">
                  20 More than yesterday
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
