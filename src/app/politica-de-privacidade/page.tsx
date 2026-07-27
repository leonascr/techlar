import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-brand-bone text-brand-navy">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-32 md:py-40">
        <h1 className="font-display text-4xl md:text-5xl font-semibold mb-8">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-brand max-w-none prose-p:leading-relaxed prose-headings:font-display">
          <p className="text-lg mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">1. Coleta de Informações</h2>
          <p className="mb-6 text-brand-navy/80">
            A Techlar coleta informações pessoais que você nos fornece voluntariamente ao preencher nosso formulário de contato, como nome, e-mail, telefone e detalhes do seu projeto. Essas informações são essenciais para que nossos engenheiros e especialistas possam elaborar um orçamento preciso e entrar em contato com você.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">2. Uso das Informações</h2>
          <p className="mb-6 text-brand-navy/80">
            Utilizamos as informações coletadas exclusivamente para fins de atendimento ao cliente, envio de propostas comerciais e comunicação sobre o andamento do seu projeto arquitetônico. Não compartilhamos, vendemos ou alugamos seus dados pessoais para terceiros.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">3. Proteção de Dados</h2>
          <p className="mb-6 text-brand-navy/80">
            Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Seus dados são tratados com a máxima confidencialidade pela nossa equipe.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
          <p className="mb-6 text-brand-navy/80">
            Nosso site pode utilizar cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Os cookies nos ajudam a entender como os visitantes interagem com nossas páginas, permitindo otimizar o conteúdo e a performance do nosso portal. Você pode desativar o uso de cookies nas configurações do seu navegador.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">5. Direitos do Usuário (LGPD)</h2>
          <p className="mb-6 text-brand-navy/80">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, a correção ou a exclusão de seus dados pessoais armazenados em nosso sistema a qualquer momento. Para exercer esses direitos, basta entrar em contato através dos nossos canais de atendimento.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">6. Contato sobre Privacidade</h2>
          <p className="mb-6 text-brand-navy/80">
            Se você tiver dúvidas, preocupações ou solicitações em relação a esta Política de Privacidade ou ao tratamento dos seus dados, entre em contato conosco através do telefone (61) 3971-2232.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
