import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import { ROUTES } from "./constants/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.products} element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
