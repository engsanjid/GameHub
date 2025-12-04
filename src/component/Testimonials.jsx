export default function Testimonials() {
  const reviews = [
    { name: "Alice", text: "Amazing game library! I find new gems every week." },
    { name: "Ryan", text: "The UI is clean and the recommendations are great!" },
    { name: "Selena", text: "Love the indie picks — unique games everywhere." },
  ];

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">What Players Say</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-xl bg-base-100 shadow">
              <p className="italic opacity-80">"{r.text}"</p>
              <h3 className="mt-4 font-semibold">{r.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
