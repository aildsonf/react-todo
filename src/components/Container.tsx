import React from "react";
import "./Container.css";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Container({ children }: IProps) {
  return <div className="container">{children}</div>;
}
