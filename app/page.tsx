"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Sobre } from "@/components/sobre"
import { Servicos } from "@/components/servicos"
import { Diferenciais } from "@/components/diferenciais"
import { Equipe } from "@/components/equipe"
import { Contato } from "@/components/contato"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { useRevealAll } from "@/hooks/use-reveal"

export default function Home() {
  useRevealAll()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Equipe />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
