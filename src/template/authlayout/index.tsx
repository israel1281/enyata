import React from "react";

interface IAuthLayout {
  logo: React.ReactNode | null;
  form: React.ReactNode | null;
}

export default function AuthLayout({ logo, form }: IAuthLayout) {
  return (
    <div className="container h-screen lg:flex">
      <div className="flex justify-center items-center bg-[#031434] lg:w-2/5">
        {logo}
      </div>
      <div className="flex justify-center items-center lg:w-3/5">{form}</div>
    </div>
  );
}
