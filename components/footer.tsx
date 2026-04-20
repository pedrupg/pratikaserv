const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Nossa equipe" },
  { href: "#contato", label: "Contato" },
]

const serviceLinks = [
  { href: "#servicos", label: "Saneamento e Limpeza" },
  { href: "#servicos", label: "Infraestrutura e Obras" },
  { href: "#servicos", label: "Serviços Especializados" },
  { href: "#contato", label: "Solicitar Orçamento" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/7 pt-[60px] pb-10 px-[6vw] max-md:pt-12 max-md:pb-8 max-md:px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-[60px] pb-10 border-b border-foreground/7 mb-8 max-md:gap-8">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-[34px] h-[34px] bg-gold rounded-md flex items-center justify-center font-heading font-extrabold text-lg text-green-deep">
              K
            </div>
            <span className="font-heading font-bold text-[17px] text-foreground">
              Pratika Limpeza e Serviços
            </span>
          </div>
          <p className="text-sm text-foreground/40 leading-[1.7] max-w-[280px]">
            {"Parceiro estratégico em limpeza, infraestrutura e serviços especializados em todo o Maranhão desde 2017."}
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="font-heading text-[15px] font-bold text-foreground mb-5">
            Navegação
          </h4>
          <ul className="list-none flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  className="no-underline text-foreground/40 text-sm transition-colors hover:text-green-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="font-heading text-[15px] font-bold text-foreground mb-5">
            Serviços
          </h4>
          <ul className="list-none flex flex-col gap-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="no-underline text-foreground/40 text-sm transition-colors hover:text-green-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-3 max-md:flex-col max-md:items-start max-md:gap-2">
        <div className="text-[13px] text-foreground/30">
          {"© 2025 "}
          <span className="text-green-light">Pratika Limpeza e Serviços Ltda</span>
          {". Todos os direitos reservados."}
        </div>
        <div className="text-[13px] text-foreground/30">
          {"CNPJ regularizado \u00B7 Urbano Santos \u2013 MA"}
        </div>
      </div>
    </footer>
  )
}
