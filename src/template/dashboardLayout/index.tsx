import React from "react";

interface IDashboardLayout {
  sidebar: JSX.Element;
  header: JSX.Element;
  outlet: JSX.Element;
}

export default function DashboardLayout({
  sidebar,
  header,
  outlet,
}: IDashboardLayout) {
  return (
    <div style={{ minHeight: "640px" }} className="bg-white">
      <div className="h-screen flex overflow-hidden bg-white">
        {sidebar}

        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {header}
          {outlet}
        </div>
      </div>
    </div>
  );
}
