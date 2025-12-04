
import React from "react";

export default function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true); 
  }

  return (
    <section className="bg-base-200">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <h3 className="text-2xl font-bold">Get weekly indie picks</h3>
        <p className="mt-1 opacity-80">
          Short, curated recommendations. No spam, unsubscribe anytime.
        </p>
        {!done ? (
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full max-w-md"
              placeholder="you@example.com"
              required
            />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
        ) : (
          <div className="alert alert-success mt-6 justify-center">
            Thanks! You’re subscribed.
          </div>
        )}
      </div>
    </section>
  );
}
