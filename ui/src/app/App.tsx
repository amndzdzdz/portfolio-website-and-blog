import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LandingPage from "./routes/LandingPage";
import Blog from "./routes/Blog";
import ScrollToTop from "../utils/ScrollToTop";
import LoginScreen from "./routes/Login";
import Select from "./routes/Select";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
