"use client"

import Image from "next/image"
import { SectionTag, SectionTitle } from "./section-tag"
import { useReveal } from "@/hooks/use-reveal"
import { Settings, TrendingUp, Handshake, Wrench } from "lucide-react"

const pillars = [
  {
    icon: Settings,
    name: "Soluções Práticas",
    desc: "Respostas rápidas e eficientes",
  },
  {
    icon: TrendingUp,
    name: "Eficiência Operacional",
    desc: "Processos otimizados",
  },
  {
    icon: Handshake,
    name: "Compromisso Real",
    desc: "Parceria de longo prazo",
  },
  {
    icon: Wrench,
    name: "Multi Serviços",
    desc: "Tudo em um só lugar",
  },
]

export function Sobre() {
  const imgsRef = useReveal()
  const contentRef = useReveal()

  return (
    <section
      id="sobre"
      className="py-[100px] px-[6vw] bg-card relative overflow-hidden max-md:py-[72px] max-md:px-[5vw]"
    >
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,168,78,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-lg:gap-10">
        {/* Imagens */}
        <div ref={imgsRef} className="reveal grid grid-cols-2 gap-3.5 relative">
          <div className="col-span-2 h-[280px] rounded-2xl overflow-hidden relative max-md:h-[220px] max-sm:h-[200px]">
            <Image
              src="/images/about-main.jpg"
              alt="Pratika"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,26,14,0.6)]" />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-green-mid to-green-bright rounded-tl-2xl py-5 px-6">
              <div className="font-heading text-4xl font-extrabold text-foreground leading-none">
                2017
              </div>
              <div className="text-xs text-foreground/80 mt-1">Fundação</div>
            </div>
          </div>
          <div className="h-[240px] rounded-2xl overflow-hidden relative max-md:h-[180px] max-sm:h-[160px]">
            <Image
              src="/images/service-cleaning.jpg"
              alt="Serviços"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,26,14,0.6)]" />
          </div>
          <div className="h-[240px] rounded-2xl overflow-hidden relative max-md:h-[180px] max-sm:h-[160px]">
            <Image
              src="/images/service-infrastructure.jpg"
              alt="Especialização"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,26,14,0.6)]" />
          </div>
        </div>

        {/* Conteúdo */}
        <div ref={contentRef} className="reveal">
          <SectionTag>Quem Somos</SectionTag>
          <SectionTitle className="mb-6">
            {"Tradição e Inovação"}
            <br />
            {"desde "}
            <span className="text-green-light">2017</span>
          </SectionTitle>

          <p className="text-foreground/60 text-base leading-[1.8] mb-5 font-light">
            {"A "}
            <strong className="text-foreground font-medium">
              Pratika Limpeza e Serviços
            </strong>
            {" consolidou sua trajetória através de um compromisso inabalável com a qualidade e a transparência. Com sede em Urbano Santos \u2013 MA, nascemos com o propósito de oferecer soluções integradas."}
          </p>
          <p className="text-foreground/60 text-base leading-[1.8] mb-5 font-light">
            {"Mais do que prestadores de serviço, somos "}
            <strong className="text-foreground font-medium">
              parceiros estratégicos
            </strong>
            {". Contamos com uma equipe altamente qualificada e uniformizada, pronta para atuar em desafios que vão da conservação predial à engenharia civil."}
          </p>

          <div className="grid grid-cols-2 gap-3.5 mt-9 max-sm:grid-cols-1">
            {pillars.map((p) => (
              <div
                key={p.name}
                className="bg-green-bright/7 border border-green-light/14 rounded-xl p-[18px] transition-all hover:bg-green-bright/12 hover:border-green-light/30 hover:-translate-y-[3px] max-md:p-3.5"
              >
                <p.icon className="w-[22px] h-[22px] text-green-light mb-2.5" />
                <div className="font-semibold text-sm text-green-light">
                  {p.name}
                </div>
                <div className="text-[13px] text-foreground/50 mt-1">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
