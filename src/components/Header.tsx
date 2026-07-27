"use client";

import { useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Soluções", href: "/#solutions" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/#about" },
];

export function Header() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Smooth scroll to section when clicking anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return; // not an anchor link

    const sectionId = href.slice(hashIndex + 1);
    
    if (pathname === "/") {
      // Already on home — just scroll smoothly
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    // If on another page, let Next.js navigate normally (it will land on the hash)
  };

  // Prevent background scrolling when mobile navigation is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "bg-brand-bone/95 backdrop-blur-md border-b border-brand-navy/5 shadow-md" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div 
          className={`flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-300 ease-in-out ${
            isScrolled ? "h-[85px]" : "h-[80px]"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={
                  isScrolled
                    ? "/assets/manual/techlar-logo.png"
                    : "/assets/manual/techlar-logo-footer.png"
                }
                alt="Logo Techlar" 
                width={280} 
                height={80} 
                className="w-auto h-16 md:h-20 transition-all duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:block">
              <ul className="flex gap-6 list-none m-0 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`font-display text-base font-light tracking-[0.5px] py-2 px-1 transition-colors duration-300 ${
                        isScrolled
                          ? "text-brand-navy hover:text-brand-yellow font-medium" 
                          : "text-white/95 hover:text-white/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-between w-7 h-[18px] cursor-pointer z-50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`w-full h-[2.5px] rounded-full transition-all duration-300 origin-center ${
                isMobileMenuOpen 
                  ? "bg-white rotate-45 translate-y-[8px]" 
                  : (isScrolled ? "bg-brand-navy" : "bg-white")
              }`} />
              <span className={`w-full h-[2.5px] rounded-full transition-all duration-300 ${
                isMobileMenuOpen 
                  ? "opacity-0 bg-white" 
                  : (isScrolled ? "bg-brand-navy" : "bg-white")
              }`} />
              <span className={`w-full h-[2.5px] rounded-full transition-all duration-300 origin-center ${
                isMobileMenuOpen 
                  ? "bg-white -rotate-45 -translate-y-[8px]" 
                  : (isScrolled ? "bg-brand-navy" : "bg-white")
              }`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-brand-navy/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 w-[80%] max-w-[320px] h-screen bg-brand-navy z-50 flex flex-col shadow-2xl transition-transform duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Logo */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 shrink-0">
          <Image 
            src="/assets/manual/techlar-logo-footer.png" 
            alt="Techlar" 
            width={160} 
            height={40} 
            className="h-9 w-auto"
            priority
          />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl leading-none text-white/70 hover:text-white font-light focus:outline-none transition-colors"
            aria-label="Fechar menu"
          >
            &times;
          </button>
        </div>

        {/* Mobile links list */}
        <ul className="flex flex-col list-none p-0 mx-0 my-4 px-8 text-left overflow-y-auto flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link 
                href={link.href}
                onClick={(e) => { handleNavClick(e, link.href); setIsMobileMenuOpen(false); }}
                className="flex items-center text-white/90 text-[17px] font-light tracking-[0.5px] py-4 border-b border-white/5 hover:text-brand-yellow transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Call-To-Action */}
        <div className="px-8 pb-10 shrink-0 flex flex-col gap-3">
          <a
            href="https://wa.me/556139712232"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 block w-full bg-brand-yellow text-brand-navy font-semibold text-center py-4 rounded-[10px] hover:bg-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
