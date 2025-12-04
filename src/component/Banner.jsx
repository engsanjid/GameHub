import React from "react";
import img from "../assets/francesco-la-corte-w_ALCig7cVU-unsplash.jpg";
import img1 from "../assets/pramod-tiwari-2AfDFg8uC40-unsplash.jpg";
import img2 from "../assets/ella-don-K4kfIEhj4GM-unsplash.jpg";

const slides = [
  { id: 1, src: img, title: "Explore Indies" },
  { id: 2, src: img2, title: "Support Developers" },
  { id: 3, src: img1, title: "Play Something New" },
];

export default function Banner() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-base-200">
      <div className="mx-auto max-w-7xl px-4 py-6">

        {/* 🔥 FIXED HEIGHT (65vh = 65% of screen height) */}
        <div className="relative h-[65vh] w-full overflow-hidden rounded-2xl">

          {slides.map((s, i) => (
            <img
              key={s.id}
              src={s.src}
              alt={s.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-3xl font-extrabold drop-shadow">
              {slides[idx].title}
            </h3>
            <p className="opacity-90 text-sm md:text-base">
              Discover, play, and back your favorite creators.
            </p>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-3 w-3 rounded-full ${
                  i === idx ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
