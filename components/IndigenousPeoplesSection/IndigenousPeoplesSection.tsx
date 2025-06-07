
import React from 'react';
import { IndigenousIcon } from '../icons/IndigenousIcon';
import CultureOfPeaceDefinition from './CultureOfPeaceDefinition';
import VoicesAndPerspectives from './VoicesAndPerspectives';
import HistoricalRoots from './HistoricalRoots';
import PathsToReconciliation from './PathsToReconciliation';
import IndigenousConclusion from './IndigenousConclusion';
import { FlowChartIcon } from '../icons/FlowChartIcon'; // Import the icon

interface IndigenousPeoplesSectionProps {
  onOpenReflectionModal: () => void;
}

const IndigenousPeoplesSection: React.FC<IndigenousPeoplesSectionProps> = ({ onOpenReflectionModal }) => {
  const commonCardClasses = "my-8 p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1";
  const sectionTitleClasses = "text-xl md:text-2xl font-semibold text-peace-blue-dark mb-4"; // Main title for sub-sections
  const paragraphClasses = "text-gray-700 leading-relaxed mb-3 text-sm sm:text-base";

  const convergenceDivergenceData = {
    title: "Convergências e Divergências: Povos Indígenas e Sociedade Brasileira",
    introduction: "O diálogo entre os povos indígenas e a sociedade brasileira, incluindo o Estado, revela tanto áreas de potencial entendimento quanto profundas divergências históricas e atuais, cruciais para a construção de relações mais justas e respeitosas.",
    convergences: [
      "Reconhecimento crescente da importância da preservação ambiental e do papel fundamental dos conhecimentos indígenas para a sustentabilidade e o enfrentamento das mudanças climáticas.",
      "Consenso em diversos setores da sociedade sobre a necessidade de combater o racismo, a discriminação e a violência contra os povos indígenas.",
      "Valorização da diversidade cultural brasileira, com um interesse renovado pelas ricas contribuições das culturas, línguas e saberes indígenas para a identidade nacional.",
      "Entendimento compartilhado sobre a importância da educação de qualidade, com debates sobre a necessidade de uma educação escolar indígena diferenciada e intercultural."
    ],
    divergences: [
      "Demarcação e Proteção de Terras Indígenas: Persistem disputas sobre a demarcação, regularização e proteção efetiva das terras tradicionalmente ocupadas, com interesses econômicos (agronegócio, mineração, extração madeireira) frequentemente em conflito com os direitos territoriais indígenas.",
      "Modelo de Desenvolvimento: Visões antagônicas sobre modelos de desenvolvimento para a Amazônia e outras regiões, onde grandes projetos de infraestrutura e exploração de recursos naturais frequentemente impactam negativamente territórios, modos de vida e o meio ambiente indígena.",
      "Autonomia e Autodeterminação: Diferenças significativas na interpretação e implementação do direito à autonomia dos povos indígenas em relação à gestão de seus territórios, recursos naturais, sistemas de saúde, educação e justiça próprios.",
      "Violência e Invasões: Divergência sobre a responsabilidade e eficácia do Estado em coibir invasões de terras indígenas, violência contra lideranças e comunidades, e a exploração ilegal de recursos naturais."
    ],
    imageUrl: `https://placehold.co/300x150/A3E6CB/065F46?text=Diagrama+Convergência+Divergência+Povos+Indígenas+Brasil`
  };

  return (
    <>
      <section id="povos-indigenas-intro" className="my-8 p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1">
        <h2 className="text-2xl md:text-3xl font-semibold text-peace-blue-dark mb-4 flex items-center">
          <IndigenousIcon className="w-8 h-8 mr-3 text-peace-green-dark" />
          Povos Indígenas e a Colonização Europeia
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A história dos povos indígenas e da colonização europeia nas Américas, especialmente no Brasil, é marcada por profundas transformações sociais, culturais e demográficas. Esta seção busca compreender esse processo histórico a partir de múltiplas perspectivas, valorizando tanto o conhecimento acadêmico quanto os saberes e narrativas dos próprios povos indígenas.
        </p>
        <div className="mt-6 text-center">
          <img 
            src="https://placehold.co/600x300/A3E6CB/047857?text=Encontro+Cultural+Povos+Indígenas+e+Europa" 
            alt="Ilustração simbólica do encontro de culturas: representação de arte indígena e elementos da colonização europeia em diálogo" 
            className="mx-auto rounded-lg shadow-md max-w-full h-auto" 
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x300/cccccc/969696?text=Erro+Imagem+Principal+Povos+Indígenas'; }}
          />
        </div>
      </section>

      <div id="povos-indigenas-content" className="space-y-8"> {/* Wrapper for individual cards */}
        <CultureOfPeaceDefinition />
        <VoicesAndPerspectives />
        <HistoricalRoots />

        {/* New Convergence and Divergence Section for Indigenous Peoples */}
        <section id="convergencia-divergencia-indigenas" className={commonCardClasses}>
          <h3 className={`${sectionTitleClasses} flex items-center`}>
            <FlowChartIcon className="w-7 h-7 mr-3 text-peace-blue-primary" />
            {convergenceDivergenceData.title}
          </h3>
          <p className={paragraphClasses}>{convergenceDivergenceData.introduction}</p>
          
          {convergenceDivergenceData.imageUrl && (
              <div className="my-4 text-center">
                  <img 
                      src={convergenceDivergenceData.imageUrl} 
                      alt={`Visualização de ${convergenceDivergenceData.title.replace(/:/g, '')}`}
                      className="rounded-md shadow-sm mx-auto max-w-xs h-auto"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/300x150/cccccc/969696?text=Erro+Diagrama+Povos+Indígenas'; }}
                  />
              </div>
          )}

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-semibold text-green-600 mb-2">Pontos de Convergência Potencial:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {convergenceDivergenceData.convergences.map((item, index) => (
                  <li key={`conv-ind-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-red-600 mb-2">Principais Pontos de Divergência:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {convergenceDivergenceData.divergences.map((item, index) => (
                  <li key={`div-ind-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <PathsToReconciliation />
        <IndigenousConclusion onOpenReflectionModal={onOpenReflectionModal} />
      </div>
    </>
  );
};

export default IndigenousPeoplesSection;
