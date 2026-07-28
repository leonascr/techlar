"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowRight, Images } from "@phosphor-icons/react/dist/ssr";

export const solutionsData = [
  {
    id: 1,
    title: "Pergotech Premium",
    description: "Lâminas de galvalume com núcleo em EPS. O máximo em conforto térmico e acústico para o seu ambiente.",
    image: "/assets/projetos/pergotechs%20premiums/IMG-20250414-WA0215.jpg",
    isAccent: false,
    anchor: "pergotech-premium",
  },
  {
    id: 2,
    title: "Pergotech Clássica",
    description: "Lâminas de galvalume de alta resistência. O equilíbrio perfeito entre durabilidade e design com excelente custo-benefício.",
    image: "/assets/projetos/pergotechs%20classicas/IMG-20240423-WA0128.jpg",
    isAccent: false,
    anchor: "pergotech-classica",
  },
  {
    id: 3,
    title: "Pergotech Cristal",
    description: "Lâminas transparentes em policarbonato compacto. Proteção total com passagem de luz natural.",
    image: "/assets/projetos/techlar-sol-coberturas-2.jpg",
    isAccent: false,
    anchor: "pergotech-cristal",
  },
  {
    id: 4,
    title: "Termotech",
    description: "Telhas térmicas brancas ou amadeiradas. Máximo isolamento térmico e acústico para o seu projeto.",
    image: "/assets/projetos/termotechs%20fixas/IMG-20250414-WA0088.jpg",
    isAccent: false,
    anchor: "termotech",
  },
  {
    id: 5,
    title: "Projetos Sob Medida",
    description: "Nossa equipe de engenharia trabalha com o seu escritório de arquitetura para desenvolver soluções únicas para o seu espaço.",
    image: "", // Use solid accent color
    isAccent: true,
    anchor: "projetos-especiais",
  }
];

export function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-yellow mb-4">
            Catálogo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-navy tracking-tight">
            Nossas Soluções Premium
          </h2>
        </motion.div>

        {/* Accordion Carousel Container */}
        <div className="flex flex-col md:flex-row w-full h-[700px] md:h-[600px] gap-3 md:gap-5">
          {solutionsData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={item.id}
                layout
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a')) return;
                  if (activeIndex === index) {
                    window.location.href = `/projetos#${item.anchor}`;
                  } else {
                    setActiveIndex(index);
                  }
                }}
                onHoverStart={() => {
                  // Only trigger hover on desktop to prevent weird mobile behavior
                  if (typeof window !== "undefined" && window.innerWidth > 768) {
                    setActiveIndex(index);
                  }
                }}
                animate={{ 
                  flex: isActive ? 4 : 1,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  flex: { type: "spring", bounce: 0, duration: 0.8 },
                  opacity: { duration: 0.5, delay: index * 0.1 }
                }}
                className={`group relative overflow-hidden rounded-[16px] cursor-pointer flex flex-col justify-end ${
                  item.isAccent ? "bg-brand-yellow" : "bg-brand-navy"
                }`}
              >
                {/* Background Image */}
                {!item.isAccent && (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={95}
                      className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
                        isActive ? "from-brand-navy/90 via-brand-navy/40 to-transparent opacity-100" : "from-brand-navy/95 via-brand-navy/60 to-brand-navy/20 opacity-80"
                      }`}
                    />
                  </>
                )}

                {/* Content */}
                <motion.div 
                  layout
                  className={`relative z-10 p-5 md:p-8 flex flex-col justify-end h-full w-full ${
                    item.isAccent ? "text-brand-navy" : "text-white"
                  }`}
                >
                  <motion.div layout className="flex items-center gap-3 mb-2 md:mb-4 w-full">
                    <span className={`font-mono text-sm font-semibold tracking-widest shrink-0 ${
                      item.isAccent ? "text-brand-navy/80" : "text-white/80"
                    } ${isActive ? "absolute top-5 left-5 md:top-6 md:left-6" : "md:absolute md:top-6 md:left-6"}`}>
                      0{index + 1}
                    </span>
                    <h3 
                      className={`font-display font-semibold transition-all duration-700 ease-out w-full ${
                        isActive 
                          ? "text-2xl md:text-4xl whitespace-normal md:whitespace-nowrap" 
                          : "text-lg md:text-xl truncate"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ 
                          height: { type: "spring", bounce: 0, duration: 0.8 },
                          opacity: { duration: 0.2 } 
                        }}
                        className="flex flex-col gap-6 overflow-hidden md:min-w-[384px]"
                      >
                        <p className={`text-sm md:text-base leading-relaxed max-w-sm ${item.isAccent ? "text-brand-navy/80" : "text-white/80"}`}>
                          {item.description}
                        </p>

                        <div className={`${item.isAccent ? 'flex' : 'hidden md:flex'} flex-col sm:flex-row gap-3 pt-2`}>
                          <a 
                            href={`/projetos#${item.anchor}`}
                            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] font-medium transition-colors w-fit text-sm shadow-sm ${
                              item.isAccent 
                                ? "bg-brand-navy text-white hover:bg-brand-navy/90" 
                                : "bg-brand-yellow text-brand-navy hover:bg-white"
                            }`}
                          >
                            <Images size={18} weight="bold" />
                            Ver exemplos
                          </a>
                          <a 
                            href="#contact"
                            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-[8px] font-medium transition-colors w-fit text-sm ${
                              item.isAccent 
                                ? "border border-brand-navy/20 hover:bg-brand-navy/10" 
                                : "border border-white/20 hover:bg-white/10 backdrop-blur-sm"
                            }`}
                          >
                            Falar com especialista <ArrowRight size={16} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>


              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
