import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Homepage = React.lazy(() => import('./pages/Homepage'));
const Subscribe = React.lazy(() => import('./pages/Subscribe'));

const ProjectRoutes = () => {
  return (
    <React.Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<h1>Not Found...</h1>} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
