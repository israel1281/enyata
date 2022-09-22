import React from "react";
import AuthLayout from "../../template/authlayout";
import Form from "../../molecules/form";
import Logo from "../../atoms/logo";

export default function Login() {
  return (
    <div>
      <AuthLayout logo={<Logo size={400} />} form={<Form />} />
    </div>
  );
}
