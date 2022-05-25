import React, { createContext } from "react";

type Props = {
  loading: boolean;
  isLoading: (value: boolean) => void,
};

export const LoadingContext = createContext<Props>({
  loading: true,
  isLoading: ()=>{},
});
