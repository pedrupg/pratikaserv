"use client"

import { useState, useEffect } from "react"
import { WhatsAppIcon } from "./icons"

const WA_LINK =
  "https://wa.me/5598913976150?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento+para+os+servi%C3%A7os+da+Pratika."

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between backdrop-blur-[16px] border-b border-green-light/12 transition-all duration-300 ${
        scrolled
          ? "py-3 px-[5vw] bg-[rgba(10,26,14,0.97)]"
          : "py-[18px] px-[6vw] bg-[rgba(10,26,14,0.85)]"
      }`}
    >
      <a href="#inicio" className="flex items-center gap-2.5 no-underline">
        <div className="w-9 h-9 bg-gold rounded-md flex items-center justify-center font-heading font-extrabold text-xl text-green-deep">
          K
        </div>
        <span className="font-heading font-bold text-lg text-foreground tracking-tight">
          Pratika<span className="text-green-light">Serv</span>
        </span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-9 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="no-underline text-foreground/70 text-sm font-medium uppercase tracking-wider relative hover:text-foreground transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-green-bright after:to-green-light after:scale-x-0 after:transition-transform after:duration-250 after:rounded-sm hover:after:scale-x-100"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 bg-gradient-to-br from-green-bright to-green-light text-background px-[22px] py-2.5 rounded-full font-bold text-[13px] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,168,78,0.4)]"
      >
        <WhatsAppIcon className="w-4 h-4" />
        Falar no WhatsApp
      </a>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] cursor-pointer z-[1001] bg-transparent border-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span
          className={`w-6 h-0.5 bg-foreground rounded-sm transition-all duration-300 ${
            menuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-foreground rounded-sm transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-foreground rounded-sm transition-all duration-300 ${
            menuOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[rgba(10,26,14,0.98)] backdrop-blur-[24px] z-[999] flex flex-col items-center justify-center">
          <ul className="list-none flex flex-col w-full">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-[18px] px-8 text-base uppercase tracking-[1.5px] text-center text-foreground/70 no-underline border-b border-green-light/8 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-6 px-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-br from-green-mid to-green-bright text-foreground py-4 px-6 rounded-full no-underline font-bold text-[15px]"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
