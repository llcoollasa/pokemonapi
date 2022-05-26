import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("axios");

it("should renders The Pokémon API", () => {
  render(<App />);
  const linkElement = screen.getByText(/The Pokémon API/i);
  expect(linkElement).toBeInTheDocument();
});
