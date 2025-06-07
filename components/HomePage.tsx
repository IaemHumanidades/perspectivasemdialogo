
import React from 'react';
import type { PageView, ModalType } from '../App'; 
import { ChipIcon } from './icons/ChipIcon'; 
import type { DynamicTheme } from './DynamicThemePage'; // Import DynamicTheme type

interface HomePageProps {
  onNavigate: (sectionId: PageView | string) => void; // Allow string for dynamic slugs
  onOpenAddThemeModal: () => void;
  dynamicThemes: DynamicTheme[]; // Add prop for dynamic themes
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAddThemeModal, dynamicThemes }) => {
  return (
    <main className="container mx-auto p-4 md:p-8 flex-grow">
      <section className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-peace-blue-dark uppercase tracking-wide">
          Perspectivas em Diálogo
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-peace-green-dark mt-2">
          Semeando a Esperança
        </h2>
      </section>

      <section id="intro-cultura-paz" className="my-8 p-6 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <h3 className="text-xl md:text-2xl font-semibold text-peace-blue-dark mb-4">Introdução à Cultura de Paz para Semear a Esperança</h3>
        <p className="text-gray-700 leading-relaxed">
          Este espaço é um convite à reflexão e ao diálogo construtivo. Acreditamos que, ao explorar diferentes perspectivas históricas e contemporâneas, podemos cultivar a compreensão mútua, o respeito e a empatia – sementes essenciais para uma cultura de paz. Nosso objetivo é fornecer caminhos didáticos e assertivos que inspirem a esperança e a busca por soluções pacíficas para os desafios complexos do nosso tempo.
        </p>
      </section>

      <section id="o-que-e-cultura-paz" className="my-8 p-6 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <h3 className="text-xl md:text-2xl font-semibold text-peace-blue-dark mb-4">O que é uma Cultura de Paz?</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Segundo a UNESCO, uma Cultura de Paz é um conjunto de valores, atitudes, tradições, comportamentos e estilos de vida baseados em:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base">
          <li>Respeito pela vida, fim da violência e promoção e prática da não-violência por meio da educação, do diálogo e da cooperação;</li>
          <li>Pleno respeito pelos princípios de soberania, integridade territorial e independência política dos Estados e de não ingerência nos assuntos que são essencialmente da jurisdição interna dos Estados, em conformidade com a Carta das Nações Unidas e o direito internacional;</li>
          <li>Pleno respeito e promoção de todos os direitos humanos e liberdades fundamentais;</li>
          <li>Compromisso com a solução pacífica de conflitos;</li>
          <li>Esforços para satisfazer as necessidades de desenvolvimento e proteção ambiental das gerações presentes e futuras;</li>
          <li>Respeito e promoção do direito ao desenvolvimento;</li>
          <li>Respeito e promoção da igualdade de direitos e oportunidades para mulheres e homens;</li>
          <li>Respeito e promoção do direito de todos à liberdade de expressão, opinião e informação;</li>
          <li>Adesão aos princípios de liberdade, justiça, democracia, tolerância, solidariedade, cooperação, pluralismo, diversidade cultural, diálogo e entendimento em todos os níveis da sociedade e entre as nações;</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          É um processo dinâmico e de longo prazo, que requer a participação de todos os indivíduos e setores da sociedade.
        </p>
      </section>

      <section id="vozes-dialogo" className="my-10 md:my-16 p-6 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-peace-blue-dark mb-8">Vozes em Diálogo</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigate('israel-palestina')}
            aria-label="Explorar tema Israel e Palestina"
            className="w-full sm:w-auto max-w-xs sm:max-w-sm bg-peace-blue-primary text-white border-2 border-peace-blue-dark hover:bg-peace-blue-primary-darker py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-peace-blue-primary focus:ring-opacity-50"
          >
            Israel e Palestina
          </button>
          <button
            onClick={() => onNavigate('povos-indigenas')}
            aria-label="Explorar tema Povos Indígenas e Colonização/Estado Brasileiro"
            className="w-full sm:w-auto max-w-xs sm:max-w-sm bg-peace-green-primary text-white border-2 border-peace-green-dark hover:bg-green-600 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-peace-green-primary focus:ring-opacity-50"
          >
            Povos Indígenas e Colonização/Estado Brasileiro
          </button>
        </div>
      </section>

      {dynamicThemes.length > 0 && (
        <section id="temas-comunidade" className="my-10 md:my-16 p-6 bg-slate-50 rounded-xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-peace-blue-dark mb-8 text-center">Temas da Comunidade (Gerados por IA)</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {dynamicThemes.map(theme => (
              <button
                key={theme.id}
                onClick={() => onNavigate(theme.slug)}
                aria-label={`Explorar tema ${theme.title}`}
                className="bg-sky-600 text-white border-2 border-sky-800 hover:bg-sky-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 text-sm"
                title={theme.title}
              >
                {theme.title.length > 30 ? `${theme.title.substring(0, 27)}...` : theme.title}
              </button>
            ))}
          </div>
           <p className="text-xs text-gray-500 mt-6 text-center italic">
            Estes temas foram sugeridos por usuários e a estrutura inicial da página foi gerada através de um processo simulado de nossos Agentes de IA.
          </p>
        </section>
      )}

      <section id="contribuir" className="my-12 text-center space-y-8">
         <div>
             <button
                onClick={() => onNavigate('apoie')}
                aria-label="Apoie nosso projeto"
                className="bg-amber-500 text-white hover:bg-amber-600 py-3 px-10 rounded-lg font-bold text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75"
              >
                Apoie nosso projeto
              </button>
               <p className="text-sm text-gray-600 mt-2">Sua contribuição faz a diferença na construção de um diálogo mais rico.</p>
         </div>
         <div>
            <button
              onClick={() => onNavigate('ai-architecture')}
              aria-label="Conheça nossa Arquitetura de IA Ética"
              className="inline-flex items-center justify-center bg-purple-600 text-white hover:bg-purple-700 py-3 px-8 rounded-lg font-semibold transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              <ChipIcon className="w-5 h-5 mr-2" />
              Conheça Nossa Arquitetura de IA Ética
            </button>
             <p className="text-sm text-gray-500 mt-2">Entenda como promovemos um diálogo seguro e construtivo.</p>
        </div>
        <div>
            <button
              onClick={onOpenAddThemeModal}
              aria-label="Sugerir um novo tema para diálogo"
              className="bg-slate-600 text-white hover:bg-slate-700 py-3 px-8 rounded-lg font-semibold transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
            >
              Gerar Novo Tema com IA
            </button>
             <p className="text-sm text-gray-500 mt-2">Contribua para expandir nossos diálogos.</p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
