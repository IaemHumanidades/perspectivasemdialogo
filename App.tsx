
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage'; // New component
import IsraelPalestineSection from './components/IsraelPalestineSection';
import IndigenousPeoplesSection from './components/IndigenousPeoplesSection/IndigenousPeoplesSection';
import SupportProjectPage from './components/SupportProjectPage'; // New Support Page
import AiArchitecturePage from './components/AiArchitecturePage'; // New AI Architecture Page
import AiFlowsPage from './components/AiFlowsPage'; // New AI Flows Page
import DynamicThemePage, { DynamicTheme } from './components/DynamicThemePage'; // New Dynamic Theme Page
import Footer from './components/Footer';
import ReflectionModal from './components/ReflectionModal';
import { generateSlug } from './utils/slugUtils'; // Helper for generating slugs

export type PageView = 'home' | 'israel-palestina' | 'povos-indigenas' | 'apoie' | 'ai-architecture' | 'ai-flows' | string; // string for dynamic theme slugs
export type ModalType = 'reflection' | 'addTheme';

// Simulates the AI content generation for a new theme
const generateSimulatedAiContentForTheme = (themeTitle: string): DynamicTheme['content'] => {
  const themeTitleEncoded = encodeURIComponent(themeTitle);
  const themeTitlePlaceholder = (text: string) => text.replace(/\s+/g, '+'); // Helper for placehold.co text

  return {
    curatorJustification: `O tema "${themeTitle}" foi selecionado por sua proeminente relevância nos debates contemporâneos e seu vasto potencial para fomentar um diálogo enriquecedor. Alinhado com a missão do 'Perspectivas em Diálogo', buscamos explorar as múltiplas facetas de "${themeTitle}", incentivando a compreensão mútua e a busca por caminhos construtivos. A curadoria visa não apenas apresentar informações, mas catalisar uma reflexão crítica e colaborativa. (Simulado pelo Agente Curador de Temas)`,
    researchSummary: `Uma pesquisa exploratória abrangente sobre "${themeTitle}" revelou um campo rico e complexo, com uma diversidade de fontes acadêmicas, relatos históricos, análises de políticas e vivências pessoais. As áreas chave de investigação simulada incluíram: análise de discurso das principais narrativas, levantamento de dados estatísticos relevantes, e estudo comparativo de abordagens em diferentes contextos. O objetivo é prover uma base sólida e multifacetada para o diálogo. (Simulado pelo Agente Pesquisador)`,
    factCheckHighlights: [
      `Fato Central sobre "${themeTitle}": Verificado em múltiplas fontes independentes, essencial para a compreensão do tema. (Simulado pelo Agente Verificador de Fatos)`,
      `Interpretação Comum de "${themeTitle}": Embora popular, esta visão carece de nuances importantes e será analisada criticamente. (Simulado pelo Agente Verificador de Fatos)`,
      `Controvérsia em "${themeTitle}": Um ponto de debate acirrado, com dados apresentados por diferentes lados que requerem exame cuidadoso. (Simulado pelo Agente Verificador de Fatos)`,
      `Implicação de "${themeTitle}": Uma consequência frequentemente negligenciada, mas com impacto significativo, suportada por estudos de caso. (Simulado pelo Agente Verificador de Fatos)`
    ],
    dialogicExposition: {
      introduction: `A seguir, iniciamos uma exploração dialógica de "${themeTitle}", apresentando diferentes ângulos e fomentando uma análise crítica. O intuito é iluminar a complexidade do tema e incentivar um debate respeitoso e produtivo, reconhecendo a validade em diversas argumentações. (Simulado pelo Agente Redator)`,
      perspectives: [
        {
          id: 'p1',
          title: `Visão Consolidada sobre "${themeTitle}"`,
          text: `Esta perspectiva representa uma visão frequentemente encontrada nos debates sobre "${themeTitle}", delineando os argumentos principais que sustentam um entendimento mais tradicional ou estabelecido. Explora-se como "${themeTitle}" é geralmente percebido e quais são as justificativas comuns para essa interpretação. (Conteúdo simulado)`,
          imageUrl: `https://placehold.co/400x250/BFDBFE/1E40AF?text=Visão+Consolidada+${themeTitlePlaceholder(themeTitle)}`
        },
        {
          id: 'p2',
          title: `Visão Crítica/Alternativa sobre "${themeTitle}"`,
          text: `Em contraponto, esta perspectiva oferece uma análise crítica ou alternativa sobre "${themeTitle}", questionando premissas da visão consolidada e introduzindo novos fatores ou interpretações. O objetivo é ampliar o espectro do debate, considerando aspectos que podem ser negligenciados ou sub-representados. (Conteúdo simulado)`,
          imageUrl: `https://placehold.co/400x250/A7F3D0/059669?text=Visão+Crítica+${themeTitlePlaceholder(themeTitle)}`
        },
      ],
      convergenceDivergence: {
        title: `Pontos de Convergência e Divergência em "${themeTitle}"`,
        introduction: `Apesar das diferentes abordagens sobre "${themeTitle}", é possível identificar tanto áreas de potencial acordo (convergências) quanto pontos de clara discordância (divergências). Reconhecer esses elementos é crucial para um diálogo produtivo. (Simulado pelo Agente Redator e Mediador)`,
        convergences: [
          `Ambas as perspectivas geralmente concordam com a importância de [aspecto fundamental] no contexto de "${themeTitle}".`,
          `Há um reconhecimento mútuo de que [desafio comum] relacionado a "${themeTitle}" precisa ser enfrentado.`,
        ],
        divergences: [
          `As opiniões divergem significativamente sobre as causas primárias de [problema central] em "${themeTitle}".`,
          `Existe um debate acentuado sobre a eficácia e as implicações de [solução proposta A vs. solução B] para "${themeTitle}".`,
          `A interpretação de [dado ou evento chave] específico de "${themeTitle}" varia consideravelmente entre as diferentes visões.`,
        ],
        imageUrl: `https://placehold.co/300x150/D1D5DB/1F2937?text=Convergência+Divergência+${themeTitlePlaceholder(themeTitle)}`
      }
    },
    accessibleAdaptation: `Para tornar a discussão sobre "${themeTitle}" inclusiva, o conteúdo será adaptado em formatos variados: resumos executivos dos principais argumentos, glossário interativo de termos-chave, infográficos visuais para dados complexos, e vídeos curtos legendados. O objetivo é facilitar o entendimento e a participação de todos. (Simulado pelo Agente Educador Popular)`,
    provisionalConclusion: `Esta apresentação inicial sobre "${themeTitle}" serve como um convite à exploração e ao diálogo contínuo. As perspectivas e pontos aqui levantados são um ponto de partida, e a riqueza da discussão se dará pela contribuição ativa da comunidade, trazendo novas evidências, experiências e questionamentos. Encorajamos a todos a participar na construção de um entendimento mais completo e na busca por soluções inovadoras para "${themeTitle}". (Simulado)`
  };
};


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [modalContent, setModalContent] = useState<ModalType | null>(null);
  const [dynamicThemes, setDynamicThemes] = useState<DynamicTheme[]>([]);

  const openModal = (type: ModalType) => setModalContent(type);
  const closeModal = () => setModalContent(null);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAddDynamicTheme = (themeTitle: string) => {
    if (!themeTitle.trim()) return;

    const newSlug = generateSlug(themeTitle);
    // Prevent duplicate slugs, though less likely with detailed titles
    if (dynamicThemes.some(theme => theme.slug === newSlug) || ['home', 'israel-palestina', 'povos-indigenas', 'apoie', 'ai-architecture', 'ai-flows'].includes(newSlug)) {
      alert("Um tema com nome similar já existe ou o nome é reservado. Por favor, tente um título mais específico.");
      return;
    }

    const newTheme: DynamicTheme = {
      id: Date.now().toString(), // Simple unique ID
      title: themeTitle,
      slug: newSlug,
      content: generateSimulatedAiContentForTheme(themeTitle),
    };
    setDynamicThemes(prevThemes => [...prevThemes, newTheme]);
    closeModal();
    navigateTo(newSlug); // Navigate to the newly created theme page
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  let headerTitle = "PERSPECTIVAS EM DIÁLOGO";
  let headerSubtitle = "Semeando a Esperança";

  const currentDynamicTheme = dynamicThemes.find(theme => theme.slug === currentPage);

  if (currentDynamicTheme) {
    headerTitle = currentDynamicTheme.title.toUpperCase();
    headerSubtitle = "Explorando Novas Perspectivas Comunitárias";
  } else if (currentPage === 'israel-palestina') {
    headerTitle = "Cultura de Paz para Israel e Palestina";
    headerSubtitle = "Um Caminho Didático e Assertivo para a Solução";
  } else if (currentPage === 'povos-indigenas') {
    headerTitle = "Povos Indígenas e Colonização";
    headerSubtitle = "Diálogos para Compreensão e Respeito";
  } else if (currentPage === 'apoie') {
    headerTitle = "APOIE O 'PERSPECTIVAS'";
    headerSubtitle = "Ajude-nos a Cultivar o Diálogo e a Esperança";
  } else if (currentPage === 'ai-architecture') {
    headerTitle = "ARQUITETURA DE IA DO 'PERSPECTIVAS'";
    headerSubtitle = "Promovendo Diálogo Ético e Construtivo";
  } else if (currentPage === 'ai-flows') {
    headerTitle = "FLUXOS DE INTERAÇÃO DOS AGENTES DE IA";
    headerSubtitle = "Colaboração para um Diálogo Ético e Eficaz";
  } else if (currentPage === 'home') {
     headerTitle = "PERSPECTIVAS EM DIÁLOGO";
     headerSubtitle = "Semeando a Esperança";
  }
  
  const renderBackButton = () => (
    <button 
      onClick={() => navigateTo('home')} 
      className="mb-6 inline-flex items-center text-peace-blue-primary hover:text-peace-blue-dark font-semibold transition-colors duration-300"
      aria-label="Voltar à Página Inicial"
    >
      <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      Voltar à Página Inicial
    </button>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={headerTitle} subtitle={headerSubtitle} />
      {currentPage === 'home' && (
        <HomePage
          onNavigate={navigateTo}
          onOpenAddThemeModal={() => openModal('addTheme')}
          dynamicThemes={dynamicThemes}
        />
      )}
      {currentPage === 'israel-palestina' && (
        <main className="container mx-auto p-4 md:p-8 flex-grow">
          {renderBackButton()}
          <IsraelPalestineSection onOpenReflectionModal={() => openModal('reflection')} />
        </main>
      )}
      {currentPage === 'povos-indigenas' && (
        <main className="container mx-auto p-4 md:p-8 flex-grow">
           {renderBackButton()}
          <IndigenousPeoplesSection onOpenReflectionModal={() => openModal('reflection')} />
        </main>
      )}
      {currentPage === 'apoie' && (
         <main className="container mx-auto p-4 md:p-8 flex-grow">
           {renderBackButton()}
          <SupportProjectPage />
        </main>
      )}
      {currentPage === 'ai-architecture' && (
         <main className="container mx-auto p-4 md:p-8 flex-grow">
           {renderBackButton()}
          <AiArchitecturePage onNavigate={navigateTo} />
        </main>
      )}
      {currentPage === 'ai-flows' && (
         <main className="container mx-auto p-4 md:p-8 flex-grow">
           {renderBackButton()}
          <AiFlowsPage />
        </main>
      )}
      {currentDynamicTheme && (
        <main className="container mx-auto p-4 md:p-8 flex-grow">
          {renderBackButton()}
          <DynamicThemePage 
            theme={currentDynamicTheme} 
            onOpenReflectionModal={() => openModal('reflection')} 
          />
        </main>
      )}
      <Footer />
      {modalContent && (
        <ReflectionModal
          onClose={closeModal}
          contentType={modalContent}
          onAddTheme={handleAddDynamicTheme}
        />
      )}
    </div>
  );
};

export default App;
