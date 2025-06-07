
import React from 'react';
import { BookIcon } from './icons/BookIcon';
import { CheckIcon } from './icons/CheckIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { LeafIcon } from './icons/LeafIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { ClockIcon } from './icons/ClockIcon';
import { FlowChartIcon } from './icons/FlowChartIcon'; // Import new icon

export interface DynamicTheme {
  id: string;
  title: string;
  slug: string;
  content: {
    curatorJustification: string;
    researchSummary: string;
    factCheckHighlights: string[];
    dialogicExposition: {
      introduction: string;
      perspectives: Array<{
        id: string;
        title: string;
        text: string;
        imageUrl: string;
      }>;
      convergenceDivergence: { // Added this section
        title: string;
        introduction: string;
        convergences: string[];
        divergences: string[];
        imageUrl?: string;
      };
    };
    accessibleAdaptation: string;
    provisionalConclusion: string;
  };
}

interface DynamicThemePageProps {
  theme: DynamicTheme;
  onOpenReflectionModal: () => void;
}

const commonCardClasses = "my-8 p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1";
const sectionTitleClasses = "text-xl md:text-2xl font-semibold text-peace-blue-dark mb-4";
// const subSectionTitleClasses = "text-lg md:text-xl font-semibold text-peace-blue-primary mt-6 mb-3"; // Kept for reference, not used directly in this file's example
const paragraphClasses = "text-gray-700 leading-relaxed mb-3 text-sm sm:text-base";

const DynamicThemePage: React.FC<DynamicThemePageProps> = ({ theme, onOpenReflectionModal }) => {
  const themeTitleEncoded = encodeURIComponent(theme.title.replace(/\s+/g, '+'));
  return (
    <div id={`theme-${theme.slug}`}>
      <section id="intro-curador" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}>
          <ClockIcon className="w-6 h-6 mr-3 text-peace-blue-primary" />
          Introdução e Justificativa (Agente Curador de Temas)
        </h2>
        <p className={paragraphClasses}>{theme.content.curatorJustification}</p>
      </section>

      <section id="pesquisa-inicial" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}>
          <BookIcon className="w-6 h-6 mr-3 text-peace-gray-icon" />
          Análise e Pesquisa Inicial (Agente Pesquisador)
        </h2>
        <p className={paragraphClasses}>{theme.content.researchSummary}</p>
      </section>

      <section id="verificacao-fatos" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}>
          <CheckIcon className="w-6 h-6 mr-3 text-peace-blue-primary" />
          Verificação de Informações Chave (Agente Verificador de Fatos)
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          {theme.content.factCheckHighlights.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </section>

      <section id="exposicao-dialogica" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}>
          <UserGroupIcon className="w-6 h-6 mr-3 text-peace-blue-primary" />
          Explorando Perspectivas (Agente Redator)
        </h2>
        <p className={paragraphClasses}>{theme.content.dialogicExposition.introduction}</p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {theme.content.dialogicExposition.perspectives.map(p => (
            <div key={p.id} className="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-md font-semibold text-peace-blue-dark mb-2">{p.title}</h3>
              <img 
                src={p.imageUrl} 
                alt={`Ilustração para ${p.title}`}
                className="my-2 rounded-md shadow-sm mx-auto max-w-full h-auto"
                onError={(e) => { 
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src=`https://placehold.co/400x250/cccccc/969696?text=Erro+ao+carregar+imagem+para+${encodeURIComponent(p.title.substring(0,20))}`; 
                }}
              />
              <p className="text-gray-600 text-xs leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Section for Convergence and Divergence */}
      <section id="convergencia-divergencia" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}>
          <FlowChartIcon className="w-6 h-6 mr-3 text-peace-blue-primary" />
          {theme.content.dialogicExposition.convergenceDivergence.title}
        </h2>
        <p className={paragraphClasses}>{theme.content.dialogicExposition.convergenceDivergence.introduction}</p>
        
        {theme.content.dialogicExposition.convergenceDivergence.imageUrl && (
            <div className="my-4 text-center">
                <img 
                    src={theme.content.dialogicExposition.convergenceDivergence.imageUrl} 
                    alt={`Visualização de ${theme.content.dialogicExposition.convergenceDivergence.title.replace(/:/g, '')}`}
                    className="rounded-md shadow-sm mx-auto max-w-xs h-auto"
                    onError={(e) => { 
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src=`https://placehold.co/300x150/cccccc/969696?text=Erro+Diagrama+${themeTitleEncoded.substring(0,20)}`; 
                    }}
                />
            </div>
        )}

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-semibold text-green-600 mb-2">Pontos de Convergência Potencial:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              {theme.content.dialogicExposition.convergenceDivergence.convergences.map((item, index) => (
                <li key={`conv-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-red-600 mb-2">Principais Pontos de Divergência:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              {theme.content.dialogicExposition.convergenceDivergence.divergences.map((item, index) => (
                <li key={`div-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="adaptacao-acessivel" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}>
          <LeafIcon className="w-6 h-6 mr-3 text-peace-green-primary" />
          Tornando Acessível (Agente Educador Popular)
        </h2>
        <p className={paragraphClasses}>{theme.content.accessibleAdaptation}</p>
      </section>
      
      <section id="conclusao-provisoria" className={`${commonCardClasses} text-center`}>
        <h2 className={`${sectionTitleClasses} flex items-center justify-center`}>
            <GlobeIcon className="w-6 h-6 mr-3 text-peace-blue-primary" />
            Conclusão Provisória e Próximos Passos
        </h2>
        <p className={paragraphClasses}>{theme.content.provisionalConclusion}</p>
        <button 
          onClick={onOpenReflectionModal}
          className="btn-peace bg-peace-blue-primary hover:bg-peace-blue-primary-darker text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 mt-4"
          aria-label={`Deixe uma Mensagem de Reflexão sobre ${theme.title}`}
        >
          Deixe sua Reflexão sobre "{theme.title.length > 20 ? theme.title.substring(0,17)+'...' : theme.title}"
        </button>
      </section>
    </div>
  );
};

export default DynamicThemePage;
