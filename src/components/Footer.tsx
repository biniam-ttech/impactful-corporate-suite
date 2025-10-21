import { Code, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Ubuntu Tech</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Empowering African innovation through technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600"><Twitter size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-blue-600"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-blue-600"><Github size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</Link></li>
              <li><Link to="/team" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Team</Link></li>
              <li><Link to="/contact" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Web Development</Link></li>
              <li><Link to="/services" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">UI/UX Design</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Ubuntu Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
