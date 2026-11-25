import Link from 'next/link';

export default function SiteNav() {
  return (
    <header className="w-full bg-[#fefae7] border-b border-[#3b001b]/10 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-['Oswald'] text-2xl font-bold tracking-tight text-[#3b001b] uppercase">
            AEV STUDIOS
          </span>
          <span className="text-xs bg-[#c0ecbf] text-[#144d18] px-2.5 py-0.5 rounded-full font-mono font-medium">
            AI SYSTEMS
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-sm font-semibold tracking-wide text-[#3b001b]/80 hover:text-[#3b001b] transition uppercase"
          >
            Services
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-semibold tracking-wide text-[#3b001b]/80 hover:text-[#3b001b] transition uppercase"
          >
            Solutions
          </Link>
          <Link
            href="/work"
            className="text-sm font-semibold tracking-wide text-[#3b001b]/80 hover:text-[#3b001b] transition uppercase"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold tracking-wide text-[#3b001b]/80 hover:text-[#3b001b] transition uppercase"
          >
            About
          </Link>
          <Link
            href="/process"
            className="text-sm font-semibold tracking-wide text-[#3b001b]/80 hover:text-[#3b001b] transition uppercase"
          >
            Process
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#3b001b] text-[#fefae7] font-['Oswald'] tracking-wide text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#520025] transition shadow-sm"
          >
            Start a Project ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
