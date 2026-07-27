"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Clock, CheckCircle } from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatPhone = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length <= 2) {
      return value.replace(/^(\d{1,2})/, "($1");
    } else if (value.length <= 6) {
      return value.replace(/^(\d{2})(\d{1,4})/, "($1) $2");
    } else if (value.length <= 10) {
      return value.replace(/^(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
    } else {
      return value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone,
        mensagem: formData.message,
        origem: "Site Techlar",
        data: new Date().toISOString()
      };

      const response = await fetch("https://n8n.onfloor.com.br/webhook/techlarform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente ou contate-nos via WhatsApp.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Ocorreu um erro ao enviar a mensagem. Tente novamente ou contate-nos via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/manual/techlar-project-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px", // Ajusta o tamanho do padrão
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-brand-navy mb-4">
            Atendimento Exclusivo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-brand-navy tracking-tight mb-6">
            Inicie o Seu Projeto
          </h2>
          <p className="text-brand-navy/70 text-lg max-w-xl mx-auto">
            Fale com nossos especialistas em engenharia e design. Estamos prontos para transformar sua área externa com soluções definitivas em conforto e sofisticação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: Info and Map */}
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <MapPin size={24} className="text-brand-yellow shrink-0 mt-1" weight="fill" />
                <div>
                  <h4 className="font-display text-xl font-medium text-brand-navy mb-1">Nosso Endereço</h4>
                  <p className="text-brand-navy/70 leading-relaxed">
                    St. Hab. Vicente Pires RUA 4 CENTRO EMPRESARIAL<br />
                    VICENTE PIRES SALA 404<br />
                    Vicente Pires, Brasília - DF, 72006-200
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone size={24} className="text-brand-yellow shrink-0 mt-1" weight="fill" />
                <div>
                  <h4 className="font-display text-xl font-medium text-brand-navy mb-1">Telefone / WhatsApp</h4>
                  <p className="text-brand-navy/70">(61) 3971-2232</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock size={24} className="text-brand-yellow shrink-0 mt-1" weight="fill" />
                <div>
                  <h4 className="font-display text-xl font-medium text-brand-navy mb-1">Horário de Funcionamento</h4>
                  <p className="text-brand-navy/70">Seg. a Sex.: 08:00–18:00<br />Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Google Maps Map */}
            <div className="w-full h-64 md:h-80 bg-brand-navy/5 overflow-hidden relative">
              <iframe
                src="https://maps.google.com/maps?q=St.%20Hab.%20Vicente%20Pires%20RUA%204%20CENTRO%20EMPRESARIAL%20VICENTE%20PIRES%20Brasilia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 contrast-125"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Techlar"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ x: 24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left h-fit pt-10 md:pt-16"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-brand-navy">Nome Completo</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-white border border-brand-navy/20 px-4 py-3 text-brand-navy rounded-[8px] focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-brand-navy">E-mail Profissional</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-white border border-brand-navy/20 px-4 py-3 text-brand-navy rounded-[8px] focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                placeholder="contato@empresa.com"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="phone" className="text-sm font-medium text-brand-navy">Telefone / WhatsApp</label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: formatPhone(e.target.value) }))}
                className="bg-white border border-brand-navy/20 px-4 py-3 text-brand-navy rounded-[8px] focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all"
                placeholder="(61) 90000-0000"
                maxLength={15}
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-brand-navy">Detalhes do Projeto</label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="bg-white border border-brand-navy/20 px-4 py-3 text-brand-navy rounded-[8px] focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-all resize-none"
                placeholder="Conte-nos um pouco sobre a sua necessidade ou ideia de projeto arquitetônico..."
              />
            </div>
            <div className="md:col-span-2 pt-4 flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-navy text-white font-medium py-4 rounded-[10px] hover:bg-brand-navy/90 transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
              </button>

              {isSuccess && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-[8px] text-sm">
                  <CheckCircle size={20} weight="fill" />
                  Orçamento solicitado com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
