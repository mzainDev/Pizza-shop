import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Success from "./pages/Success";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/success"
            element={<ProtectedRoute element={<Success />} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
