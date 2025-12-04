import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Top 10 Indie Games to Play This Month",
    desc: "A curated list of incredible indie titles you shouldn’t miss.",
    img: "https://i.ibb.co/ZYW3VTp/brown-brick.jpg",
    content:
      "Full detailed article for Top 10 Indie Games. You can add long paragraphs here...",
  },
  {
    id: 2,
    title: "How Game Developers Build Immersive Worlds",
    desc: "Behind the scenes of world-building in modern games.",
    img: "https://i.ibb.co/ypkgK0X/blue-shirt.jpg",
    content:
      "Full article explaining how developers create immersive worlds...",
  },
  {
    id: 3,
    title: "Upcoming 2025 Releases to Watch",
    desc: "A sneak peek at game titles releasing next year.",
    img: "https://i.ibb.co/QdJwgmp/grey-shirt.jpg",
    content:
      "Detailed article about upcoming 2025 game titles...",
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog)
    return <h2 className="text-center text-red-500 mt-10">Blog Not Found</h2>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">

      <img src={blog.img} alt={blog.title} className="w-full rounded-xl" />

      <h1 className="text-3xl font-bold">{blog.title}</h1>

      <p className="opacity-80">{blog.desc}</p>

      <p className="leading-relaxed text-base opacity-90">
        {blog.content}
      </p>

      <Link to="/" className="btn btn-outline mt-4">Back to Home</Link>
    </div>
  );
}
