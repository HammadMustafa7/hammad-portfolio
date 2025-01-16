import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import AboutPage from './components/About/About.jsx';
import Project from './components/Project/Project.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
      <Route path="*" element={<div>404 Not Found</div>} /> {/* Optional 404 Route */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
