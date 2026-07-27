import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-brand-bone text-brand-navy">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-32 md:py-40">
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-8">
          Termos de Uso
        </h1>
        
        <div className="prose prose-brand max-w-none prose-p:leading-relaxed prose-headings:font-display">
          <p className="text-lg mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Aceitação dos Termos</h2>
          <p className="mb-6 text-brand-navy/80">
            Ao acessar e utilizar o site da Techlar, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Uso do Site</h2>
          <p className="mb-6 text-brand-navy/80">
            Todo o conteúdo presente neste site, incluindo textos, imagens de projetos, logotipos e gráficos, é propriedade exclusiva da Techlar e está protegido pelas leis de direitos autorais. O uso não autorizado de qualquer material deste site é estritamente proibido.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Serviços Oferecidos</h2>
          <p className="mb-6 text-brand-navy/80">
            A Techlar oferece serviços de projeto, venda e instalação de pergolados, toldos, ombrelones e coberturas fixas. As informações sobre produtos e serviços no site estão sujeitas a alterações sem aviso prévio. Os orçamentos fornecidos via formulário ou WhatsApp têm validade conforme especificado no momento do atendimento.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Limitação de Responsabilidade</h2>
          <p className="mb-6 text-brand-navy/80">
            As imagens do nosso portfólio são de projetos reais realizados pela nossa equipe. No entanto, as condições de instalação, iluminação e características do seu espaço podem fazer com que o resultado final do seu projeto sofra variações estéticas ou estruturais necessárias para garantir a segurança.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Modificações dos Termos</h2>
          <p className="mb-6 text-brand-navy/80">
            A Techlar reserva-se o direito de modificar estes Termos de Uso a qualquer momento. Recomendamos que você revise esta página periodicamente para estar ciente de quaisquer alterações.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contato</h2>
          <p className="mb-6 text-brand-navy/80">
            Para dúvidas referentes a estes Termos de Uso, entre em contato conosco através do telefone (61) 3971-2232.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
