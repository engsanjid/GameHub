export default function UpcomingGames() {
  const upcoming = [
    { title: "Phantom Rift", date: "March 2025" },
    { title: "Solar Hunters", date: "June 2025" },
    { title: "Mystic Horizon", date: "Late 2025" },
  ];

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">🚀 Upcoming Games</h2>

        <ul className="space-y-4">
          {upcoming.map((u) => (
            <li
              key={u.title}
              className="p-5 rounded-xl bg-base-100 border flex justify-between items-center"
            >
              <span className="font-semibold">{u.title}</span>
              <span className="opacity-70">{u.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
