"use client"

import Image from "next/image"
import { SectionTag, SectionTitle } from "./section-tag"
import { useReveal } from "@/hooks/use-reveal"
import { Trash2, Building2, Leaf } from "lucide-react"

const services = [
  {
    icon: Trash2,
    title: "Saneamento e Limpeza",
    desc: "Especialistas em coleta de resíduos (perigosos e não-perigosos), limpeza predial, domiciliar e controle de pragas.",
    image: "/images/service-cleaning.jpg",
    waText: "Quero+saber+mais+sobre+Saneamento+e+Limpeza.",
  },
  {
    icon: Building2,
    title: "Infraestrutura e Obras",
    desc: "Execução de obras de urbanização, construção de edifícios, rodovias e manutenção de redes elétricas.",
    image: "/images/service-infrastructure.jpg",
    waText: "Quero+saber+mais+sobre+Infraestrutura+e+Obras.",
  },
  {
    icon: Leaf,
    title: "Serviços Especializados",
    desc: "Atividades paisagísticas, perfuração de poços e serviços de arquitetura e engenharia sob medida.",
    image: "/images/service-specialized.jpg",
    waText: "Quero+saber+mais+sobre+Servi%C3%A7os+Especializados.",
  },
]

export function Servicos() {
  const headerRef = useReveal()

  return (
    <section
      id="servicos"
      className="py-[100px] px-[6vw] bg-background relative overflow-hidden max-md:py-[72px] max-md:px-[5vw]"
    >
      <div
        ref={headerRef}
        className="reveal flex justify-between items-end mb-14 flex-wrap gap-5 max-md:flex-col max-md:items-start max-md:mb-9"
      >
        <div>
          <SectionTag>O que fazemos</SectionTag>
          <SectionTitle>
            {"Veja o que podemos"}
            <br />
            {"fazer pelo seu negócio"}
          </SectionTitle>
        </div>
        <a
          href="https://wa.me/5598913976150?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Pratika."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-transparent text-foreground py-[15px] px-[30px] rounded-full no-underline font-medium text-[15px] border border-foreground/20 transition-all hover:border-green-light hover:text-green-light"
        >
          {"Ver todos os serviços \u2192"}
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-md:gap-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  image,
  waText,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  image: string
  waText: string
}) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal bg-card border border-foreground/6 rounded-[20px] overflow-hidden transition-all duration-[400ms] cursor-default relative group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-green-mid before:to-green-light before:scale-x-0 before:transition-transform before:duration-300 before:origin-left hover:-translate-y-2 hover:border-green-light/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:before:scale-x-100"
    >
      <div className="h-[220px] overflow-hidden relative max-md:h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(13,26,16,0.8)]" />
      </div>
      <div className="p-7">
        <div className="w-[46px] h-[46px] bg-gradient-to-br from-green-mid to-green-bright rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-foreground/55 leading-[1.7] font-light">
          {desc}
        </p>
        <a
          href={`https://wa.me/5598913976150?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-green-light text-sm font-medium no-underline mt-5 transition-all hover:gap-2.5"
        >
          {"Solicitar orçamento \u2192"}
        </a>
      </div>
    </div>
  )
}
