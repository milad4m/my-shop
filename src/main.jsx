import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<RouterProvider router={router}/>);
