import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TrendingGames({ games = [] }) {
  const trending = [...games]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 6);

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">🔥 Trending Now</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {trending.map((g) => (
            <motion.div
              key={g.id}
              whileHover={{ scale: 1.05 }}
              className="min-w-[240px] snap-start card bg-base-100 shadow-xl"
            >
              <figure className="aspect-[16/10]">
                <img src={g.coverPhoto} className="object-cover" />
              </figure>

              <div className="card-body">
                <h3 className="font-semibold line-clamp-1">{g.name}</h3>
                <p className="line-clamp-2 opacity-70 text-sm">{g.description}</p>
                <Link to={`/game/${g.id}`} className="btn btn-sm btn-primary mt-2">
                  See More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
