"use client"

import Image from "next/image"
import { SectionTag, SectionTitle } from "./section-tag"
import { useReveal } from "@/hooks/use-reveal"

const photos = [
  { src: "/images/hero-team.jpg", alt: "Equipe Pratika", main: true },
  { src: "/images/team-uniforms.jpg", alt: "Uniformes" },
  { src: "/images/about-main.jpg", alt: "Pratika logo" },
  { src: "/images/team-work.jpg", alt: "360 graus" },
  { src: "/images/service-specialized.jpg", alt: "Maranhão" },
]

export function Equipe() {
  const headerRef = useReveal()
  const galleryRef = useReveal()

  return (
    <section
      id="equipe"
      className="py-[100px] px-[6vw] bg-card max-md:py-[72px] max-md:px-[5vw]"
    >
      <div ref={headerRef} className="reveal text-center mb-[60px]">
        <SectionTag centered>Nossa equipe</SectionTag>
        <SectionTitle className="mb-4">
          Pessoas que fazem a diferença
        </SectionTitle>
        <p className="text-foreground/50 text-base max-w-[500px] mx-auto">
          Equipe uniformizada, qualificada e pronta para qualquer desafio
        </p>
      </div>

      <div
        ref={galleryRef}
        className="reveal grid gap-4 max-sm:grid-cols-1 max-sm:auto-rows-[220px] sm:grid-cols-2 sm:grid-rows-[280px_280px] lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[280px_280px] max-md:gap-2.5"
      >
        {photos.map((photo, i) => (
          <div
            key={photo.alt}
            className={`rounded-[18px] overflow-hidden relative group max-md:rounded-[14px] ${
              i === 0
                ? "sm:row-span-2 lg:row-span-2 max-sm:h-[240px]"
                : "max-sm:h-[220px]"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,26,14,0.7)]" />
          </div>
        ))}
      </div>
    </section>
  )
}
