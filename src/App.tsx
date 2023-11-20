import { Route, Routes } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Register from "./features/register";
import UpdateUser from "./features/update";
import HomePage from "./features/home";
import Login from "./features/login";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/update-user" element={<UpdateUser />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
