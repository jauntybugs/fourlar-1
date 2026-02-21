
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2, AlertCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
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
      const formId = import.meta.env.VITE_CONTACT_FORM_ID || 'fourlar@icloud.com';
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          subject: 'New Consultation Request - FourLar Website',
          ...data
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Sorry, there was a problem sending your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Book Consultation</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Protect your project today. Get in touch for a professional CDM or Health & Safety consultation tailored to your construction needs.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-12">
                Whether you have a specific project inquiry or require ongoing retainer-based support, our team is ready to provide the regulatory expertise your business needs.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">fourlar@icloud.com</p>
                    <p className="text-sm text-blue-600 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">+44 (0) 7483283345</p>
                    <p className="text-sm text-blue-600 mt-1">Mon - Fri, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Head Office</h4>
                    <p className="text-slate-600">12 Furrow Way, Great Glen,<br />Leicester, LE8 9HR</p>
                    <p className="text-sm text-slate-400 mt-1">Supporting clients nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                    <p className="text-slate-600">Monday — Friday: 09:00 - 17:30</p>
                    <p className="text-slate-600">Saturday — Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Urgent Compliance Matter?</h4>
                <p className="text-slate-600 mb-0">
                  If you are facing immediate HSE enforcement or an urgent site incident, please call our advisory line directly for priority support.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 min-h-[600px] flex flex-col justify-center">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input required name="name" type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Company</label>
                      <input required name="company" type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Acme Construction" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Work Email</label>
                      <input required name="email" type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                      <input required name="phone" type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="+44 000 000 000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service of Interest</label>
                    <select required name="service" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                      <option value="">Select a service</option>
                      <option>Principal Designer Services</option>
                      <option>CDM Advisory</option>
                      <option>Construction Phase Plans</option>
                      <option>Site Safety Inspections</option>
                      <option>Retainer-Based Support</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Project Details / Message</label>
                    <textarea name="message" rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" placeholder="Tell us about your project or requirements..."></textarea>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
                      <AlertCircle size={18} /> {error}
                    </div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-blue-900 text-white p-5 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? <><Loader2 className="animate-spin" size={24} /> Sending...</> : <><Send size={20} /> Book Consultation</>}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
                  </p>
                </form>
              ) : (
                <div className="text-center py-20 animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Sent</h3>
                  <p className="text-lg text-slate-600 mb-10">
                    Thank you for your interest. A member of our advisory team will review your consultation request and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="relative h-[500px] w-full overflow-hidden border-t border-slate-200">
        <iframe 
          title="FourLar Consulting Ltd Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.646543164983!2d-1.036074223298816!3d52.57393433230491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877667232298711%3A0x6e9a686b36a7988a!2s12%20Furrow%20Way%2C%20Great%20Glen%2C%20Leicester%20LE8%209HR!5e0!3m2!1sen!2suk!4v1740000000000!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Floating Info Card */}
        <div className="absolute top-8 left-8 hidden md:block max-w-sm bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 animate-in slide-in-from-left-4 duration-500">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Head Office</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            12 Furrow Way, Great Glen,<br />Leicester, LE8 9HR
          </p>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=12+Furrow+Way+Great+Glen+Leicester+LE8+9HR" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-blue-800 transition-all shadow-lg"
          >
            Get Directions <ExternalLink size={16} />
          </a>
        </div>

        {/* Mobile Directions Link */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=12+Furrow+Way+Great+Glen+Leicester+LE8+9HR" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 border border-slate-200"
          >
            Open in Google Maps <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
