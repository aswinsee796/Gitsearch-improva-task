import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("search_history")) || [];
    setHistory(stored);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("search_history");
    setHistory([]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-10">
        Your Search History
      </h1>

      {/* Table Container */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="grid grid-cols-2 text-sm font-medium text-gray-500 bg-gray-50 px-6 py-3">
          <div>Search Term</div>
          <div>Search Results</div>
        </div>

        {/* Body */}
        {history.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-gray-500">
            No search history found.
          </div>
        ) : (
          history.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 items-center px-6 py-4 border-t border-gray-100"
            >
              {/* Search Term */}
              <div className="text-sm font-medium text-gray-800">
                {item.query}
              </div>

              {/* Search Result */}
              <div className="flex items-center gap-3">
                {item.status === "success" ? (
                  <>
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.query}
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200" />
                    )}

                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {item.query}
                      </p>
                      <p className="text-xs text-gray-500">
                        GitHub User Name
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-red-500">
                    Search result not found
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Clear History Button */}
      {history.length > 0 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={clearHistory}
            className="px-8 py-3 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition shadow-sm"
          >
            Clear Search History
          </button>
        </div>
      )}
    </div>
  );
}
