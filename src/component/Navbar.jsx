import React, { useEffect, useState } from "react";
import img from "../assets/images-removebg-preview.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };

  const Brand = () => (
    <Link to="/" className="flex items-center gap-2">
      <img className="h-10 w-auto rounded-lg" src={img} alt="GameHub" />
      <span className="text-xl font-extrabold tracking-tight">GameHub</span>
    </Link>
  );

  const NavItem = ({ to, children }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-3 py-2 ${
            isActive ? "text-primary font-semibold" : "opacity-90"
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );

  const MenuList = () => (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/games">All Items</NavItem>
      <NavItem to="/about">About Us</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/support">Support</NavItem>

      {!user && (
        <>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/register">Register</NavItem>
        </>
      )}
    </>
  );

  const MobileMenu = () => (
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-60"
      >
        <MenuList />

        {user && (
          <>
            <li className="menu-title mt-2">Account</li>
            <li>
              <Link to="/my-profile">My Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );

  return (
    <header className="w-full bg-primary/10 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left */}
        <div className="navbar-start gap-2">
          <div className="hidden lg:block">
            <Brand />
          </div>
          <div className="lg:hidden">{<MobileMenu />}</div>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            <MenuList />
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                  <img
                    src={user.photoURL || "https://i.pravatar.cc/150"}
                    alt={user.displayName || user.email}
                  />
                </div>
              </label>

              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/my-profile">My Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
