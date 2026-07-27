"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  InstagramLogo,
  Play,
  SpeakerHigh,
  SpeakerSlash,
  ArrowLeft,
  ArrowRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";

import { allCases as cases, INSTAGRAM_PROFILE, type MediaItem } from "@/data/portfolio";

export function MediaPlayer({
  media,
  instagramUrl,
  aspectRatio = "9/16",
}: {
  media: MediaItem[];
  instagramUrl: string;
  aspectRatio?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }, 50);
  };

  const prev = () => goTo(activeIndex > 0 ? activeIndex - 1 : media.length - 1);
  const next = () => goTo(activeIndex < media.length - 1 ? activeIndex + 1 : 0);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const currentItem = media[activeIndex];
  const isVideo = currentItem.type === "video";

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Progress indicators */}
      <div className="flex gap-1.5 w-full max-w-[300px]">
        {media.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[3px] flex-1 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-brand-yellow" : i < activeIndex ? "bg-white/60" : "bg-white/20"
              }`}
            aria-label={`Mídia ${i + 1}`}
          />
        ))}
      </div>

      {/* Media viewer */}
      <div
        className="relative w-[240px] sm:w-[280px] overflow-hidden rounded-[20px] bg-black shadow-2xl"
        style={{ aspectRatio }}
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {isVideo ? (
              <video
                ref={videoRef}
                src={currentItem.src}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={currentItem.src}
                alt={currentItem.label}
                fill
                sizes="(max-width: 640px) 240px, 280px"
                className="object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Label */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <span className="text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
            {currentItem.label}
          </span>
        </div>

        {/* Sound toggle for videos */}
        {isVideo && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 rounded-full transition-all"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <SpeakerSlash size={14} weight="fill" /> : <SpeakerHigh size={14} weight="fill" />}
          </button>
        )}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center gap-6">
        <button
          onClick={prev}
          className="p-2.5 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <ArrowLeft size={16} />
        </button>
        <span className="text-white/50 text-sm font-mono">{activeIndex + 1} / {media.length}</span>
        <button
          onClick={next}
          className="p-2.5 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export function Cases() {
  const [activeCase, setActiveCase] = useState(0);
  const direction = useRef(1);

  const goToCase = (index: number) => {
    direction.current = index > activeCase ? 1 : -1;
    setActiveCase(index);
  };

  const prevCase = () => goToCase(activeCase > 0 ? activeCase - 1 : cases.length - 1);
  const nextCase = () => goToCase(activeCase < cases.length - 1 ? activeCase + 1 : 0);

  const c = cases[activeCase];

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-brand-navy overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/projetos/pergotech/pergotech-premium/premium-04.jpg"
          alt=""
          fill
          quality={100}
          sizes="100vw"
          className="object-cover opacity-[0.06]"
          aria-hidden="true"
        />
      </div>

      {/* Watermark logo bottom-right */}
      <div className="absolute bottom-6 right-6 z-0 pointer-events-none">
        <Image
          src="/assets/manual/techlar-watermark.png"
          alt=""
          width={180}
          height={60}
          className="w-auto h-14 md:h-16 opacity-50"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-yellow mb-3">
              Portfólio
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Cases de Sucesso
            </h2>
          </div>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-brand-yellow transition-colors text-sm font-medium self-start sm:self-end"
          >
            <InstagramLogo size={18} weight="fill" />
            Ver mais no Instagram
            <ArrowRight size={13} />
          </a>
        </motion.div>

        {/* Dots navigation */}
        <div className="flex items-center gap-3 mb-8">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => goToCase(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeCase ? "w-8 h-2 bg-brand-yellow" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Case ${i + 1}`}
            />
          ))}
          <span className="ml-2 text-white/30 text-xs font-mono">
            {String(activeCase + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
          </span>
        </div>

        {/* Slide */}
        <div className="min-h-[750px] md:min-h-[500px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction.current}>
            <motion.div
              key={c.id}
              custom={direction.current}
              initial={{ opacity: 0, x: direction.current * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction.current * -60 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col md:flex-row gap-8 md:gap-20 items-center"
            >
            {/* Media Player */}
            <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
              <MediaPlayer
                media={c.media}
                instagramUrl={c.instagramUrl}
                aspectRatio={c.aspectRatio}
              />
            </div>

            {/* Info — hidden on mobile, visible on desktop */}
            <div className="hidden md:flex flex-1 max-w-lg flex-col">
              <div className="inline-flex items-center gap-2 text-brand-yellow/80 text-xs font-mono tracking-widest uppercase mb-6">
                <Play size={10} weight="fill" />
                Case {String(activeCase + 1).padStart(2, "0")}
              </div>

              <h3 className="font-display text-4xl font-semibold text-white mb-2">
                {c.client}
              </h3>
              <a
                href={c.clientInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-brand-yellow/70 hover:text-brand-yellow text-sm mb-8 transition-colors w-fit"
              >
                <InstagramLogo size={14} />
                {c.tag}
              </a>

              <p className="text-white/70 leading-relaxed text-lg mb-10">
                {c.description}
              </p>

              {/* Thumbnails */}
              <div className="flex gap-2 flex-wrap mb-10">
                {c.media.map((item, mi) => (
                  <div
                    key={mi}
                    className="group relative w-12 h-16 rounded-[8px] bg-white/5 border border-white/10 overflow-hidden hover:border-brand-yellow/50 transition-all"
                  >
                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          playsInline
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play size={10} weight="fill" className="text-white/80" />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        sizes="48px"
                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Case nav arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevCase}
                  disabled={cases.length <= 1}
                  className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30"
                  aria-label="Case anterior"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  onClick={nextCase}
                  disabled={cases.length <= 1}
                  className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30"
                  aria-label="Próximo case"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>

            {/* Mobile-only: just client name + nav arrows below the player */}
            <div className="flex md:hidden w-full flex-col items-center gap-4 text-center">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">{c.client}</h3>
                <a
                  href={c.clientInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-yellow/70 text-sm mt-1"
                >
                  <InstagramLogo size={13} />
                  {c.tag}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={prevCase}
                  disabled={cases.length <= 1}
                  className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30"
                  aria-label="Case anterior"
                >
                  <CaretLeft size={16} weight="bold" />
                </button>
                <button
                  onClick={nextCase}
                  disabled={cases.length <= 1}
                  className="p-3 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30"
                  aria-label="Próximo case"
                >
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
