import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Loading } from "./index";
import { LoadingContext } from "../../context/loadingContext";

it("should render Loading component", () => {
  render(<Loading />);
  const linkElement = screen.getByTestId("loading-spinner");
  expect(linkElement).toBeInTheDocument();
});

it("should not render loading component", async () => {
  render(
    <LoadingContext.Provider value={{ loading: false, isLoading: () => {} }}>
      <Loading />
    </LoadingContext.Provider>
  );
  await waitFor(() => {
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
  })
});
