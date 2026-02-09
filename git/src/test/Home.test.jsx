import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/home";


test("renders search input on Home page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const input = screen.getByPlaceholderText(/search username/i);
  expect(input).toBeInTheDocument();
});
