import React from "react";

interface IText {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "sub-heading" | "p" | "p-sm";
    children: string | number;
    fw?: "light" | "bold" | "normal";
    color?: "blue" | "black" | "gray";
    ta?: "left" | "center" | "right" | "justify" | "inherit";
    position?: "relative" | "absolute";
    mg?: string;
    bold?: boolean;
    style?: React.CSSProperties;
    className?: string;
    underline?: boolean;
    onClick?: () => void;
}

export default function Text({
    variant = "p",
    children,
    style,
    color = "black",
    fw = "normal",
    ta ="left",
    position = "relative",
    mg = "",
    onClick,
    bold = false,
    underline = false,
}: IText) {
    const type = {
        p: (
            <p
                className={``}
            >
                {children}
            </p>
        )
    }
  return <div>hello</div>;
}
