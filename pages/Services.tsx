
import React from 'react';
import { Users, FileCheck, Search, Activity, HeartHandshake, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header - Moderate */}
      <div className="bg-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-800/30 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">CDM & Principal Designer</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Specialist CDM advisory services aligned with the Construction (Design and Management) Regulations 2015 for total project compliance.
          </p>
        </div>
      </div>

      {/* Main Services - Moderate Spacing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-7/12 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-6 uppercase tracking-wider">
                <Users size={16} /> Core CDM Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Principal Designer Services</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Competent Principal Designer support from FourLar Consulting Ltd ensuring your projects meet legal duties while significantly reducing design-phase risks through structured coordination.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Pre-construction information',
                  'Design risk coordination',
                  'Duty holder advisory support',
                  'Health & Safety file preparation',
                  'CDM 2015 legal alignment'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                    <ShieldCheck className="text-blue-600 shrink-0" size={18} /> <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                Consultancy Support <ChevronRight size={20} />
              </Link>
            </div>
            <div className="lg:w-5/12 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50">
                <img src="https://res.cloudinary.com/dreamsavvy/image/upload/v1771352086/forr_ibp1fv.jpg" className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500" alt="Service Detail" />
              </div>
            </div>
          </div>

          {/* Service Grid - Moderate Density */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="mb-6 p-4 bg-blue-600 text-white rounded-2xl w-fit shadow-lg shadow-blue-600/20"><Search size={28} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">RAMS & Documentation</h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Rigorous vetting of method statements and risk assessments to ensure clear hazard identification and compliant controls for reduced enforcement exposure.
                </p>
                <ul className="space-y-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> Method statement preparation & vetting</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-600 rounded-full"></div> HSE standard alignment</li>
                </ul>
             </div>
             <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="mb-6 p-4 bg-white text-blue-900 rounded-2xl shadow-lg w-fit"><Activity size={28} /></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Site Safety Inspections</h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Independent on-site audits identifying non-compliance gaps and behavioral risks, followed by detailed, actionable improvement reports.
                </p>
                <ul className="space-y-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> Behavioral risk identification</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> Actionable closure reports</li>
                </ul>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;