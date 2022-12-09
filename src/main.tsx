import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Partytown } from "@builder.io/partytown/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* Add the window methods that are wanted to be ran in the worker */}
    <Partytown
      debug={process.env.NODE_ENV !== "production"}
      forward={["amplitude.init", "amplitude.track"]}
    />
    <App />
  </React.StrictMode>
);
