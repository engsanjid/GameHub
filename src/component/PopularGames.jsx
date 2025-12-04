
import React from "react";
import GameCard from "./GameCard";

export default function PopularGames({ games = [] }) {
  
  const top = [...games]
    .sort((a, b) => Number(b.ratings) - Number(a.ratings))
    .slice(0, 4);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {top.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
