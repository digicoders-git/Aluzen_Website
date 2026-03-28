import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoute from "./routes/AppRoute";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {AppRoute.map((r, i) => {
          const Com = r.component;
          return <Route path={r.path} element={<Com />} key={i} />
        })}
      </Routes>
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default App;
