"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Stats } from "./Stats";

export function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex items-center pt-32 pb-16 overflow-hidden bg-brand-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/imgs/hero2.png"
          alt="Área externa com cobertura premium Techlar"
          fill
          quality={90}
          className="object-cover object-[center_70%]"
          priority
          sizes="100vw"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/80 to-brand-navy/60" />
      </div>

      {/* Content Stack */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center w-full mt-4 md:mt-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block font-mono text-[13px] uppercase tracking-[0.2em] text-brand-yellow mb-6">
              A Arquitetura do Conforto
            </span>
          </motion.div>

          <motion.h1 
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6"
          >
            Faça chuva ou faça sol, <br className="hidden md:block" />
            a escolha é sua.
          </motion.h1>

          <motion.p 
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[22px] text-white/80 max-w-[45ch] leading-relaxed mb-10"
          >
            Projetamos e fabricamos soluções premium em coberturas retráteis e pergolados para projetos residenciais e comerciais.
          </motion.p>

        </div>

        {/* Stats Row inside Hero */}
        <div className="mt-10 md:mt-12 w-full flex justify-center">
          <Stats />
        </div>
      </div>
    </section>
  );
}
