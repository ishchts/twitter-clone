import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Auth } from './pages/auth';
import { Home } from './pages/home';

import { LoginModal } from './components/login-modal';

export const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" caseSensitive element={<Auth />}>
        <Route path=":login" element={<LoginModal />} />
        <Route path=":sign-in" element={<LoginModal />} />
      </Route>
      <Route path="home" element={<Home />} />
      <Route path="explore" element={<div>explore</div>} />
    </Routes>
  </Router>
);
