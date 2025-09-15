import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Rotas from "./routes";
import Footer from "./components/Footer";
import { GlobalCss } from "./styles";

import { store } from "./store";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Sidebar />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
