import useTitle from "../hooks/useTitle";

export default function About() {
  useTitle("About | GameHub");

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-3 text-primary">About GameHub</h1>
      <p className="opacity-80 leading-relaxed mb-8">
        GameHub is your all-in-one gaming destination. Whether you're a casual
        gamer or a hardcore enthusiast, GameHub brings you curated games,
        authentic reviews, and a sleek user experience designed to help you
        discover your next favorite game with ease.
      </p>

      {/* Mission Section */}
      <div className="bg-base-100 shadow rounded-xl p-6 mb-10 border border-base-300">
        <h2 className="text-xl font-semibold mb-2">🎯 Our Mission</h2>
        <p className="opacity-80">
          Our goal is simple — make game discovery easier, faster, and more fun.  
          We focus on quality gameplay, honest community feedback, and a seamless
          platform experience for all gamers.
        </p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold mb-4">✨ What We Offer</h2>

        <ul className="space-y-3">
          <li className="flex gap-2 items-start">
            <span className="text-primary text-lg">🎮</span>
            <p>
              <strong>Curated Game Library:</strong> Find high-quality games
              across different genres—handpicked, reviewed, and updated
              regularly.
            </p>
          </li>

          <li className="flex gap-2 items-start">
            <span className="text-primary text-lg">⭐</span>
            <p>
              <strong>Honest Reviews:</strong> Get clear insights before you
              play—ratings, details, pros & cons, and user feedback.
            </p>
          </li>

          <li className="flex gap-2 items-start">
            <span className="text-primary text-lg">⚡</span>
            <p>
              <strong>Fast & Modern UI:</strong> Built with React + Tailwind for
              a smooth browsing experience.
            </p>
          </li>

          <li className="flex gap-2 items-start">
            <span className="text-primary text-lg">🔐</span>
            <p>
              <strong>User Profiles:</strong> Create an account, save favorites,
              manage your profile, and personalize your experience.
            </p>
          </li>

          <li className="flex gap-2 items-start">
            <span className="text-primary text-lg">📱</span>
            <p>
              <strong>Fully Responsive:</strong> Enjoy GameHub on mobile, tablet
              or desktop — optimized for every screen size.
            </p>
          </li>
        </ul>
      </div>

      {/* Footer message */}
      <div className="mt-10 p-5 rounded-lg bg-primary/10 text-primary border border-primary/20">
        <p className="font-semibold">
          🚀 GameHub is constantly growing — more games, more features, and more fun on the way!
        </p>
      </div>
    </section>
  );
}
