import { render, screen } from "@testing-library/react";
import ProfileCard from "../components/Profile";

test("renders empty prompt when no user searched", () => {
  render(<ProfileCard />);
  expect(screen.getByText(/search a username/i)).toBeInTheDocument();
});
