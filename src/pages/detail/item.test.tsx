import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import { Item } from "./index";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { pokemonResMock } from "./stub";

jest.mock("axios");
axios as jest.Mocked<typeof axios>;

it("should renders error if id invalid", () => {
  render(
    <MemoryRouter>
      <Item />
    </MemoryRouter>
  );
  const title = screen.getByText(/Poke Unavailable/i);
  const message = screen.getByText(/Could not find the pokemon/i);
  expect(title).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

it("should renders pokemon detail page", async () => {
  jest.spyOn(axios, "get").mockResolvedValueOnce({
    data: pokemonResMock,
  });
  render(
    <MemoryRouter initialEntries={["/1"]}>
      <Routes>
        <Route path="/:id" element={<Item />}></Route>
      </Routes>
    </MemoryRouter>
  );

  expect(axios.get).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/Height/i)).toBeInTheDocument();
  });
  const pokemonName = screen.getByTestId("pokemon-name").innerHTML;
  expect(pokemonName).toBe("BULBASAUR");
});
