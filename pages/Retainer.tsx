
import React, { useState } from 'react';
import { Check, Zap, Wallet, BarChart3, GraduationCap, AlertCircle, Loader2, CheckCircle } from 'lucide-react';

const Retainer: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const formId = import.meta.env.VITE_RETAINER_FORM_ID || 'fourlar@icloud.com';
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          subject: 'New Retainer Proposal Request',
          ...data
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError('Connection error. Please try again or email fourlar@icloud.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Outsourced CDM & Safety Leadership — <span className="text-blue-600 underline decoration-blue-200">Without the Overhead</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Not every business needs a full-time H&S manager. Every business needs competent advice. We provide structured monthly compliance support tailored to your scale.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-900 font-bold bg-white px-6 py-3 rounded-full border border-blue-100 shadow-sm w-fit mx-auto">
            <BarChart3 size={20} /> Starting From Competitive Monthly Rates
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: <Wallet className="text-blue-600" />, title: 'Predictable Cost', text: 'Fixed monthly investment for better budgeting.' },
               { icon: <Zap className="text-blue-600" />, title: 'Consistent Oversight', text: 'Never worry about missing a regulatory change.' },
               { icon: <GraduationCap className="text-blue-600" />, title: 'Tender Credibility', text: 'Named competent person for PQQs and tenders.' },
               { icon: <AlertCircle className="text-blue-600" />, title: 'Reduced Risk', text: 'Minimize enforcement and legal exposure.' }
             ].map((benefit, i) => (
               <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.text}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">What’s Included in Our Retainer:</h2>
              <div className="space-y-4">
                {[
                  'Competent Person appointment (Regulation 7)',
                  'Scheduled monthly site inspections',
                  'RAMS & project documentation review',
                  'Policy and procedure updates',
                  'Incident and accident advisory',
                  'Compliance monitoring reports',
                  'Direct telephone/email advisory line'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-blue-400 shrink-0" size={24} />
                    <span className="text-lg text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-10 text-slate-900 min-h-[500px] flex flex-col justify-center">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Request Retainer Proposal</h3>
                    <p className="text-slate-600 mb-8">Book a consultation to determine the appropriate level of support for your business scale and complexity.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input required name="name" type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
                      <input required name="email" type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
                      <select required name="businessType" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Business Type</option>
                        <option>Main Contractor</option>
                        <option>Property Developer</option>
                        <option>Fit-out / Facilities</option>
                        <option>Other</option>
                      </select>
                      
                      {error && (
                        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs font-bold">
                          {error}
                        </div>
                      )}

                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : 'Send Request'}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center animate-in fade-in zoom-in">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Proposal Requested</h3>
                    <p className="text-slate-600 mb-8">Thank you. We have received your request and will prepare a tailored retainer proposal for your review within 24 hours.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-blue-600 font-bold hover:underline">Send another request</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retainer;
