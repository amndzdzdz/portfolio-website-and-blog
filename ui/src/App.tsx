import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/navbar/components/Navbar";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import ScrollToTop from "./utils/ScrollToTop";
import LoginScreen from "./features/auth/components/LoginScreen";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
