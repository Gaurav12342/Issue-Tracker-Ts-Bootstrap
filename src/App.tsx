import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FC } from "react";
import "./App.scss";
import Home from "./pages";

const App: FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
