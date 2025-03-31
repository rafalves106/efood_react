import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import { GlobalCss } from "./styles";
import Home from "./components/pages/Home";
import Italiana from "./components/pages/Italiana";
import Japonesa from "./components/pages/Japonesa";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/italiana",
    element: <Italiana />,
  },
  {
    path: "/japonesa",
    element: <Japonesa />,
  },
]);

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  );
}

export default App;
