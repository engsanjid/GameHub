import useTitle from "../hooks/useTitle";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

function Login() {
  useTitle("Login | GameHub");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (loading) return;
    const form = e.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value;
    if (!email) return setError("Email is required.");
    if (!password) return setError("Password is required.");
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(mapFirebaseError(err?.code) || err?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    if (loading) return;
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(
        mapFirebaseError(err?.code) || err?.message || "Google sign-in failed."
      );
    } finally {
      setLoading(false);
    }
  };

  const goToForgot = () => {
    const q = emailInput ? `?email=${encodeURIComponent(emailInput.trim())}` : "";
    navigate(`/forgot-password${q}`);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6 opacity-80">
            Enter your email and password or continue with Google.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleEmailLogin} noValidate>
              <fieldset className="fieldset">
                <label className="label" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="input"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  disabled={loading}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <label className="label" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="input"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                />
                <div className="flex items-center justify-between mt-2">
                  <button
                    type="button"
                    className="link link-primary text-sm"
                    onClick={goToForgot}
                    disabled={loading}
                  >
                    Forgot password?
                  </button>
                  <button
                    type="submit"
                    className="btn bg-green-300 text-black btn-neutral"
                    disabled={loading}
                  >
                    {loading ? "Logging in…" : "Login"}
                  </button>
                </div>
              </fieldset>
              {error && <p className="text-red-500 mt-3">{error}</p>}
            </form>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
              disabled={loading}
              type="button"
            >
              Continue with Google
            </button>
            <p className="mt-4 text-sm text-center">
              No account?{" "}
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

function mapFirebaseError(code) {
  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/user-not-found":
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "Incorrect email or password.";
    case "auth/popup-blocked":
      return "Your browser blocked the popup. Please allow popups for this site.";
    case "auth/popup-closed-by-user":
      return "Google popup was closed before completing sign in.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Try again later.";
    default:
      return null;
  }
}
