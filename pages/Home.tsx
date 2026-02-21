
import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  HardHat, 
  ClipboardList, 
  ShieldCheck, 
  BadgeCheck, 
  Users, 
  Construction, 
  Search, 
  ChevronRight,
  Quote,
  Star,
  ChevronLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Jimmy Evans",
    role: "Director",
    company: "",
    text: "Following an initial consultation, Fola provided ongoing monthly support to help us review and compile our risk assessments. He worked closely with both management and staff to understand our operations and ensure the assessments accurately reflected how work is actually carried out. His practical, collaborative approach made the process straightforward and added real value to our health and safety arrangements.",
    rating: 5
  },
  {
    name: "Bile OS",
    role: "Director",
    company: "",
    text: "Fola’s depth of knowledge, combined with his approachable personality, made working with him a positive and motivating experience. His advice was clear, logical and practical, helping us improve our health and safety arrangements without unnecessary complexity.",
    rating: 5
  },
  {
    name: "Harry Dada",
    role: "Managing Director",
    company: "",
    text: "Fola’s calm, friendly and reassuring approach made working with him a genuinely positive experience. During his visit to our premises, his knowledge and experience were clearly evident, and he has already supported us across a number of areas to help ensure we remain compliant with our health and safety obligations. We look forward to continuing to work with him going forward.",
    rating: 5
  }
];

const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 10000); // 10s for longer text reading
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="flex flex-col">
      {/* Hero Section - Moderate Height */}
      <section className="relative min-h-[75vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600 to-transparent"></div>
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Construction background" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10 py-20">
          <div className="max-w-3xl">
            <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">UK-based CDM & Health and Safety Consultancy</h4>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Practical Health & Safety Support<span className="text-blue-500"> That Protects Your Business.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Independent health and safety consultant helping UK businesses stay compliant, reduce risk, and avoid costly enforcement action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/checklist" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20">
                Compliance Consultation <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-md font-bold text-lg border border-white/20 transition-all text-center">
                Discuss Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Section - Moderate Spacing */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
                <ShieldAlert size={14} /> The Risk Reality
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Non-Compliance is Expensive.</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                HSE enforcement, project delays, and reputational damage are real risks facing construction businesses today.
              </p>
              <p className="text-lg text-slate-600 mb-8 font-medium italic leading-relaxed">
                FourLar Consulting Ltd provides competent, commercially aware advisory services designed to protect your operational performance and ensure regulatory peace of mind.
              </p>
              <div className="p-6 bg-slate-50 border-l-4 border-blue-900 rounded-r-xl">
                <p className="text-blue-950 font-bold text-xl italic leading-snug">"We don't just produce documents — we strengthen your compliance systems."</p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { label: 'HSE Enforcement', color: 'bg-red-50', text: 'text-red-700' },
                { label: 'Project Delays', color: 'bg-orange-50', text: 'text-orange-700' },
                { label: 'Reputational Damage', color: 'bg-slate-50', text: 'text-slate-700' },
                { label: 'Lost Tenders', color: 'bg-amber-50', text: 'text-amber-700' }
              ].map((risk, i) => (
                <div key={i} className={`${risk.color} p-8 rounded-xl flex items-center justify-center text-center border border-slate-100 shadow-sm transition-transform hover:-translate-y-1`}>
                  <span className={`text-sm font-bold tracking-wide ${risk.text}`}>{risk.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Moderate Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Built for Regulatory Certainty</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users />, title: 'Principal Designer Advisory', desc: 'Expert coordination and design risk management aligned with CDM 2015.' },
              { icon: <ClipboardList />, title: 'Pre-Construction Info', desc: 'Streamlined information management to ensure project clarity and safety.' },
              { icon: <Construction />, title: 'Construction Phase Plans', desc: 'Comprehensive, project-specific safety roadmaps for site operations.' },
              { icon: <Search />, title: 'RAMS Review', desc: 'Rigorous vetting of method statements to ensure suitable hazard controls.' },
              { icon: <ShieldCheck />, title: 'Site Safety Inspections', desc: 'Objective on-site audits to identify compliance gaps and behavioral risks.' },
              { icon: <BadgeCheck />, title: 'Retainer-Based Support', desc: 'Ongoing, outsourced safety leadership tailored to your business scale.' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="mb-6 p-3 bg-blue-50 w-fit rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-base text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback Slider - Moderate Size */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-2">Social Proof</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Our Clients Feedback</h3>
          </div>

          <div className="relative bg-slate-50 rounded-3xl p-10 md:p-16 shadow-inner border border-slate-100">
            <Quote className="absolute top-10 right-10 text-slate-200" size={100} />
            
            <div className="relative z-10 min-h-[250px] flex flex-col justify-center">
              <div className="transition-all duration-700 ease-in-out">
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonials[activeSlide].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-lg md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 italic">
                  "{testimonials[activeSlide].text}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{testimonials[activeSlide].name}</h4>
                  <p className="text-sm md:text-base text-blue-600 font-bold uppercase tracking-wider">{testimonials[activeSlide].role}</p>
                  {testimonials[activeSlide].company && (
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{testimonials[activeSlide].company}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-10 right-10 flex items-center gap-4">
              <button onClick={prevSlide} className="p-3 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition-all text-slate-600">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="p-3 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition-all text-slate-600">
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-12 left-10 md:left-16 flex gap-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-10 bg-blue-600' : 'w-2 bg-slate-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors & Why Us - Moderate Scaling */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why FourLar Consulting Ltd?</h2>
              <div className="space-y-6">
                {[
                  'CDM 2015-compliant methodology',
                  'Site-focused, practical safety solutions',
                  'Commercially aware advisory approach',
                  'Flexible project & retainer pricing structures',
                  'Technically robust risk governance'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-1 bg-green-50 rounded-full text-green-600 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-lg font-semibold text-slate-700 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full"></div>
              <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                <Building2 className="text-blue-400" /> Sectors We Support
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: <HardHat size={20} />, label: 'Main Contractors' },
                  { icon: <Building2 size={20} />, label: 'Property Developers' },
                  { icon: <Construction size={20} />, label: 'Designers as defined under the CDM Regulations 2015' },
                  { icon: <ClipboardList size={20} />, label: 'Project Managers' },
                  { icon: <Users size={20} />, label: 'Facilities & Asset Managers' }
                ].map((sector, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-default">
                    <div className="text-blue-400 shrink-0">{sector.icon}</div>
                    <span className="font-medium text-sm md:text-base leading-tight">{sector.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Moderate */}
      <section className="py-20 bg-blue-900 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Project Before Problems Arise.</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a consultation today to assess your CDM compliance framework and ensure your operations are regulatory-ready.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 transform">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;