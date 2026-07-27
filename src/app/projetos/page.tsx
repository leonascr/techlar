"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { galeriaData } from "@/data/galeria";
import Image from "next/image";
import { FolderOpen, Plus, ArrowUp } from "@phosphor-icons/react/dist/ssr";

function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, margin: "200px" });

  useEffect(() => {
    if (isInView) {
      ref.current?.play().catch(() => {});
    } else {
      ref.current?.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={ref}
      src={src}
      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 bg-brand-navy/5"
      muted
      loop
      playsInline
      preload="none"
    />
  );
}

export default function ProjetosPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [hasLoadedMore, setHasLoadedMore] = useState<boolean>(false);

  // Flatten images and tag them with their category id (memoized)
  const allImages = useMemo(() => {
    return galeriaData.flatMap(cat => 
      cat.subcategorias.flatMap(sub => 
        sub.imagens.map(item => ({
          ...item,
          categoryId: cat.id,
          fullSrc: `/assets/projetos/${cat.pasta}/${item.src}`
        }))
      )
    );
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      // Filtrar apenas pergotech clássica e premium
      const classica = allImages.filter(img => img.categoryId === "pergotech-classica");
      const premium = allImages.filter(img => img.categoryId === "pergotech-premium");
      
      const result = [];
      const max = Math.max(classica.length, premium.length);
      
      // Misturar de forma intercalada determinística para não quebrar o SSR (Server Side Rendering)
      for (let i = 0; i < max; i++) {
        // Intercala mudando a ordem dependendo de ser par ou ímpar, dando efeito "aleatório"
        if (i % 2 === 0) {
          if (premium[i]) result.push(premium[i]);
          if (classica[i]) result.push(classica[i]);
        } else {
          if (classica[i]) result.push(classica[i]);
          if (premium[i]) result.push(premium[i]);
        }
      }
      return result;
    }
    
    return allImages.filter(img => img.categoryId === activeCategory);
  }, [activeCategory, allImages]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
    setHasLoadedMore(true);
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(12);
    setHasLoadedMore(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-brand-bone text-brand-navy selection:bg-brand-navy selection:text-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/projetos/pergotech/pergotech-premium/premium-04.jpg"
            alt="Portfólio de Projetos"
            fill
            quality={100}
            sizes="100vw"
            className="object-cover opacity-[0.06]"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-yellow mb-6">
              Portfólio
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Nossos Projetos
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Explore nossa galeria de projetos instalados — estruturas de alto padrão entregues com excelência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Menu */}
      <section className="bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto no-scrollbar gap-8 justify-center">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`cursor-pointer relative py-5 text-base md:text-lg font-medium whitespace-nowrap transition-colors ${
                activeCategory === "all"
                  ? "text-brand-navy"
                  : "text-brand-navy/60 hover:text-brand-navy"
              }`}
            >
              Todos
              {activeCategory === "all" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-yellow"
                />
              )}
            </button>
            {galeriaData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`cursor-pointer relative py-5 text-base md:text-lg font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? "text-brand-navy"
                    : "text-brand-navy/60 hover:text-brand-navy"
                }`}
              >
                {cat.titulo}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-yellow"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {visibleImages.length > 0 ? (
            <>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                <AnimatePresence mode="popLayout">
                  {visibleImages.map((item, i) => {
                    const isVideo = item.type === "video" || item.fullSrc.endsWith(".mp4") || item.fullSrc.endsWith(".mov") || item.fullSrc.endsWith(".MOV");
                    return (
                      <motion.div
                        key={item.fullSrc}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: (i % 12) * 0.05 }}
                        className="group relative break-inside-avoid rounded-[14px] overflow-hidden bg-brand-navy/5 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                        onClick={() => !isVideo && setLightbox(item.fullSrc)}
                      >
                        {isVideo ? (
                          <LazyVideo src={item.fullSrc} />
                        ) : (
                          <div className="relative w-full">
                            <Image
                              src={item.fullSrc}
                              alt={item.alt || "Projeto Techlar"}
                              width={800}
                              height={600}
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                              priority={i < 4}
                            />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {hasMore && (
                <div className="mt-16 flex justify-center">
                  <button
                    onClick={handleLoadMore}
                    className="cursor-pointer flex items-center gap-2 px-8 py-3.5 rounded-[10px] border border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5 transition-colors font-medium shadow-sm"
                  >
                    <Plus size={18} weight="bold" />
                    Carregar mais projetos
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 px-6 rounded-2xl border border-dashed border-brand-navy/20 bg-brand-navy/[0.02]">
              <FolderOpen size={40} className="text-brand-navy/20 mb-4" />
              <span className="text-brand-navy/40 font-mono text-sm uppercase tracking-wider mb-2">Em breve</span>
              <p className="text-brand-navy/50 text-center text-sm max-w-xs">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Projeto Techlar"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                aria-label="Fechar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Banner */}
      <section className="bg-brand-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* Left */}
            <div className="text-center md:text-left">
              <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-yellow mb-3">
                Próximo passo
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Gostou do que viu? <br className="hidden md:block" />
                <span className="text-brand-yellow">Vamos criar o seu projeto.</span>
              </h2>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 bg-brand-yellow text-brand-navy font-semibold px-7 py-3.5 rounded-[10px] hover:bg-white transition-colors text-sm"
              >
                Solicitar orçamento
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a
                href="https://wa.me/556139712232"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:bg-white/10 hover:text-white font-medium px-7 py-3.5 rounded-[10px] transition-colors text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      <AnimatePresence>
        {hasLoadedMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={scrollToTop}
              className="bg-brand-navy text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-brand-navy/90 hover:-translate-y-1 transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} weight="bold" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
