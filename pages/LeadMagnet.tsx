
import React, { useState } from 'react';
import { CheckSquare, Square, AlertTriangle, Send, Download, Loader2, AlertCircle } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [checks, setChecks] = React.useState<boolean[]>(new Array(10).fill(false));
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleCheck = (index: number) => {
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
  };

  const questions = [
    "Is a Principal Designer formally appointed in writing?",
    "Is Pre-Construction Information documented and shared?",
    "Is the Construction Phase Plan project-specific?",
    "Are RAMS reviewed and approved before work begins?",
    "Are subcontractors assessed for competence?",
    "Are site inductions documented?",
    "Is design risk elimination recorded?",
    "Are inspections documented and corrective actions tracked?",
    "Is there an incident reporting procedure?",
    "Is a Health & Safety File being prepared?"
  ];

  const handleRequestReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Prepare checklist report for the email
    const checklistReport = questions.reduce((acc: any, q, i) => {
      acc[q] = checks[i] ? "YES" : "NO - GAP IDENTIFIED";
      return acc;
    }, {});

    try {
      const formId = import.meta.env.VITE_LEAD_FORM_ID || 'fourlar@icloud.com';
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          subject: 'Compliance Checklist Review Request',
          ...formData,
          score: `${checks.filter(Boolean).length}/10`,
          ...checklistReport
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setError('System error. Please call us or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const checkedCount = checks.filter(Boolean).length;

  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-blue-900 p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">10 Critical CDM Compliance Checks</h1>
            <p className="text-blue-200">Every Contractor Must Have These in Place</p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <div className="h-2 w-full bg-slate-100 rounded-full mb-2">
                <div 
                  className="h-2 bg-blue-600 rounded-full transition-all duration-500" 
                  style={{ width: `${(checkedCount / 10) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{checkedCount} of 10 checks confirmed</p>
            </div>

            <div className="space-y-4 mb-10">
              {questions.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => toggleCheck(i)}
                  className={`w-full flex items-start text-left gap-4 p-4 rounded-xl transition-all border ${
                    checks[i] ? 'bg-blue-50 border-blue-200 text-blue-900' : 'bg-slate-50 border-slate-100 text-slate-700'
                  }`}
                >
                  <div className="mt-0.5">
                    {checks[i] ? <CheckSquare size={20} className="text-blue-600" /> : <Square size={20} />}
                  </div>
                  <span className="font-medium">{q}</span>
                </button>
              ))}
            </div>

            {checkedCount < 10 && (
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-10 rounded-r-xl">
                <div className="flex gap-3 text-amber-800">
                  <AlertTriangle className="shrink-0" />
                  <div>
                    <h4 className="font-bold">Gaps Identified</h4>
                    <p className="text-sm">You have {10 - checkedCount} potential compliance gaps that could expose your project to HSE enforcement and delays.</p>
                  </div>
                </div>
              </div>
            )}

            {!submitted ? (
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Unsure about any of these?</h3>
                <p className="text-slate-400 mb-6">Enter your details to receive the full compliance guide and request a professional review from FourLar Consulting Ltd.</p>
                <form onSubmit={handleRequestReview} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Full Name" 
                      className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <input 
                      required 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Company Name" 
                      className="w-full p-4 rounded-xl bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Your work email" 
                      className="flex-1 p-4 rounded-xl bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? <><Loader2 className="animate-spin" size={18} /> Sending...</> : <><Send size={18} /> Request Review</>}
                    </button>
                  </div>
                </form>
                {error && (
                  <div className="mt-4 flex items-center gap-2 text-red-400 text-sm font-bold">
                    <AlertCircle size={16} /> {error}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in">
                <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-8">Your compliance checklist results and guide are being sent to your inbox. We will contact you shortly to discuss your results.</p>
                <button className="text-blue-600 font-bold underline" onClick={() => setSubmitted(false)}>Start over</button>
              </div>
            )}
          </div>
          
          <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">FourLar Consulting Ltd &copy; 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
