import useTitle from "../hooks/useTitle";
import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export default function ForgotPassword() {useTitle("Reset Password | GameHub");
  const location = useLocation();
  const initialEmail = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return (params.get("email") || "").trim();
  }, [location.search]);

  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setNotice("");
    if (!email) return setError("Email is required.");
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setNotice("If an account exists for that email, we sent a reset link.");
      const openGmail = () => window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
      const isGmail = /@gmail\.com$/i.test(email);
      if (isGmail) openGmail();
    } catch (err) {
      const msg = mapResetError(err?.code) || "If an account exists for that email, we sent a reset link.";
      setNotice(msg);
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold">Reset your password</h1>
          <p className="py-4 opacity-80">Enter your account email and we’ll send you a reset link.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={submit} noValidate>
              <label className="label" htmlFor="reset-email">Email</label>
              <input
                id="reset-email"
                type="email"
                name="email"
                className="input"
                placeholder="you@example.com"
                autoComplete="email"
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-neutral mt-4" disabled={loading}>
                {loading ? "Sending…" : "Send reset link"}
              </button>
              {error && <p className="text-red-500 mt-3">{error}</p>}
              {notice && <p className="text-green-600 mt-3">{notice}</p>}
            </form>
            <p className="mt-4 text-sm text-center">
              <Link to="/login" className="text-blue-500 underline">Back to login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapResetError(code) {
  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/missing-email":
      return "Email is required.";
    default:
      return null;
  }
}
