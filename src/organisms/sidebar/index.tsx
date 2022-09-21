import React from "react";
import Nav from "../../molecules/nav";

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-black">
            <img className="h-8 w-auto" src="" alt="Workflow" />
          </div>

          <Nav />
        </div>
      </div>
    </div>
  );
}
