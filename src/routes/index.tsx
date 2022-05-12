import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from 'pages';

export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
