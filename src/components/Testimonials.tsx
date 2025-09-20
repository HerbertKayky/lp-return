"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Lívio e Laís",
    role: "Proprietários de Loja",
    content:
      "A Return transformou completamente nossa loja em Toritama. Daniel entendeu perfeitamente nossa visão comercial e criou um espaço que otimizou nossas vendas. O projeto superou todas as expectativas.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Carlos",
    role: "Diretor Comercial",
    content:
      "Projeto excepcional para nosso escritório em Toritama. Daniel conseguiu criar um ambiente moderno e funcional que aumentou significativamente a produtividade da nossa equipe.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Silva",
    role: "Empresária do Varejo",
    content:
      "Profissionalismo impecável do início ao fim. Daniel e sua equipe entregaram muito mais do que prometeram. Nosso mercado se tornou referência na região, exatamente como sonhávamos.",
    rating: 5,
  },
  {
    id: 4,
    name: "Antonio Mendes",
    role: "Investidor Imobiliário",
    content:
      "Já trabalhei com vários arquitetos, mas a Return se destaca pela atenção aos detalhes e capacidade de entregar projetos comerciais únicos e funcionais. Parceria garantida para futuros empreendimentos.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            O que nossos <span className="font-bold">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o reflexo do nosso compromisso
            com a excelência em cada projeto que desenvolvemos.
          </p>
        </div>

        {/* Featured testimonial */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center relative">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-gray-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic">
                "{testimonials[currentIndex].content}"
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-600"
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
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-500 cursor-pointer ${
                currentIndex === index ? "ring-2 ring-gray-900 shadow-lg" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-600"
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
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {testimonial.content}
              </p>

              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
