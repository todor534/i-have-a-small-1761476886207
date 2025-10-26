import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="app-root">
      <nav className="main-nav">
        <Link to="/" className="logo">WebDev Studio</Link>
        <div className="nav-links">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact" className="contact-btn">Contact</Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} WebDev Studio. All rights reserved.
      </footer>
    </div>
  );
}
