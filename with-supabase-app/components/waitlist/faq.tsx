export function FAQ() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
      
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">O que é o Wait.bio?</h3>
          <p className="text-muted-foreground">
            Wait.bio é uma plataforma que permite criar uma página de links personalizada para compartilhar todo seu conteúdo em um único lugar.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">Como funciona a lista de espera?</h3>
          <p className="text-muted-foreground">
            Ao se inscrever na lista de espera, você garante acesso antecipado à plataforma quando ela for lançada, além de benefícios exclusivos.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">Quais são os benefícios de early adopter?</h3>
          <p className="text-muted-foreground">
            Early adopters recebem 12 meses grátis do plano PRO, acesso a temas exclusivos e suporte prioritário.
          </p>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-semibold mb-2">Quando a plataforma será lançada?</h3>
          <p className="text-muted-foreground">
            Estamos trabalhando duro para lançar em breve. Os inscritos na lista de espera serão os primeiros a saber!
          </p>
        </div>
      </div>
    </section>
  )
}
