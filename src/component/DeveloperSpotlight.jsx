export default function DeveloperSpotlight() {
  return (
    <section className="py-14 bg-base-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">🎨 Developer Spotlight</h2>
        <p className="opacity-80 max-w-lg mx-auto">
          Highlighting independent creators who shape the future of gaming.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://i.ibb.co/1QvT6X2/dev-profile.jpg"
            alt="Developer"
            className="w-40 h-40 rounded-full object-cover"
          />

          <div className="text-left space-y-2">
            <h3 className="text-xl font-bold">Aiden Cross</h3>
            <p className="opacity-70">
              Creator of the award-winning indie game **Shadowbound Chronicles**.
            </p>
            <button className="btn btn-primary btn-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
