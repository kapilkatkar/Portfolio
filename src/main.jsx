import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./component/Projects/Projects";
import SkillComp from "./component/SkillComp/SkillComp";
import About from "./component/About/About";
import ChatBot from "./component/ChatBot/ChatBot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/projects",
    element: <Project />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/Skills",
    element: <SkillComp />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/ChatBot",
    element: <ChatBot />,
    errorElement: <div>Error</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
