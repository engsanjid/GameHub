import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../Error/Error";
import Game from "../Page/Game";
import GameDetails from "../Page/GameDetails";
import Login from "../Page/Login";
import Register from "../Page/Register";
import ForgotPassword from "../Page/forgetPassword";
import MyProfile from "../Page/MyProfile";         
import UpdateProfile from "../Page/UpdateProfile";
import ProtectedRoute from "./ProtectedRoute";  
import About from "../Page/About";
import Contact from "../Page/Contact";
import Support from "../Page/Support";
import BlogDetails from "../component/BlogDetails";

const loadAllGames = () =>
  fetch("/allgame.json").then((r) => {
    if (!r.ok) throw new Response("Failed to load games", { status: r.status });
    return r.json();
  });

const loadGameById = async ({ params }) => {
  const games = await loadAllGames();
  const game = games.find((g) => String(g?.id) === String(params.id));
  if (!game) throw new Response("Game not found", { status: 404 });
  return game;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,   
    children: [
      { index: true, loader: loadAllGames, element: <Home /> },
      { path: "games", loader: loadAllGames, element: <Game /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "support", element: <Support /> },
{
  path: "blog/:id",
  element: <BlogDetails />,
},

      {
        path: "my-profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "game/:id",
        loader: loadGameById,
        element: (
          <ProtectedRoute>
            <GameDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },

  { path: "*", element: <ErrorPage /> },
]);

export default router;
