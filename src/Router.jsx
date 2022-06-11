import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ClipPage from "./pages/ClipPage";
import SearchPage from "./pages/SearchPage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/clip" element={<ClipPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
