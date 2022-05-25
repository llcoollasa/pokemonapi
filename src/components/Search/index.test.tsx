import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { SearchPokemon } from "./index";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("should render search component", () => {
  render(<SearchPokemon getDataCallback={() => {}} />);
  const linkElement = screen.getByTestId("search");
  expect(linkElement).toBeInTheDocument();
});

describe("Search", () => {
  beforeAll(() => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({}));
  });

  it("should not call search if search value empty", () => {
    render(<SearchPokemon getDataCallback={() => {}} />);

    const searchElement = screen.getByTestId("search");
    userEvent.click(searchElement);

    expect(axios.get).not.toHaveBeenCalled();
  });

  it("should call search if search value is not empty", () => {
    render(<SearchPokemon getDataCallback={() => {}} />);

    const inputElement = screen.getByTestId('searchText');
    userEvent.clear(inputElement);
    userEvent.type(inputElement, "venusaur");

    const searchElement = screen.getByTestId("search");
    userEvent.click(searchElement);

    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/venusaur')
  });
});
