import React from "react";
import { render, screen } from "@testing-library/react";
import { Pagination } from "./index";
import userEvent from "@testing-library/user-event";

it("should renders the Pagination", async () => {
  render(
    <Pagination count={500} currentPage={1} clickOnPageCallback={() => {}} />
  );
  const buttons = await screen.findAllByRole("button");
  expect(buttons).toHaveLength(5);
});

it("should have 1 link with the given configs", async () => {
  render(
    <Pagination count={50} currentPage={1} clickOnPageCallback={() => {}} />
  );
  const buttons = await screen.findAllByRole("button");
  expect(buttons).toHaveLength(1);
});

it("should have 10 links with the given configs", async () => {
  render(
    <Pagination count={5000} currentPage={1} clickOnPageCallback={() => {}} />
  );
  const buttons = await screen.findAllByRole("button");
  expect(buttons).toHaveLength(10);
});

it("should return data when click on button", async () => {
  const func = jest.fn();
  render(
    <Pagination count={5000} currentPage={1} clickOnPageCallback={func} />
  );
  const buttons = await screen.findAllByRole("button");
  userEvent.click(buttons[2]);

  expect(func).toBeCalledWith("?offset=200&limit=100", 3);
});
