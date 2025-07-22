import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./component/Projects/projects";
import SkillComp from "./component/SkillComp/SkillComp";
import About from "./component/About/About";
import ContactCard from "./component/Contact/Contact";

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
    path: "/Contact",
    element: <ContactCard />,
    errorElement: <div>Error</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
