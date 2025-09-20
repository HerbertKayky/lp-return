"use client";

import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Daniel Silva</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Sobre o <span className="font-bold">Arquiteto</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900">Daniel Silva</strong> é o
                fundador e principal arquiteto da Return, com vasta experiência
                em projetos comerciais e institucionais em Pernambuco.
              </p>

              <p>
                Especializado em arquitetura comercial, Herbert desenvolve
                soluções inovadoras para mercados, lojas, escritórios e
                edifícios, sempre priorizando funcionalidade, estética e
                eficiência espacial.
              </p>

              <p>
                Na <strong className="text-gray-900">Return</strong>, cada
                projeto é desenvolvido com atenção aos detalhes e às
                necessidades específicas dos clientes, criando espaços que
                otimizam negócios e proporcionam experiências únicas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 text-sm">
                  Projetos Desenvolvidos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-gray-600 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
                <div className="text-gray-600 text-sm">Cidades Atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
