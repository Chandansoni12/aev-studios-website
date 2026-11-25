'use client';

import { useState } from 'react';
import SiteNav from '@/components/shared/SiteNav';
import SiteFooter from '@/components/shared/SiteFooter';
import { AEV_CONTENT } from '@/lib/content/aev-content';

export default function ContactPage() {
  const { contact } = AEV_CONTENT;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg('');
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('_subject', 'New AEV Studios Project Enquiry');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
      const res = await fetch('https://formsubmit.co/ajax/aevstudio.mail9@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      form.reset();
    } catch {
      setErrorMsg('Could not send automatically. Opening your email client as backup...');
      const name = String(formData.get('name') || '');
      const email = String(formData.get('email') || '');
      const company = String(formData.get('company') || '');
      const service = String(formData.get('service') || '');
      const budget = String(formData.get('budget') || '');
      const message = String(formData.get('message') || '');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\nBudget: ${budget}\n\n${message}`
      );
      window.location.href = `mailto:aevstudio.mail9@gmail.com?subject=${encodeURIComponent('New AEV Studios Project Enquiry')}&body=${body}`;
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fefae7] text-[#3b001b] flex flex-col font-sans">
      <SiteNav />

      {/* Hero */}
      <section className="pt-24 pb-12 px-6 max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#c0ecbf] text-[#144d18] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Start a Project
        </span>
        <h1 className="font-['Oswald'] text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#3b001b]">
          Tell Us What You<br />Want To Build.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#3b001b]/70 max-w-2xl mx-auto leading-relaxed">
          {contact.description}
        </p>
      </section>

      {/* Form Container */}
      <section className="py-8 px-6 max-w-4xl mx-auto w-full mb-24">
        <div className="bg-white border-2 border-[#3b001b] rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#3b001b]">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c0ecbf] text-[#144d18] text-3xl flex items-center justify-center mx-auto">
                ✓
              </div>
              <h3 className="font-['Oswald'] text-3xl font-bold uppercase tracking-wide text-[#3b001b]">
                Enquiry Received!
              </h3>
              <p className="text-[#3b001b]/70 max-w-md mx-auto leading-relaxed">
                {contact.form.successMessage}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 font-['Oswald'] text-xs uppercase tracking-widest text-[#f15a24] font-bold underline"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['Oswald'] uppercase text-xs font-bold tracking-wider text-[#3b001b]/80 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#fefae7]/50 border-2 border-[#3b001b]/20 rounded-xl px-4 py-3 text-sm text-[#3b001b] focus:outline-none focus:border-[#3b001b]"
                  />
                </div>

                <div>
                  <label className="block font-['Oswald'] uppercase text-xs font-bold tracking-wider text-[#3b001b]/80 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[#fefae7]/50 border-2 border-[#3b001b]/20 rounded-xl px-4 py-3 text-sm text-[#3b001b] focus:outline-none focus:border-[#3b001b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['Oswald'] uppercase text-xs font-bold tracking-wider text-[#3b001b]/80 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Acme Corp"
                    className="w-full bg-[#fefae7]/50 border-2 border-[#3b001b]/20 rounded-xl px-4 py-3 text-sm text-[#3b001b] focus:outline-none focus:border-[#3b001b]"
                  />
                </div>

                <div>
                  <label className="block font-['Oswald'] uppercase text-xs font-bold tracking-wider text-[#3b001b]/80 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-[#fefae7]/50 border-2 border-[#3b001b]/20 rounded-xl px-4 py-3 text-sm text-[#3b001b] focus:outline-none focus:border-[#3b001b]"
                  >
                    <option value="">Select a system pillar...</option>
                    {contact.form.services.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-['Oswald'] uppercase text-xs font-bold tracking-wider text-[#3b001b]/80 mb-2">
                  Estimated Project Budget
                </label>
                <select
                  name="budget"
                  className="w-full bg-[#fefae7]/50 border-2 border-[#3b001b]/20 rounded-xl px-4 py-3 text-sm text-[#3b001b] focus:outline-none focus:border-[#3b001b]"
                >
                  <option value="">Select a budget range...</option>
                  {contact.form.budgets.map((b, idx) => (
                    <option key={idx} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-['Oswald'] uppercase text-xs font-bold tracking-wider text-[#3b001b]/80 mb-2">
                  Project Description & Goals *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what bottlenecks, workflows, or digital systems you want to build or automate..."
                  className="w-full bg-[#fefae7]/50 border-2 border-[#3b001b]/20 rounded-xl px-4 py-3 text-sm text-[#3b001b] focus:outline-none focus:border-[#3b001b]"
                ></textarea>
              </div>

              {errorMsg && (
                <p className="text-sm text-[#f15a24] font-medium">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#3b001b] text-[#fefae7] font-['Oswald'] tracking-wider uppercase text-base font-bold py-4 rounded-xl hover:bg-[#520025] transition shadow-md disabled:opacity-60"
              >
                {sending ? 'Sending Enquiry...' : contact.form.submitButton}
              </button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
