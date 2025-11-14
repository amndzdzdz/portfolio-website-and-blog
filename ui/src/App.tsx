import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/navbar/components/Navbar";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
