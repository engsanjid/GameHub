
import React, { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { Navigate, useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
export default function UpdateProfile() {useTitle("Update Profile | GameHub");
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  if (!user) return <Navigate to="/login" replace />;

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setMsg("");
    try {
      setLoading(true);
      await updateProfile(user, {
        displayName: name.trim() || null,
        photoURL: photoURL.trim() || null,
      });
      setMsg("Profile updated.");
      navigate("/my-profile", { replace: true });
    } catch (error) {
      setErr(error?.message || "Update failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold">Update Information</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={onSubmit} noValidate>
              <label className="label" htmlFor="name">Name</label>
              <input
                id="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
              <label className="label" htmlFor="photo">Photo URL</label>
              <input
                id="photo"
                type="url"
                className="input"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="https://…"
              />
              <button type="submit" className="btn btn-neutral mt-4" disabled={loading}>
                {loading ? "Updating…" : "Update Information"}
              </button>
              {err && <p className="text-red-500 mt-3">{err}</p>}
              {msg && <p className="text-green-600 mt-3">{msg}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
