import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LandingPage from "./routes/LandingPage";
import Blog from "./routes/Blog";
import ScrollToTop from "../utils/ScrollToTop";
import LoginScreen from "./routes/Login";
import Select from "./routes/Select";
import ModifyPost from "./routes/ModifyPost";
import CreatePost from "./routes/CreatePost";

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
        <Route path="/modify-post" element={<ModifyPost />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
