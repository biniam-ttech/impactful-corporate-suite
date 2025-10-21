import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
