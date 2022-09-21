import React from "react";
import LLogo from "../../assets/logo.png";

interface ILogo {
  size: number | any;
}

export default function Logo({ size }: ILogo) {
  return <img src={LLogo} alt="starwar-logo" width={size} />;
}
