import React, { FC } from "react";
import "./index.css";

export interface IError {
  title: string;
  message?: string;
  children?: React.ReactNode;
}

export const Error: FC<IError> = ({ title, message = "", children="" }) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <div>{message}</div>
      <div className="child-content">{children}</div>
    </div>
  );
};
