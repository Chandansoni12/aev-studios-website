import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#210d20] text-[#fefae7] pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#fefae7]/10">
          <div className="md:col-span-2">
            <h2 className="font-['Oswald'] text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#fefae7]">
              AEV STUDIOS
            </h2>
            <p className="mt-3 font-['Oswald'] text-lg text-[#fefae7]/80 uppercase tracking-widest">
              Automate. Elevate. Victory.
            </p>
            <p className="mt-4 text-sm text-[#fefae7]/60 max-w-md leading-relaxed">
              We design and build intelligent growth systems that connect your operations, automate repetitive work, and create scalable digital infrastructure.
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 bg-[#c0ecbf]/20 text-[#c0ecbf] text-xs px-3 py-1 rounded-full font-mono">
                ● AVAILABLE FOR NEW ENGAGEMENTS
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-['Oswald'] text-sm tracking-wider uppercase text-[#fefae7]/90 mb-4 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#fefae7]/70">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition">Solutions</Link></li>
              <li><Link href="/work" className="hover:text-white transition">Work & Prototypes</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/process" className="hover:text-white transition">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Oswald'] text-sm tracking-wider uppercase text-[#fefae7]/90 mb-4 font-semibold">
              Pillars
            </h4>
            <ul className="space-y-2.5 text-sm text-[#fefae7]/70">
              <li><Link href="/services#ai-automation" className="hover:text-white transition">AI Workflows & Automation</Link></li>
              <li><Link href="/services#growth-os" className="hover:text-white transition">Growth Operating Systems</Link></li>
              <li><Link href="/services#web-experiences" className="hover:text-white transition">Custom Web Experiences</Link></li>
              <li><Link href="/services#crm-lead-systems" className="hover:text-white transition">CRM & Lead Infrastructure</Link></li>
              <li><Link href="/services#ai-agents" className="hover:text-white transition">AI Agents & Assistance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fefae7]/40">
          <p>© 2026 AEV STUDIOS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6 font-mono">
            <span>LINKEDIN</span>
            <span>INSTAGRAM</span>
            <span>YOUTUBE</span>
            <span>HELLO@AEVSTUDIOS.COM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
