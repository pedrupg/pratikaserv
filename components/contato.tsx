"use client"

import { useState } from "react"
import { SectionTag, SectionTitle } from "./section-tag"
import { WhatsAppIcon } from "./icons"
import { useReveal } from "@/hooks/use-reveal"
import { Smartphone, Phone, Mail, MapPin } from "lucide-react"

const WA_LINK =
  "https://wa.me/5598913976150?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+com+a+Pratika+Limpeza+e+Servi%C3%A7os."

const contactItems = [
  { icon: Smartphone, label: "WhatsApp", value: "(98) 9139-7615" },
  { icon: Phone, label: "Telefone", value: "(98) 9140-8887" },
  { icon: Mail, label: "E-mail", value: "pratikalimpezaeservicos@gmail.com" },
  { icon: MapPin, label: "Endereço", value: "Rodovia MA 225, S/N \u2013 Urbano Santos, MA" },
]

const serviceOptions = [
  "Saneamento e Limpeza",
  "Infraestrutura e Obras",
  "Serviços Especializados",
  "Múltiplos serviços",
  "Outro",
]

export function Contato() {
  const infoRef = useReveal()
  const formRef = useReveal()
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "",
    mensagem: "",
  })

  function handleSubmit() {
    const nome = form.nome.trim() || "Cliente"
    const tel = form.telefone.trim() || "não informado"
    const servico = form.servico || "não especificado"
    const msg = form.mensagem.trim()

    const texto = encodeURIComponent(
      `Olá! Meu nome é ${nome}.\nTelefone: ${tel}\nServiço de interesse: ${servico}${msg ? `\nMensagem: ${msg}` : ""}`
    )
    window.open(`https://wa.me/5598913976150?text=${texto}`, "_blank")
  }

  return (
    <section
      id="contato"
      className="py-[100px] px-[6vw] bg-background relative overflow-hidden max-md:py-[72px] max-md:px-[5vw]"
    >
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(37,168,78,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative max-lg:gap-12">
        {/* Informações */}
        <div ref={infoRef} className="reveal">
          <SectionTag>Entre em contato</SectionTag>
          <SectionTitle className="mb-6">
            {"Pronto para começar"}
            <br />
            {"uma "}
            <span className="text-green-light">parceria?</span>
          </SectionTitle>
          <p className="text-foreground/55 text-base leading-[1.8] mb-10 font-light">
            {"Entre em contato conosco e descubra como a Pratika pode transformar a gestão de limpeza e serviços do seu negócio."}
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 py-4 px-5 bg-foreground/4 border border-foreground/7 rounded-[14px] transition-all hover:border-green-light/20 hover:bg-green-bright/7"
              >
                <div className="w-[42px] h-[42px] min-w-[42px] bg-gradient-to-br from-green-mid to-green-bright rounded-[11px] flex items-center justify-center">
                  <item.icon className="w-[18px] h-[18px] text-foreground" />
                </div>
                <div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-[15px] text-foreground font-medium mt-0.5">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-br from-green-mid to-green-bright text-foreground py-4 px-8 rounded-full no-underline font-semibold text-[15px] transition-all shadow-[0_4px_20px_rgba(26,122,58,0.4)] hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(26,122,58,0.5)]"
          >
            <WhatsAppIcon />
            Falar agora no WhatsApp
          </a>
        </div>

        {/* Formulário */}
        <div
          ref={formRef}
          className="reveal bg-card border border-foreground/8 rounded-3xl p-10 max-md:p-7 max-sm:p-[18px] max-sm:rounded-[20px]"
        >
          <div className="font-heading text-[22px] font-bold mb-7 text-foreground">
            Solicite um orçamento
          </div>

          <div className="flex flex-col gap-[18px]">
            <div>
              <label className="block text-[13px] font-medium text-foreground/60 mb-2 tracking-wider">
                Nome completo
              </label>
              <input
                type="text"
                placeholder="Seu nome ou empresa"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full py-[13px] px-4 bg-foreground/5 border border-foreground/10 rounded-[10px] text-foreground text-[15px] outline-none transition-all focus:border-green-bright focus:bg-green-bright/7 placeholder:text-foreground/25 max-sm:text-base"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-foreground/60 mb-2 tracking-wider">
                {"Telefone / WhatsApp"}
              </label>
              <input
                type="tel"
                placeholder="(98) 9xxxx-xxxx"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="w-full py-[13px] px-4 bg-foreground/5 border border-foreground/10 rounded-[10px] text-foreground text-[15px] outline-none transition-all focus:border-green-bright focus:bg-green-bright/7 placeholder:text-foreground/25 max-sm:text-base"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-foreground/60 mb-2 tracking-wider">
                Serviço de interesse
              </label>
              <select
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                className="w-full py-[13px] px-4 bg-foreground/5 border border-foreground/10 rounded-[10px] text-foreground text-[15px] outline-none transition-all focus:border-green-bright focus:bg-green-bright/7 appearance-none"
              >
                <option value="" className="bg-card">
                  Selecione um serviço
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-card">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-medium text-foreground/60 mb-2 tracking-wider">
                Mensagem
              </label>
              <textarea
                placeholder="Descreva brevemente sua necessidade..."
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full py-[13px] px-4 bg-foreground/5 border border-foreground/10 rounded-[10px] text-foreground text-[15px] outline-none transition-all focus:border-green-bright focus:bg-green-bright/7 placeholder:text-foreground/25 resize-none h-[110px] max-sm:text-base"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-gradient-to-br from-green-mid to-green-bright border-none rounded-xl text-foreground text-[15px] font-semibold cursor-pointer transition-all mt-2 flex items-center justify-center gap-2.5 hover:shadow-[0_8px_24px_rgba(26,122,58,0.5)] hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Enviar via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
