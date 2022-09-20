import React from "react";

interface IAuthLayout {
  logo: React.ReactNode | null;
  form: React.ReactNode | null;
}

export default function AuthLayout({ logo, form }: IAuthLayout) {
  return (
    <div className="container lg:flex">
      <div className="items-center bg-indigo-900 lg:w-2/5">{logo}</div>
      <div className="items-center lg:w-3/5">{form}</div>
    </div>
  );
}
