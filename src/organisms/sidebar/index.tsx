import React from "react";
import Nav from "../../molecules/nav";
import Logo from "../../atoms/logo";

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex justify-center w-full items-center h-20 flex-shrink-0 px-4 bg-[#031434]">
            <Logo size={100} />
          </div>

          <Nav />
        </div>
      </div>
    </div>
  );
}
