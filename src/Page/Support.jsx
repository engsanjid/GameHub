import React from "react";

export default function Support() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-primary mb-4">Support Center</h1>

      <p className="opacity-80 mb-6">
        Need help? Check our FAQ or submit a support request.
      </p>

      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">How do I reset my password?</div>
          <div className="collapse-content opacity-80">
            Go to Forgot Password page and follow the instructions.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">How do I update my profile?</div>
          <div className="collapse-content opacity-80">
            Go to My Profile → Update Profile.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 shadow">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">How do I get game support?</div>
          <div className="collapse-content opacity-80">
            You can submit a ticket using our support form.
          </div>
        </div>
      </div>

      <button className="btn btn-primary mt-6 w-full">
        Submit a Support Ticket
      </button>
    </section>
  );
}
