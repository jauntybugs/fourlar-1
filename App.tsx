
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Retainer from './pages/Retainer';
import LeadMagnet from './pages/LeadMagnet';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Reusable Components
const Logo = ({ variant = "default" }: { variant?: "default" | "footer" }) => {
  const isFooter = variant === 'footer';
  
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="flex items-end gap-[2px] h-8 mb-1">
        <div className={`w-2 h-4 ${isFooter ? 'bg-blue-400' : 'bg-blue-900'} rounded-t-sm group-hover:h-5 transition-all`}></div>
        <div className={`w-2 h-7 ${isFooter ? 'bg-blue-500' : 'bg-blue-700'} rounded-t-sm group-hover:h-8 transition-all`}></div>
        <div className="w-2 h-6 bg-slate-400 rounded-t-sm group-hover:h-7 transition-all"></div>
        <div className="w-2 h-4 bg-slate-300 rounded-t-sm group-hover:h-5 transition-all"></div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-2xl font-bold tracking-tight ${isFooter ? 'text-white' : 'text-blue-950'}`}>FourLar</span>
        <span className={`text-[10px] uppercase tracking-widest ${isFooter ? 'text-slate-400' : 'text-slate-500'} font-semibold`}>— Consulting Ltd —</span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Retainers', path: '/retainers' },
    { label: 'Compliance Check', path: '/checklist' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24 items-center">
          <Logo />
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === item.path ? 'text-blue-700' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              Consultation
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-6 px-4 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-semibold px-2 py-2 ${
                location.pathname === item.path ? 'text-blue-700' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-blue-900 text-white px-5 py-4 rounded-md font-bold text-lg mt-4 shadow-lg shadow-blue-900/20"
          >
            Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="col-span-1 md:col-span-2">
        <div className="mb-8 inline-block">
          <Logo variant="footer" />
        </div>
        <p className="max-w-sm text-slate-400 mb-2 text-base leading-relaxed">
          FourLar Consulting Ltd is a specialist CDM and Health & Safety consultancy supporting construction, commercial, and engineering clients across the UK. 
        </p>
        <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-8">
          Competence. Compliance. Confidence.
        </p>
        <div className="flex gap-6">
          <a href="mailto:fourlar@icloud.com" className="bg-slate-800 p-3 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all shadow-lg" title="Email Us"><Mail size={22} /></a>
          <a href="tel:+447483283345" className="bg-slate-800 p-3 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all shadow-lg" title="Call Us"><Phone size={22} /></a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-8 border-l-4 border-blue-600 pl-4 uppercase tracking-widest">Services</h4>
        <ul className="space-y-4 text-base font-medium">
          <li><Link to="/services" className="hover:text-blue-400 transition-colors">Principal Designer</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition-colors">CDM Advisory</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition-colors">Site Inspections</Link></li>
          <li><Link to="/retainers" className="hover:text-blue-400 transition-colors">Retainer Packages</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-8 border-l-4 border-blue-600 pl-4 uppercase tracking-widest">Resources</h4>
        <ul className="space-y-4 text-base font-medium">
          <li><Link to="/checklist" className="hover:text-blue-400 transition-colors">Compliance Checklist</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Consultation</Link></li>
          <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-slate-800 text-center">
      <p className="text-sm text-slate-500 font-medium italic">
        &copy; {new Date().getFullYear()} FourLar Consulting Ltd. Registered in England & Wales. All rights reserved.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/retainers" element={<Retainer />} />
            <Route path="/checklist" element={<LeadMagnet />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
