import React from "react";

interface ILogo {
    size: number | any
}

export default function Logo({size}: ILogo) {
  return <img src="" alt="starwar-logo" width={size} />;
}
