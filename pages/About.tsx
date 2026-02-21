
import React from 'react';
import { Target, User, ShieldCheck, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header - Moderate */}
      <div className="bg-slate-50 border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">About FourLar Consulting Ltd</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Specialist CDM and Health & Safety consultancy supporting UK construction and commercial sectors with structured risk governance.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl w-fit mb-6 shadow-sm">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Founded on the principle of <strong>Competence. Compliance. Confidence.</strong>, FourLar provides technically robust risk solutions aligned with CDM Regulations 2015.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We bridge the gap between regulatory requirements and site reality, providing commercially aware CDM advisory that reduces enforcement risk and strengthens project delivery.
              </p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-12 border border-slate-200 relative overflow-hidden shadow-inner">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50"></div>
               <blockquote className="relative z-10 text-2xl font-semibold text-blue-900 italic leading-snug">
                "Regulatory alignment doesn't have to be bureaucratic. We make compliance a commercial asset for your business."
               </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile - Moderate */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row max-w-6xl mx-auto border border-slate-100">
            <div className="md:w-1/3 bg-slate-200">
               <img 
                 src="https://res.cloudinary.com/dreamsavvy/image/upload/v1771416199/WhatsApp_Image_2026-02-18_at_10.00.58_AM_gmrjjs.jpg" 
                 alt="Fola Adeloye" 
                 className="w-full h-full object-cover min-h-[500px] object-top" 
               />
            </div>
            <div className="md:w-2/3 p-10 lg:p-16">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Director Profile</h2>
                  <h3 className="text-4xl font-bold text-slate-900">Fola Adeloye</h3>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider border border-blue-100">
                  <Award size={18} />
                  Certified Member of IOSH
                </div>
              </div>

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg font-medium text-slate-900">
                  Fola Adeloye is an independent health and safety consultant with a strong construction, commercial and engineering background. He provides competent person services and director-level advisory support to small and medium-sized businesses nationwide.
                </p>
                <p>
                  He leads FourLar Consulting Ltd, ensuring duty holders fulfill legal obligations while maintaining operational efficiency and project programme integrity. With a background in practical site operations and detailed regulatory knowledge, Fola ensures compliance is integrated seamlessly into project delivery.
                </p>
                <p>
                  He also support organisations across a broader range of sectors, including <strong>banking and finance, facilities management, healthcare, education, commercial, infrastructure, retail, pharmaceutical etc.</strong>, applying the same risk-based and proportionate approach to help businesses strengthen compliance, control risk, and operate with confidence.
                </p>
                <p className="font-semibold text-slate-800 italic">
                  Fola is a certified member of The Institute of Occupational Safety and Health (IOSH).
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Core Specialisms</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    'Design risk elimination principles',
                    'Proportionate compliance systems',
                    'Inspection-ready site documentation',
                    'Commercial risk awareness',
                    'Multidisciplinary sector expertise',
                    'Competent Person (Reg 7) advisory'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                      <ShieldCheck className="text-blue-500 shrink-0" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
