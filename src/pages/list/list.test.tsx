import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import { List } from "./index";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { pokemonListResultMock } from "./index";

jest.mock("axios");
const axiosMock = axios as jest.Mocked<typeof axios>;

it("should renders pokemon list page", async () => {
  jest.spyOn(axiosMock, "get").mockResolvedValueOnce({
    data: pokemonListResultMock,
  });
  const { container } = render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );

  expect(axiosMock.get).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/The Pokémon API/i)).toBeInTheDocument();
  });

  const pokemonEntries = await screen.findAllByText("More Details");
  expect(pokemonEntries).toHaveLength(100);
  expect(container).toMatchSnapshot();
});

it("should have link to detail page", async () => {
  jest.spyOn(axiosMock, "get").mockResolvedValueOnce({
    data: pokemonListResultMock,
  });

  render(
    <MemoryRouter>
      <List />
    </MemoryRouter>
  );

  const links = await screen.findAllByRole("link");
  expect(links).toHaveLength(100);
  expect(links[10]).toHaveAttribute("href", "/11");
});

it("should renders error if id invalid", async () => {
  jest.spyOn(axios, "get").mockReturnValue(Promise.reject(1));
  render(
    <MemoryRouter>
      <List />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
});
