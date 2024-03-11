import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import News from "../pages/NewsPage";
import NewPage from "../pages/NewPage";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/about" Component={About} />
        <Route path="/news" Component={News} />
        <Route path="/news/:id" element={<NewPage />} />
      </Routes>
  );
};

export default AppRouter;
