import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from './index';

it('should renders the Error', () => {
  render(<Error title='some title' message="some message" ></Error>);
  const title = screen.getByText(/some title/i);
  const message = screen.getByText(/some message/i);
  expect(title).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

it('should render the children', () => {
  render(<Error title='some title'><h1>hello</h1></Error>);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});