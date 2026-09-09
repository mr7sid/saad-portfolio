import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#232936] bg-[#090B0F]/88 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#"
          onClick={closeMenu}
          className="group inline-flex items-center gap-2"
        >
          <span className="text-xl font-semibold tracking-[-0.025em] text-[#F5F7FA] sm:text-2xl">
  Muhammad Saad
</span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#6C7CFF] transition-transform duration-300 group-hover:scale-125" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-[#9CA3AF] transition-colors duration-300 hover:text-[#F5F7FA]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-[#2A3140] bg-[#12161D] px-4 py-2.5 text-sm font-semibold text-[#F5F7FA] transition-all duration-300 hover:border-[#6C7CFF]/60 hover:bg-[#171B23]"
          >
            Let&apos;s Talk

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#232936] bg-[#12161D] text-[#F5F7FA] transition hover:border-[#374151] hover:bg-[#171B23] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#232936] bg-[#090B0F]/98 px-5 py-5 backdrop-blur-xl">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-[#9CA3AF] transition hover:bg-[#12161D] hover:text-[#F5F7FA]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#6C7CFF] px-5 py-3.5 font-semibold text-white transition hover:bg-[#7B89FF]"
            >
              Let&apos;s Talk
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}