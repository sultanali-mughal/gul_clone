import "../src/assets/css/App.css";
import Layout from "./components/Layout";
import AppRouter from "./components/AppRouter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RedCollection2023 from "./pages/RedCollection2023"

function App() {
  return (
    <Router>
      <div className="App">
          <Layout/>
          <AppRouter/>
        </div>
    </Router>
    
  );
}

export default App;
