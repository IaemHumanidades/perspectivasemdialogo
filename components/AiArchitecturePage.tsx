
import React from 'react';
import type { PageView } from '../App';
import { FlowChartIcon } from './icons/FlowChartIcon'; // New Icon

interface AiArchitecturePageProps {
  onNavigate: (page: PageView) => void;
}

const AiArchitecturePage: React.FC<AiArchitecturePageProps> = ({ onNavigate }) => {
  const commonCardClasses = "my-8 p-6 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl";
  const sectionTitleClasses = "text-xl md:text-2xl font-semibold text-peace-blue-dark mb-6";
  const subSectionTitleClasses = "text-lg md:text-xl font-semibold text-peace-blue-primary mt-6 mb-4";
  const itemTitleClasses = "text-md font-semibold text-gray-800 mb-1";
  const paragraphClasses = "text-gray-700 leading-relaxed mb-3 text-sm sm:text-base";
  const listClasses = "list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base";
  const subListClasses = "list-circle list-inside ml-4 space-y-1 text-gray-600 text-sm";

  interface AgentProps {
    name: string;
    details: {
      entradas: string;
      processamento: string;
      saidas: string;
      interfaces: string;
      salvaguardas: string;
    };
  }

  const AgentDetail: React.FC<AgentProps> = ({ name, details }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm mb-4">
      <h5 className="text-md font-bold text-peace-green-dark mb-2">{name}</h5>
      <ul className="space-y-1 text-xs">
        <li><strong>Entradas:</strong> {details.entradas}</li>
        <li><strong>Processamento:</strong> {details.processamento}</li>
        <li><strong>Saídas:</strong> {details.saidas}</li>
        <li><strong>Interfaces:</strong> {details.interfaces}</li>
        <li><strong>Salvaguardas:</strong> {details.salvaguardas}</li>
      </ul>
    </div>
  );

  const specializedAgents: AgentProps[] = [
    { name: "1. Agente Pesquisador", details: { entradas: "Temas de debate, questões específicas", processamento: "Consulta a fontes acadêmicas, análise crítica de informações", saidas: "Resumos técnicos com referências formais", interfaces: "API de busca acadêmica, bases de dados verificadas", salvaguardas: "Verificação cruzada de fontes, transparência metodológica" } },
    { name: "2. Agente Redator", details: { entradas: "Resumos técnicos do Agente Pesquisador", processamento: "Transformação em textos acessíveis e dialógicos", saidas: "Exposições argumentativas com múltiplas perspectivas", interfaces: "Ferramentas de análise linguística, verificador de acessibilidade textual", salvaguardas: "Revisão de viés linguístico, verificação de inclusividade" } },
    { name: "3. Agente Curador de Temas", details: { entradas: "Tendências sociais, debates atuais, sugestões da comunidade", processamento: "Análise de relevância, potencial dialógico e impacto social", saidas: "Temas selecionados com justificativas e perguntas mobilizadoras", interfaces: "Monitoramento de tendências, feedback da comunidade", salvaguardas: "Diversidade temática, equilíbrio de perspectivas" } },
    { name: "4. Agente Mediador de Conflitos", details: { entradas: "Debates em andamento, indicadores de tensão", processamento: "Análise de polarização, identificação de pontos de convergência", saidas: "Estratégias de mediação, intervenções dialógicas", interfaces: "Monitoramento de interações, histórico de debates", salvaguardas: "Neutralidade, respeito à autonomia dos participantes" } },
    { name: "5. Agente Verificador de Fatos", details: { entradas: "Afirmações feitas nos debates", processamento: "Verificação de veracidade, análise de fontes", saidas: "Relatórios de confiabilidade, classificação de alegações", interfaces: "Bases de dados factuais, repositórios científicos", salvaguardas: "Metodologia transparente, atualização constante" } },
    { name: "6. Agente Educador Popular", details: { entradas: "Conteúdos debatidos, perfis de público-alvo", processamento: "Adaptação pedagógica, simplificação sem empobrecimento", saidas: "Materiais didáticos em múltiplos formatos e níveis", interfaces: "Recursos educacionais, feedback de acessibilidade", salvaguardas: "Respeito à diversidade cultural, validação com educadores" } },
    { name: "7. Agente de Análise de Emoções Públicas", details: { entradas: "Interações nos debates, linguagem utilizada", processamento: "Análise socioemocional, detecção de padrões problemáticos", saidas: "Alertas de risco, recomendações para restaurar diálogo", interfaces: "Monitoramento de tom e sentimento", salvaguardas: "Privacidade, contextualização cultural" } },
  ];

  return (
    <div id="ai-architecture-page">
      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Princípios Norteadores</h2>
        <ul className={listClasses}>
          <li><strong>Centralidade Humana:</strong> Os agentes de IA são ferramentas de apoio, não substituem o julgamento humano.</li>
          <li><strong>Transparência:</strong> Clareza sobre quando e como os agentes estão sendo utilizados.</li>
          <li><strong>Diversidade Epistêmica:</strong> Valorização de diferentes formas de conhecimento, incluindo saberes tradicionais.</li>
          <li><strong>Ética Deliberativa:</strong> Promoção de diálogo respeitoso e construção coletiva.</li>
          <li><strong>Mitigação de Viés:</strong> Processos contínuos para identificar e reduzir vieses algorítmicos.</li>
          <li><strong>Privacidade e Segurança:</strong> Proteção de dados pessoais e minimização de riscos.</li>
          <li><strong>Acessibilidade Universal:</strong> Garantia de uso por pessoas com diferentes necessidades.</li>
        </ul>
      </section>

      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Arquitetura Técnica</h2>

        <h3 className={subSectionTitleClasses}>1. Camada de Infraestrutura</h3>
        <ul className={listClasses}>
          <li><strong>Modelo de Implantação:</strong> Arquitetura cliente-servidor com processamento distribuído.</li>
          <li><strong>Armazenamento:</strong> Banco de dados segmentado (conteúdo público / dados sensíveis).</li>
          <li><strong>Segurança:</strong> Criptografia em trânsito e em repouso, autenticação multi-fator.</li>
          <li><strong>Escalabilidade:</strong> Capacidade de escalar horizontalmente conforme demanda.</li>
        </ul>

        <h3 className={subSectionTitleClasses}>2. Camada de Agentes</h3>
        <h4 className={itemTitleClasses}>2.1 Orquestrador de Agentes</h4>
        <ul className={subListClasses}>
          <li>Gerencia o fluxo de trabalho entre os agentes.</li>
          <li>Controla prioridades e sequenciamento de tarefas.</li>
          <li>Monitora desempenho e conformidade ética.</li>
        </ul>

        <h4 className={itemTitleClasses + " mt-4"}>2.2 Agentes Especializados</h4>
        {specializedAgents.map(agent => <AgentDetail key={agent.name} name={agent.name} details={agent.details} />)}

        <h3 className={subSectionTitleClasses}>3. Camada de Interface</h3>
        <h4 className={itemTitleClasses}>3.1 Painel de Controle dos Agentes</h4>
        <ul className={subListClasses}>
          <li>Interface administrativa para configuração e monitoramento.</li>
          <li>Visualização de métricas de desempenho e impacto.</li>
          <li>Controles de ativação/desativação de funcionalidades.</li>
        </ul>
        <h4 className={itemTitleClasses + " mt-4"}>3.2 Interfaces de Usuário</h4>
        <ul className={subListClasses}>
          <li>Integração transparente dos agentes na experiência do usuário.</li>
          <li>Indicadores claros de quando um conteúdo foi gerado por agentes.</li>
          <li>Mecanismos de feedback e correção.</li>
        </ul>
      </section>

      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Fluxos de Integração</h2>
        <div className="space-y-4">
          <div>
            <h3 className={subSectionTitleClasses}>1. Fluxo de Criação de Debate</h3>
            <p className={paragraphClasses}>Agente Curador → Agente Pesquisador → Agente Redator → Interface de Debate</p>
            <ol className="list-decimal list-inside ml-4 text-sm text-gray-600 space-y-1">
              <li>O Agente Curador identifica e propõe um tema relevante.</li>
              <li>O Agente Pesquisador coleta e analisa informações sobre o tema.</li>
              <li>O Agente Redator transforma as informações em exposição dialógica.</li>
              <li>A interface apresenta o debate aos usuários.</li>
            </ol>
          </div>
          <div>
            <h3 className={subSectionTitleClasses}>2. Fluxo de Participação em Debate</h3>
            <p className={paragraphClasses}>Contribuição do Usuário → Agente Verificador → Agente de Análise de Emoções → Interface de Debate</p>
             <ol className="list-decimal list-inside ml-4 text-sm text-gray-600 space-y-1">
              <li>Usuário contribui com perspectiva ou argumento.</li>
              <li>O Agente Verificador analisa a confiabilidade das informações.</li>
              <li>O Agente de Análise de Emoções avalia o tom e impacto emocional.</li>
              <li>A interface apresenta a contribuição com contexto apropriado.</li>
            </ol>
          </div>
          <div>
            <h3 className={subSectionTitleClasses}>3. Fluxo de Mediação de Conflitos</h3>
            <p className={paragraphClasses}>Detecção de Tensão → Agente de Análise de Emoções → Agente Mediador → Interface de Debate</p>
             <ol className="list-decimal list-inside ml-4 text-sm text-gray-600 space-y-1">
              <li>Sistema detecta aumento de tensão ou polarização.</li>
              <li>O Agente de Análise de Emoções avalia a natureza do conflito.</li>
              <li>O Agente Mediador propõe estratégias de diálogo.</li>
              <li>A interface implementa as estratégias de mediação.</li>
            </ol>
          </div>
          <div>
            <h3 className={subSectionTitleClasses}>4. Fluxo de Educação e Acessibilidade</h3>
            <p className={paragraphClasses}>Conteúdo do Debate → Agente Educador Popular → Interfaces Adaptadas</p>
             <ol className="list-decimal list-inside ml-4 text-sm text-gray-600 space-y-1">
              <li>Debate gera conteúdo complexo ou especializado.</li>
              <li>O Agente Educador Popular adapta para diferentes públicos.</li>
              <li>Interfaces alternativas apresentam versões adaptadas.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Conformidade Normativa</h2>
        <h3 className={subSectionTitleClasses}>ABNT ISO/IEC TR 24027:2024</h3>
        <ul className={listClasses}>
          <li><strong>Transparência Algorítmica:</strong> Documentação clara dos processos de cada agente.</li>
          <li><strong>Mitigação de Viés:</strong> Revisão contínua e diversificação de fontes.</li>
          <li><strong>Explicabilidade:</strong> Capacidade de justificar decisões e recomendações.</li>
          <li><strong>Auditabilidade:</strong> Registro de ações para verificação posterior.</li>
        </ul>
        <h3 className={subSectionTitleClasses}>Princípios da Democracia Deliberativa</h3>
        <ul className={listClasses}>
          <li><strong>Inclusão:</strong> Garantia de participação diversa e equitativa.</li>
          <li><strong>Reciprocidade:</strong> Promoção de escuta mútua e consideração de perspectivas.</li>
          <li><strong>Publicidade:</strong> Transparência nos processos deliberativos.</li>
          <li><strong>Responsividade:</strong> Capacidade de incorporar feedback e evoluir.</li>
        </ul>
      </section>

      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Considerações Éticas e Limitações</h2>
         <h3 className={itemTitleClasses}>Limitações Técnicas</h3>
        <ul className={subListClasses}>
            <li>Reconhecimento das fronteiras da capacidade dos agentes.</li>
            <li>Clareza sobre quando é necessária intervenção humana.</li>
            <li>Processos de fallback para situações imprevistas.</li>
        </ul>
      </section>
      
      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Supervisão Humana</h2>
        <ul className={listClasses}>
            <li>Comitê de Ética multidisciplinar para supervisão.</li>
            <li>Participação de especialistas em ciências humanas e saberes tradicionais.</li>
            <li>Mecanismos de revisão e veto por moderadores humanos.</li>
        </ul>
      </section>

      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Evolução Contínua</h2>
        <ul className={listClasses}>
            <li>Ciclos de feedback e aprimoramento.</li>
            <li>Adaptação a novos contextos sociais e tecnológicos.</li>
            <li>Compromisso com pesquisa e desenvolvimento responsável.</li>
        </ul>
      </section>

       <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Próximos Passos</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm sm:text-base">
          <li>Desenvolvimento de protótipos funcionais de cada agente.</li>
          <li>Testes de integração em ambiente controlado.</li>
          <li>Validação com grupos diversos de usuários.</li>
          <li>Implementação gradual no aplicativo Perspectivas em Diálogo.</li>
          <li>Monitoramento contínuo e ajustes baseados em feedback.</li>
        </ol>
        <p className={`${paragraphClasses} mt-4 text-xs italic`}>
            Este documento serve como base para o desenvolvimento e integração dos agentes de IA ao aplicativo Perspectivas em Diálogo, estabelecendo diretrizes técnicas, éticas e operacionais que garantem o alinhamento com a missão do projeto de promover diálogo construtivo e inclusivo na sociedade.
        </p>
      </section>

      <section className={`${commonCardClasses} text-center`}>
        <button
          onClick={() => onNavigate('ai-flows')}
          aria-label="Ver Fluxos de Interação dos Agentes de IA"
          className="inline-flex items-center justify-center bg-teal-600 text-white hover:bg-teal-700 py-3 px-8 rounded-lg font-semibold transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          <FlowChartIcon className="w-5 h-5 mr-2" />
          Ver Fluxos de Interação dos Agentes
        </button>
        <p className="text-sm text-gray-500 mt-2">Entenda como nossos agentes colaboram para um diálogo mais rico.</p>
      </section>
    </div>
  );
};

export default AiArchitecturePage;
