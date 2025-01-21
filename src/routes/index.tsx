import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login-page/index";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
