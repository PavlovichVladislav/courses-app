import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';

const LazyApp = lazy(() => import('./App'));
const LazyAboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Link to={'/'}>root page</Link>
    <Link to={'/about'}>about page</Link>
    <Suspense fallback={<div>загрузка</div>}>
      <Routes>
        <Route path="/" element={<LazyApp/>}/>
        <Route path="/about" element={<LazyAboutPage/>}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
);