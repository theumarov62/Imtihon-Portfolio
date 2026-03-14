import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Public import
import Home from "./pages/public/Home";

// Admin dashboard Login import
import Login from "./auth/Login";

// Protected Route import
import ProtectedRoute from "./Route/ProtectedRoute";

// Admin import
import Admin from "./pages/admin/Home";
// Admin Components import
import AdminAbout from "./components/AdminAbout";

import AdminSkills from "./components/AdminSkills";
import AdminProjects from "./components/AdminProjects";

// Projects import
import Projects from "./components/Public/Projects/Projects";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Home />} />

      {/* Admin Dashboard Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Admin Panel */}
      <Route
        path="/admin-about"
        element={
          <ProtectedRoute>
            <AdminAbout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-skills"
        element={
          <ProtectedRoute>
            <AdminSkills />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin-projects"
        element={
          <ProtectedRoute>
            <AdminProjects />
          </ProtectedRoute>
        }
      />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
);
