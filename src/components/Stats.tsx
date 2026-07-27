"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ target, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const percentage = Math.min(progress / duration, 1);
        const currentValue = percentage * target;

        setCount(currentValue);

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, target]);

  const displayValue = Math.floor(count).toLocaleString("pt-BR");

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { target: 9, prefix: "+", suffix: "", label: "Anos de Experiência" },
    { target: 700, prefix: "+", suffix: "", label: "Projetos Entregues" },
    { target: 20000, prefix: "+", suffix: " m²", label: "Coberturas Instaladas" },
    { target: 100, prefix: "", suffix: "%", label: "Sob Medida para Cada Projeto" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-[15px] pointer-events-auto w-full">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          className="group flex flex-col justify-center items-center text-center w-[calc(50%-8px)] sm:w-auto sm:px-8 py-4 drop-shadow-md"
        >
          <div className="font-display text-[32px] sm:text-[40px] font-bold text-brand-yellow mb-2 leading-none">
            <Counter
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </div>
          <div className="font-sans text-[13px] sm:text-[15px] text-white/90 leading-snug font-normal tracking-wide">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
