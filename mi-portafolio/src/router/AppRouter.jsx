import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/proyectos/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;