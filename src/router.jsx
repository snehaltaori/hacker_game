import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import EndScreen from "./pages/EndScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/game",
        element: <Game />,
    },
    {
        path: "/end",
        element: <EndScreen />,
    },
]);

export default router;