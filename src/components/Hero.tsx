import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/8bf8248e-342d-4e21-852e-6705fe24ece5/files/88166d68-5286-4f38-b521-2b0caa6851b7.jpg"
          alt="Горы Кабардино-Балкарии"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80">Малкинское ущелье · Кабардино-Балкария</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ГОРНЫЙ САД<br />ЗДОРОВЬЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Термальные источники, альпийский воздух и тишина гор — восстановление за 3–7 дней без лишних слов
        </p>
        <a href="#contact" className="inline-block border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Забронировать место
        </a>
      </div>
    </div>
  );
}