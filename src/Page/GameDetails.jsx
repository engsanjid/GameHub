import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

function StarRating({ value = 0, outOf = 5 }) {
  const v = Math.max(0, Math.min(outOf, Number(value)));
  const full = Math.floor(v);
  const hasHalf = v - full >= 0.5;
  const empty = outOf - full - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => <span key={`f${i}`}>★</span>)}
      {hasHalf && <span>☆</span>}
      {Array.from({ length: empty }).map((_, i) => <span key={`e${i}`}>✩</span>)}
      <span className="ml-2 text-sm opacity-70">{v.toFixed(1)}/{outOf}</span>
    </div>
  );
}

export default function GameDetails() {
  const game = useLoaderData();
  useTitle(`${game.title} | GameHub`);

  const { id, title, coverPhoto, category, tags = [], downloadLink, description, ratings, developer } = game;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <div className="grid md:grid-cols-[320px,1fr] gap-6 rounded-xl border bg-base-100 shadow-sm overflow-hidden">

        {/* Image Section */}
        <div className="bg-base-300/20">
          {coverPhoto ? (
            <img src={coverPhoto} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="h-60 md:h-80 flex items-center justify-center opacity-60">
              No Image Available
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-4">

          <h1 className="text-3xl font-bold">{title}</h1>

          <div className="flex flex-wrap items-center gap-3 text-sm opacity-80">
            {category && <span className="badge badge-outline">{category}</span>}
            <StarRating value={ratings} />
            {developer && <span>• by {developer}</span>}
            <span className="opacity-60">ID: {id}</span>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="badge badge-primary badge-outline">{t}</span>
              ))}
            </div>
          )}

          {description && <p className="leading-relaxed opacity-90">{description}</p>}

          <div className="flex gap-3 pt-3">
            {downloadLink && (
              <a href={downloadLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                Install
              </a>
            )}
            <Link to="/games" className="btn btn-outline">Back to List</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
