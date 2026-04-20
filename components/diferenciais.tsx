"use client"

import { SectionTag, SectionTitle } from "./section-tag"
import { useReveal } from "@/hooks/use-reveal"
import { Scale, Target, Sprout, Trophy } from "lucide-react"

const items = [
  {
    icon: Scale,
    title: "Segurança Jurídica",
    desc: "Empresa com situação cadastral ativa e total regularidade fiscal. Operamos com transparência e conformidade.",
  },
  {
    icon: Target,
    title: "Capacidade Técnica",
    desc: "Vasta gama de atividades autorizadas (CNAEs), permitindo atender demandas complexas em um único lugar.",
  },
  {
    icon: Sprout,
    title: "Sustentabilidade",
    desc: "Foco no gerenciamento correto de resíduos e preservação ambiental com responsabilidade socioambiental.",
  },
  {
    icon: Trophy,
    title: "+7 Anos de Mercado",
    desc: "Experiência comprovada no setor público e privado em todo o estado do Maranhão desde 2017.",
  },
]

export function Diferenciais() {
  const headerRef = useReveal()

  return (
    <section
      id="diferenciais"
      className="py-[100px] px-[6vw] bg-gradient-to-br from-green-deep to-card relative overflow-hidden max-md:py-[72px] max-md:px-[5vw]"
    >
      <div className="cross-pattern absolute inset-0" />

      <div ref={headerRef} className="reveal text-center mb-14 relative">
        <SectionTag centered>Por que nos escolher</SectionTag>
        <SectionTitle>Nossos Diferenciais</SectionTitle>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative max-md:gap-3 max-sm:grid-cols-1">
        {items.map((item) => (
          <DiferencialCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

function DiferencialCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
}) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal text-center p-10 bg-foreground/4 border border-foreground/10 rounded-[20px] transition-all hover:bg-green-light/10 hover:border-green-light/30 hover:-translate-y-1.5 max-md:p-7 max-sm:text-left max-sm:flex max-sm:gap-4 max-sm:items-start max-sm:p-6"
    >
      <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-green-bright/20 to-green-light/10 border border-green-light/25 rounded-[18px] flex items-center justify-center max-md:w-[52px] max-md:h-[52px] max-sm:w-12 max-sm:h-12 max-sm:min-w-12 max-sm:mx-0 max-sm:mb-0 max-sm:rounded-[14px]">
        <Icon className="w-7 h-7 text-green-light max-md:w-[22px] max-md:h-[22px] max-sm:w-5 max-sm:h-5" />
      </div>
      <div>
        <h3 className="font-heading text-[17px] font-bold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-foreground/55 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
