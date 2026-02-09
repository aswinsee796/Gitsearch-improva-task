import { useState } from "react";
import ProfileCard from "./Profile";

export default function Home() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const saveToHistory = (entry) => {
    const prev = JSON.parse(localStorage.getItem("search_history")) || [];
    const updated = [entry, ...prev];
    localStorage.setItem("search_history", JSON.stringify(updated));
  };
  
  const handleSearch = async () => {
    if (!query.trim()) return;
  
    setLoading(true);
    setNotFound(false);
    setUser(null);
  
    try {
      const res = await fetch(
        `https://api.github.com/users/${encodeURIComponent(query)}`
      );
  
      if (res.status === 404) {
        setNotFound(true);
  
        // Save failed search
        saveToHistory({
          query,
          status: "not_found",
          time: new Date().toISOString(),
        });
        return;
      }
  
      const data = await res.json();
      setUser(data);
  
      saveToHistory({
        query: data.login,
        status: "success",
        time: new Date().toISOString(),
        avatar: data.avatar_url,
        url: data.html_url,
      });
    } catch (err) {
      setNotFound(true);
  
    // Save error search
      saveToHistory({
        query,
        status: "error",
        time: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Search GitHub Users
        </h1>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search username..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="px-5 py-3 rounded-xl bg-black text-white text-sm hover:opacity-90 transition"
          >
            Search
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          Search for GitHub profiles and view details.
        </p>

       {/* profile component */}
        <ProfileCard
          user={user}
          loading={loading}
          notFound={notFound}
          query={query}
        />
      </div>
    </div>
  );
}
