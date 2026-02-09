import { render, screen } from "@testing-library/react";
import History from "../components/History";

test("renders Search History title", () => {
  render(<History />);

  const heading = screen.getByRole("heading", { name: /your search history/i });
  expect(heading).toBeInTheDocument();
});

test("shows empty state when no history exists", () => {
  localStorage.removeItem("search_history");
  render(<History />);

  expect(screen.getByText(/no search history found/i)).toBeInTheDocument();
});
