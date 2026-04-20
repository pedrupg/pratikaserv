"use client"

import Image from "next/image"
import { WhatsAppIcon, ArrowRightIcon } from "./icons"
import { useReveal } from "@/hooks/use-reveal"

const WA_LINK =
  "https://wa.me/5598913976150?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento.+Como+a+Pratika+pode+me+ajudar%3F"

const stats = [
  { value: "+7", label: "Anos de experiência" },
  { value: "360\u00B0", label: "Soluções integradas" },
  { value: "MA", label: "Todo o estado" },
]

export function Hero() {
  const visualRef = useReveal()

  return (
    <section
      id="inicio"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[6vw] pt-[120px] pb-20 relative overflow-hidden gap-[60px] max-lg:gap-0 max-lg:pt-24 max-lg:pb-[60px] max-lg:min-h-auto"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_70%_50%,rgba(37,168,78,0.15)_0%,transparent_70%),radial-gradient(ellipse_50%_60%_at_20%_80%,rgba(10,77,31,0.3)_0%,transparent_60%),linear-gradient(160deg,var(--background)_0%,var(--card)_100%)]" />
      <div className="hero-grid-lines absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-[1]">
        <div className="inline-flex items-center gap-2 bg-green-bright/12 border border-green-light/25 py-2 px-[18px] rounded-full text-[13px] text-green-light font-medium tracking-wide mb-7">
          <div className="w-[7px] h-[7px] rounded-full bg-green-light animate-[pulse-dot_2s_infinite]" />
          {"Limpeza & Serviços no Maranhão"}
        </div>

        <h1 className="font-heading text-[clamp(34px,5vw,68px)] font-extrabold leading-[1.05] tracking-[-2px] mb-6 text-foreground max-md:text-[clamp(34px,8vw,52px)] max-md:tracking-[-1.5px]">
          {"Soluções Completas"}
          <br />
          {"em "}
          <span className="gradient-text">
            {"Limpeza e"}
            <br />
            {"Infraestrutura"}
          </span>
        </h1>

        <p className="text-[17px] leading-[1.7] text-foreground/60 max-w-[480px] mb-11 font-light max-md:text-[15px] max-md:max-w-full max-md:mb-8">
          {"Eficiência operacional e confiança para impulsionar o seu negócio. Atendemos setor público e privado em todo o estado do Maranhão com excelência e compromisso."}
        </p>

        <div className="flex gap-4 flex-wrap items-center max-md:flex-col max-md:items-stretch">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-br from-green-mid to-green-bright text-foreground py-4 px-8 rounded-full no-underline font-semibold text-[15px] transition-all shadow-[0_4px_20px_rgba(26,122,58,0.4)] hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(26,122,58,0.5)] max-md:justify-center max-md:w-full"
          >
            <WhatsAppIcon />
            Solicitar Orçamento
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2.5 bg-transparent text-foreground py-[15px] px-[30px] rounded-full no-underline font-medium text-[15px] border border-foreground/20 transition-all hover:border-green-light hover:text-green-light max-md:justify-center max-md:w-full"
          >
            {"Conheça a empresa"}
            <ArrowRightIcon />
          </a>
        </div>

        <div className="flex gap-8 mt-14 pt-10 border-t border-foreground/8 max-md:mt-10 max-md:pt-7 max-md:gap-0 max-md:justify-between">
          {stats.map((stat) => (
            <div key={stat.label} className="max-md:flex-1 max-md:text-center">
              <div className="font-heading text-[32px] font-extrabold gradient-text-green max-md:text-[26px] max-sm:text-[22px]">
                {stat.value}
              </div>
              <div className="text-[13px] text-foreground/50 mt-1 max-sm:text-[11px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div
        ref={visualRef}
        className="reveal relative z-[1] grid grid-cols-2 gap-3.5 h-[520px] max-lg:hidden"
      >
        <div className="row-span-2 rounded-[20px] overflow-hidden relative group">
          <Image
            src="/images/hero-team.jpg"
            alt="Equipe Pratika"
            fill
            className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,26,14,0.5)] rounded-[inherit]" />
          <div className="absolute bottom-[-20px] left-[-20px] bg-[rgba(13,26,16,0.9)] backdrop-blur-[20px] border border-green-light/20 rounded-[14px] py-4 px-5 z-[2]">
            <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
              Atuação
            </div>
            <div className="font-heading text-[22px] font-bold text-green-light mt-1">
              Maranhão
            </div>
            <div className="text-xs text-foreground/50 mt-0.5">
              {"Setor Público & Privado"}
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden relative group">
          <Image
            src="/images/about-main.jpg"
            alt="Equipe uniformizada"
            fill
            className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,26,14,0.5)] rounded-[inherit]" />
        </div>
        <div className="rounded-2xl overflow-hidden relative group bg-card">
          <Image
            src="/images/service-specialized.jpg"
            alt="Maranhão"
            fill
            className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,26,14,0.5)] rounded-[inherit]" />
        </div>
      </div>
    </section>
  )
}
