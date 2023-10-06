import { BrowserRouter, useRoutes } from "react-router-dom";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "../src/app/store";
import { Toaster } from "react-hot-toast";

function App() {

  const routing = useRoutes(Routes());
  return <>{routing}</>;
}

const AppWrapper = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Toaster />
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default AppWrapper;
