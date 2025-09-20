import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#CCAF6D]">
              <svg
                className="w-16 h-16 text-[#CCAF6D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projeto não encontrado
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              O projeto que você está procurando não existe ou foi removido.
              Explore nossos outros projetos ou entre em contato conosco.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#projects"
                className="bg-gray-900 text-[#CCAF6D] px-8 py-4 text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 border border-[#CCAF6D]"
              >
                Ver Todos os Projetos
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-[#CCAF6D] text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-[#CCAF6D] hover:text-gray-900 transition-all duration-300"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
