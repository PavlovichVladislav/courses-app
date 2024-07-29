import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
import ThemeContextProvider from "./theme/ThemeContextProvider";

const LazyApp = lazy(() => import('./App'));
const LazyAboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <Suspense fallback={<div>загрузка</div>}>
        <Routes>
          <Route path="/" element={<LazyApp/>}/>
          <Route path="/about" element={<LazyAboutPage/>}/>
        </Routes>
      </Suspense>
    </ThemeContextProvider>
  </BrowserRouter>
);