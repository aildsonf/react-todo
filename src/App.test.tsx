import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders input label", () => {
  render(<App />);
  const linkElement = screen.getByText(/input/i);
  expect(linkElement).toBeInTheDocument();
});
