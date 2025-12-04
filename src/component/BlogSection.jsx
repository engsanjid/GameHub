import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top 10 Indie Games to Play This Month",
    desc: "A curated list of incredible indie titles you shouldn’t miss.",
    img: "https://i.ibb.co/ZYW3VTp/brown-brick.jpg",
  },
  {
    id: 2,
    title: "How Game Developers Build Immersive Worlds",
    desc: "Behind the scenes of world-building in modern games.",
    img: "https://i.ibb.co/ypkgK0X/blue-shirt.jpg",
  },
  {
    id: 3,
    title: "Upcoming 2025 Releases to Watch",
    desc: "A sneak peek at game titles releasing next year.",
    img: "https://i.ibb.co/QdJwgmp/grey-shirt.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div key={b.id} className="card bg-base-200 shadow hover:shadow-lg">
              <figure className="aspect-[16/10]">
                <img src={b.img} alt={b.title} className="object-cover" />
              </figure>

              <div className="card-body">
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="text-sm opacity-80">{b.desc}</p>

                <Link to={`/blog/${b.id}`} className="btn btn-sm btn-primary mt-3">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
