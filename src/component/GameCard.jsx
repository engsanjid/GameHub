import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GameCard({ game }) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="card card-compact bg-base-100 shadow hover:shadow-xl"
    >
      <figure className="aspect-[16/10] bg-base-300 overflow-hidden">
        <img
          src={game.coverPhoto}
          alt={game.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>

      <div className="card-body">
        <h3 className="line-clamp-1 text-lg font-semibold">{game.name}</h3>

        <div className="flex items-center gap-3 text-sm opacity-80">
          <span className="badge badge-outline">{game.category}</span>
          <span>{Number(game.ratings).toFixed(1)}</span>
        </div>

        <p className="line-clamp-2 text-sm opacity-80">{game.description}</p>

        <div className="card-actions justify-between pt-2">
          <a href={game.downloadLink} target="_blank" className="btn btn-sm">
            Install
          </a>
          <Link to={`/game/${game.id}`} className="btn btn-sm btn-primary">
            Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
