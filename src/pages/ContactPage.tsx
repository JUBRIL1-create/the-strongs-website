import React, { useState } from 'react';
import { Mail, Instagram, Youtube, Linkedin, Send, MapPin, Check, Copy, Info } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SEO } from '../components/SEO';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build standard mailto link to guarantee direct message delivery without fake backend API calls
    const mailtoSubject = encodeURIComponent(`[Website Inquiry] ${formData.subject || 'General Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-20">
      <SEO
        title="Contact Us"
        description="Get in touch with THE STRONGS. Email: thestrongsinitiatives@gmail.com."
        slug="contact"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold text-emerald-700 tracking-widest uppercase">
            REACH OUT
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            REACH OUT TO US
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We welcome inquiries regarding partnerships, research co-development, media, and general information.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Box */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                OFFICIAL EMAIL ADDRESS
              </span>
              <div className="flex items-center justify-between gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-sm font-bold text-slate-900 select-all break-all">
                  {SITE_CONFIG.contact.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs text-emerald-700 font-semibold">Email copied to clipboard!</p>
              )}
            </div>

            {/* Location & Context */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-2 text-slate-700">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Founding Location</span>
              </div>
              <p className="text-sm text-slate-600 pl-6">Lagos State, Nigeria</p>
            </div>

            {/* Social Channels */}
            <div className="p-8 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                OFFICIAL SOCIAL CHANNELS
              </span>
              <div className="space-y-2 text-xs">
                <a
                  href={SITE_CONFIG.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 transition-colors border border-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span className="font-semibold">Instagram</span>
                  </div>
                  <span className="text-slate-500">{SITE_CONFIG.social.instagram.handle}</span>
                </a>

                <a
                  href={SITE_CONFIG.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 transition-colors border border-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Youtube className="w-4 h-4 text-red-600" />
                    <span className="font-semibold">YouTube</span>
                  </div>
                  <span className="text-slate-500">{SITE_CONFIG.social.youtube.channel}</span>
                </a>

                <a
                  href={SITE_CONFIG.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 transition-colors border border-slate-200"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">LinkedIn</span>
                  </div>
                  <span className="text-slate-500">{SITE_CONFIG.social.linkedin.handle}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
              
              <div className="space-y-1">
                <h2 className="font-display font-bold text-2xl text-slate-900">
                  Send an Official Inquiry
                </h2>
                <p className="text-xs text-slate-500">
                  Submitting this form launches your default email application directly with pre-populated details, ensuring authentic transmission to our email inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Dr. Amina Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., amina@institution.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g., Partnership Inquiry / StrongsConnect Research"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, organisation, or partnership interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Direct Email Fallback Mechanism: Clicking Send launches your mail application to send to <strong>thestrongsinitiatives@gmail.com</strong> directly.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via Email</span>
                </button>

                {formSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your mail client has been opened to dispatch your message. Thank you for reaching out to THE STRONGS!</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
