import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
import GameCard from "../component/GameCard";
import useTitle from "../hooks/useTitle";

export default function Game() {
  useTitle("Games | GameHub");
  const games = useLoaderData() ?? [];

  // State for sorting + filtering
  const [sortOrder, setSortOrder] = useState("desc");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Extract all categories
  const categories = useMemo(() => {
    const cats = new Set(games.map((g) => g.category));
    return ["all", ...cats];
  }, [games]);

  // Apply sorting & filtering
  const filteredGames = useMemo(() => {
    let items = [...games];

    // Filtering
    if (categoryFilter !== "all") {
      items = items.filter((g) => g.category === categoryFilter);
    }

    // Sorting
    items.sort((a, b) => {
      const rA = Number(a?.ratings ?? 0);
      const rB = Number(b?.ratings ?? 0);
      return sortOrder === "asc" ? rA - rB : rB - rA;
    });

    return items;
  }, [games, sortOrder, categoryFilter]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">

      {/* Sorting + Filtering Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">

        {/* Filter by category */}
        <select
          className="select select-bordered"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Categories" : c}
            </option>
          ))}
        </select>

        {/* Sort by rating */}
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Ratings: High → Low</option>
          <option value="asc">Ratings: Low → High</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredGames.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <p className="mt-8 text-center opacity-70">
          No items found for this category.
        </p>
      )}
    </section>
  );
}
