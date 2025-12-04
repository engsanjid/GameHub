import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

import Banner from "../component/Banner";
import PopularGames from "../component/PopularGames";
import Newsletter from "../component/Newsletter";
import PromoSection from "../component/PromoSection";
import BlogSection from "../component/BlogSection";
import TrendingGames from "../component/TrendingGames";
import UpcomingGames from "../component/UpcomingGames";
import Testimonials from "../component/Testimonials";

export default function Home() {
  useTitle("Home | GameHub");
  const games = useLoaderData();

  return (
    <div className="space-y-16">

      {/* 🔥 Hero Banner */}
      <Banner />

      {/* 🔥 Trending Games Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">🔥 Trending Games</h2>
        <TrendingGames games={games} />
      </section>

      {/* ⭐ Popular Games */}
      <section className="max-w-7xl mx-auto px-4">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold">Popular Games</h2>
            <p className="text-sm opacity-70">Top picks by rating</p>
          </div>
          <Link to="/games" className="btn btn-ghost">
            Browse all
          </Link>
        </header>

        <PopularGames games={games} />
      </section>

      {/* 🎁 Promo / Offer Section */}
      <PromoSection />

      {/* 🚀 Upcoming Games */}
      <section className="max-w-7xl mx-auto px-4">
        <UpcomingGames />
      </section>

      {/* ⭐ Testimonials */}
      <section className="max-w-7xl mx-auto px-4">
        <Testimonials />
      </section>

      {/* 📰 Blog Section */}
      <section className="max-w-7xl mx-auto px-4">
        <BlogSection />
      </section>

      {/* 📬 Newsletter */}
      <Newsletter />

    </div>
  );
}
