"use client"

import { useState, useEffect } from "react"
import { WhatsAppIcon } from "./icons"

const WA_LINK =
  "https://wa.me/5598913976150?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+com+a+Pratika+Limpeza+e+Servi%C3%A7os."

export function WhatsAppFloat() {
  const [bubbleVisible, setBubbleVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbleVisible(true)
      const hideTimer = setTimeout(() => setBubbleVisible(false), 6000)
      return () => clearTimeout(hideTimer)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-3 max-md:bottom-5 max-md:right-5 max-sm:bottom-4 max-sm:right-4">
      {/* Bubble */}
      {bubbleVisible && (
        <div className="bg-foreground rounded-2xl py-3.5 px-[18px] max-w-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-sm text-background leading-relaxed relative animate-[fadeIn_0.3s_ease] max-md:max-w-[220px] max-md:text-[13px] max-sm:max-w-[200px] max-sm:py-3 max-sm:px-3.5">
          <strong className="block font-semibold mb-1 text-[#128C7E]">
            {"Pratika Limpeza"}
          </strong>
          {"Olá! Como podemos ajudar? Solicite seu orçamento agora."}
          <div className="absolute bottom-[-8px] right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-foreground" />
        </div>
      )}

      {/* Botão */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        title="Falar no WhatsApp"
        className="w-[60px] h-[60px] bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center no-underline shadow-[0_6px_24px_rgba(37,211,102,0.5)] transition-all relative hover:scale-110 hover:shadow-[0_10px_32px_rgba(37,211,102,0.6)] max-sm:w-[54px] max-sm:h-[54px]"
        onMouseEnter={() => setBubbleVisible(true)}
        onMouseLeave={() => setTimeout(() => setBubbleVisible(false), 2000)}
      >
        <div className="absolute top-0 right-0 w-4 h-4 bg-gold rounded-full border-2 border-background animate-[ping-anim_2s_infinite]" />
        <WhatsAppIcon className="w-[30px] h-[30px] text-foreground" />
      </a>
    </div>
  )
}
