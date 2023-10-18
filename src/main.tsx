import ReactDOM from "react-dom/client";

//import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
// );

// const router = createHashRouter([{ path: "/*", element: <App /> }]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
