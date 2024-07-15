import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "sendMony",
        element: <div>Send Money</div>
      },
    ]
  },
]);

export default routers;