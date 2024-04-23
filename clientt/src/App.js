import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components/getuser/user";
import Adduser from "./components/adduser/Adduser";
import Edit from "./components/Updateuser/Edit.jsx";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Adduser />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}>
        {/* Place your routes and components here */}
      </RouterProvider>
    </div>
  );
}

export default App;
