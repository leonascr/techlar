import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/assets/manual/techlar-logo-footer.png"
            alt="Logo Techlar"
            width={280}
            height={80}
            className="w-auto h-16 md:h-20 mb-2"
          />
          <p className="text-white/60 text-sm leading-relaxed max-w-[30ch]">
            Especialistas na venda e instalação de estruturas arquitetônicas para áreas externas. Atendimento direto e personalizado para o seu projeto.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-medium mb-2">A Empresa</h4>

          <Link href="#projetos" className="text-white/60 hover:text-brand-yellow text-sm transition-colors">Projetos Residenciais</Link>
          <Link href="#projetos" className="text-white/60 hover:text-brand-yellow text-sm transition-colors">Projetos Comerciais</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display font-medium mb-2">Conecte-se</h4>
          <div className="flex items-center gap-4 text-white/60">
            <a href="https://instagram.com/techlar_" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors"><InstagramLogo size={24} /></a>
            <a href="mailto:techlardf@gmail.com" className="hover:text-brand-yellow transition-colors"><EnvelopeSimple size={24} /></a>
          </div>
          <div className="mt-4 text-white/60 text-sm">
            <p>techlardf@gmail.com</p>
            <p className="mt-1">(61) 3971-2232</p>
            <p className="mt-1">Vicente Pires, Brasília - DF</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Techlar. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span>Desenvolvido por</span>
          <a href="https://onfloor.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-60 transition-opacity">
            <Image 
              src="/assets/manual/onfloor.png" 
              alt="OnFloor" 
              width={80} 
              height={24} 
              className="h-6 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
