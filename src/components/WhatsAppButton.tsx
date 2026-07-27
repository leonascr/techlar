"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/556139712232"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-10 right-10 z-50 group hidden md:flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Pulsing outer glow ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>

      {/* Custom WhatsApp Icon from Image */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-xl group-hover:scale-105 transition-transform">
        <Image 
          src="/assets/imgs/whatsapp.png" 
          alt="WhatsApp" 
          fill
          sizes="64px"
          className="object-contain"
        />
      </div>
    </motion.a>
  );
}
