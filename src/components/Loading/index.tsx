import React, { FC, useContext } from "react";
import "./index.css";

import { LoadingContext } from "../../context/loadingContext";
export const Loading: FC = () => {
  const { loading } = useContext(LoadingContext);
  if (loading)
    return (
      <div className="spinner-container center overlay" data-testid="loading-spinner">
        <div className="loading-spinner" ></div>
      </div>
    );

  return <></>;
};
