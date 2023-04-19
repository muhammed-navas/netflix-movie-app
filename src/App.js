import Main from "./mainComponent/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from './component/sign/Sign'
import NavBar from './component/NavBar/NavBar'
import AllMoviesPage from "./mainComponent/AllMoviesPage";
import AboutPage from "./mainComponent/AboutPage";
import Login from "./component/Login/Login";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/movies" element={ <AllMoviesPage /> } />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
