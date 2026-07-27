"use client";

import { motion, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react/dist/ssr";

const INSTAGRAM_REEL_URL =
  "https://www.instagram.com/reel/DLxXNgBuVw8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";

export function About() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.2 });

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-bone">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-center">

        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-brand-navy leading-[1.1] tracking-tight mb-8">
              Engenharia e design em perfeita harmonia.
            </h2>
            <div className="space-y-6 text-brand-navy/70 leading-relaxed text-lg">
              <p>
                A Techlar é especialista em transformar áreas externas em verdadeiros refúgios de conforto e sofisticação. Realizamos a venda e instalação direta aos clientes finais, com orçamentos personalizados e execução impecável de projetos de alto padrão, desenhados para elevar a estética de qualquer ambiente.
              </p>
              <p>
                Trabalhamos lado a lado com arquitetos e clientes exigentes, garantindo que cada cobertura retrátil, pergolado ou ombrelone seja não apenas um produto, mas uma peça fundamental na experiência de viver o exterior.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-12">
              <div>
                <div className="font-display text-4xl font-semibold text-brand-navy mb-1">+9</div>
                <div className="text-sm font-medium text-brand-navy/60">Anos de Experiência</div>
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-brand-navy mb-1">Premium</div>
                <div className="text-sm font-medium text-brand-navy/60">Instalação e Venda</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Video Reel Player */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex justify-center items-start w-full"
        >
          <div className="relative w-full max-w-[320px]">
            {/* Video wrapper */}
            <div
              className="group relative w-full overflow-hidden rounded-[16px] shadow-2xl bg-brand-navy"
              style={{ aspectRatio: "9/16" }}
            >
              <video
                ref={videoRef}
                src="/assets/videos/videosection.mp4"
                muted={isMuted}
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
              />

              {/* Clickable link overlay (Ver no Instagram) */}
              <a
                href={INSTAGRAM_REEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-300"
                aria-label="Ver Reel no Instagram de @techlar_"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 256 256">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                  </svg>
                  <span className="text-white text-sm font-medium">Ver no Instagram</span>
                </div>
              </a>

              {/* Sound Toggle Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-20 bg-brand-navy/60 hover:bg-brand-navy/80 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <SpeakerSlash size={20} weight="fill" /> : <SpeakerHigh size={20} weight="fill" />}
              </button>
            </div>

            {/* Instagram label below the video */}
            <a
              href={INSTAGRAM_REEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-brand-navy/50 text-sm hover:text-brand-navy transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
              </svg>
              <span>@techlar_ no Instagram</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
