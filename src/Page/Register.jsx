import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase.init";

const Register = () => {
  useTitle("Register | GameHub");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleRegister = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photoURL = form.photoURL.value.trim();
    const password = form.password.value;

    if (!name) return setError("Name is required.");
    if (!email) return setError("Email is required.");

   
    if (!passwordPattern.test(password)) {
      return setError(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
    }

    try {
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(cred.user, {
        displayName: name,
        photoURL: photoURL || undefined,
      });

      setSuccess(true);
      form.reset();
    } catch (err) {
   
      const message = mapFirebaseError(err?.code) || err.message || "Registration failed.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccess(false);
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setSuccess(true);
    } catch (err) {
      const message = mapFirebaseError(err?.code) || err.message || "Google sign-in failed.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 opacity-80">
            Create your account with email & password or continue with Google.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Your name" />

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />

                <label className="label">Photo URL</label>
                <input type="url" name="photoURL" className="input" placeholder="https://…" />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  autoComplete="new-password"
                />

                <button className="btn btn-neutral mt-4" disabled={loading}>
                  {loading ? "Registering…" : "Register"}
                </button>
              </fieldset>

              {success && (
                <p className="text-green-500 mt-3">Account created successfully!</p>
              )}
              {error && <p className="text-red-500 mt-3">{error}</p>}
            </form>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
              disabled={loading}
            >
              Continue with Google
            </button>

            <p className="mt-4 text-sm text-center">
              Already have an account? {" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
function mapFirebaseError(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already in use.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password is too weak.";
    case "auth/popup-closed-by-user":
      return "Google popup was closed before completing sign in.";
    default:
      return null;
  }
}
