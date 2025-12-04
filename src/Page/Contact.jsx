import React from "react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>

      <p className="opacity-80 mb-6">
        If you have any questions or feedback, feel free to reach out.  
        We usually respond within 24 hours.
      </p>

      <div className="card bg-base-100 shadow-md p-6 space-y-4">
        <div>
          <label className="font-semibold">Your Name</label>
          <input type="text" placeholder="Enter your name" className="input input-bordered w-full" />
        </div>

        <div>
          <label className="font-semibold">Your Email</label>
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
        </div>

        <div>
          <label className="font-semibold">Message</label>
          <textarea
            placeholder="Write your message..."
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
        </div>

        <button className="btn btn-primary w-full">Send Message</button>
      </div>
    </section>
  );
}
