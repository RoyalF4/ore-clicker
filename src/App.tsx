import { createBrowserRouter, RouterProvider } from "react-router-dom";

import useLocalStorage from "./hooks/UseLocalStorage.ts";
import { initialState } from "./hooks/UseLocalStorage.ts";

import ErrorPage from "./pages/ErrorPage.tsx";
import StartPage from "./pages/StartPage.tsx";
import Stats from "./pages/Stats.tsx";
import Game from "./components/Game.tsx";

export default function App() {
  const [state, dispatch] = useLocalStorage(initialState, "playerData");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/game",
      element: <Game state={state} dispatch={dispatch} />,
    },
    {
      path: "/stats",
      element: <Stats state={state} />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
