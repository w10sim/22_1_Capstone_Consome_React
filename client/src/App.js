import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import FirstPage from "./components/views/FirstPage/FirstPage";
import InfoPage from "./components/views/InfoPage/InfoPage";

function App() {
  const Landing = Auth(LandingPage, null);
  const Login = Auth(LoginPage, false);
  const Register = Auth(RegisterPage, false);
  const First = Auth(FirstPage, null);
  const Info = Auth(InfoPage, null);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/land" element={<Landing />} />
          <Route exact path="/" element={<First />} />
          <Route exact path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
