import { BrowserRouter } from "react-router-dom";
import MainMenu from './client/MainMenu';
import './App.css';
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainMenu />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;