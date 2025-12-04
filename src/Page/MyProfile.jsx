import React from "react";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
import useTitle from "../hooks/useTitle";

export default function MyProfile() {
  useTitle("My Profile | GameHub");

  const user = auth.currentUser;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 flex justify-center">
      <div className="max-w-md w-full bg-base-100 shadow-lg rounded-xl p-8 border space-y-6">

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-28 rounded-full ring ring-primary ring-offset-2">
              <img
                src={user.photoURL || "https://i.pravatar.cc/150?img=49"}
                alt={user.displayName || user.email}
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold mt-4">
            {user.displayName || "Unnamed User"}
          </h1>

          <p className="opacity-70 text-sm">{user.email}</p>
        </div>

        {/* Divider */}
        <div className="divider">Profile Information</div>

        {/* Details */}
        <div className="space-y-3 text-sm">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <span className="opacity-80">{user.email}</span>
          </p>

          <p>
            <span className="font-semibold">Display Name:</span>{" "}
            <span className="opacity-80">
              {user.displayName || "Not provided"}
            </span>
          </p>

          <p>
            <span className="font-semibold">User ID:</span>{" "}
            <span className="opacity-70 text-xs block break-all mt-1">
              {user.uid}
            </span>
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4">
          <Link to="/update-profile" className="btn btn-primary w-full">
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
