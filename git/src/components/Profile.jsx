export default function ProfileCard({ user, loading, notFound, query }) {
  if (loading) {
    return (
      <div className="mt-6 p-5 rounded-2xl border border-gray-200 text-center text-sm">
        Loading profile...
      </div>
    );
  }

  // Not Found Skeleton Card
  if (notFound) {
    return (
      <div className="mt-6 p-5 rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse"></div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              {query}
            </h2>
            <p className="text-sm text-gray-500">
              No bio available
            </p>

            <p className="mt-3 text-xs text-red-500">
              The searched username was not found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mt-6 p-5 rounded-2xl border border-dashed border-gray-300 text-center text-sm text-gray-500">
        Search a username to display profile details here.
      </div>
    );
  }

  // Normal Profile Card
  return (
    <div className="mt-6 p-5 rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-16 h-16 rounded-full object-cover bg-gray-200"
        />

        <div className="flex-1">
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <p className="text-sm text-gray-600">
            {user.bio || "No bio available"}
          </p>

          <div className="flex gap-6 mt-2 text-xs text-gray-500">
            <span>
              <strong className="text-black">{user.followers}</strong> Followers
            </span>
            <span>
              <strong className="text-black">{user.public_repos}</strong> Repos
            </span>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-sm text-blue-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
