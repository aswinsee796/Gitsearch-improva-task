import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `text-sm font-medium transition ${
      pathname === path
        ? "text-black"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight">GitSearch</h1>

        <div className="flex gap-6">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/history" className={linkClass("/history")}>
            History
          </Link>
        </div>
      </div>
    </nav>
  );
}
