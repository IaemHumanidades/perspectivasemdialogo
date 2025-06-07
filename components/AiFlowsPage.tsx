
import React from 'react';

const AiFlowsPage: React.FC = () => {
  const commonCardClasses = "my-8 p-6 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl";
  const sectionTitleClasses = "text-xl md:text-2xl font-semibold text-peace-blue-dark mb-6";
  const flowTitleClasses = "text-lg md:text-xl font-semibold text-peace-blue-primary mt-6 mb-4";
  const subHeadingClasses = "text-md font-semibold text-gray-800 mt-4 mb-2";
  const paragraphClasses = "text-gray-700 leading-relaxed mb-3 text-sm sm:text-base";
  const listClasses = "list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base";
  const sequenceDiagramClasses = "bg-gray-100 p-4 rounded-md text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-normal shadow-inner";

  const renderSequenceDiagram = (diagram: string) => (
    <pre className={sequenceDiagramClasses}>{diagram.trim()}</pre>
  );

  const flow1Diagram = `
    participant CT as Agente Curador de Temas
    participant P as Agente Pesquisador
    participant VF as Agente Verificador de Fatos
    participant R as Agente Redator
    participant EP as Agente Educador Popular
    
    CT->>CT: Monitora tendências e sugestões da comunidade
    CT->>CT: Avalia relevância, potencial dialógico e impacto social
    CT->>P: Envia tema selecionado com justificativa
    P->>P: Pesquisa fontes acadêmicas e dados verificáveis
    P->>VF: Solicita verificação de informações críticas
    VF->>P: Retorna relatório de confiabilidade
    P->>R: Envia resumo técnico com referências
    R->>R: Transforma em exposição dialógica
    R->>EP: Solicita adaptações para diferentes públicos
    EP->>R: Retorna versões adaptadas
    R->>CT: Envia debate estruturado para aprovação
    CT->>CT: Valida alinhamento com objetivos e princípios
  `;

  const flow2Diagram = `
    participant AE as Agente de Análise de Emoções
    participant MC as Agente Mediador de Conflitos
    participant VF as Agente Verificador de Fatos
    participant EP as Agente Educador Popular
    
    AE->>AE: Monitora continuamente o tom emocional das interações
    AE->>AE: Detecta padrões de tensão ou hostilidade
    
    alt Tensão Detectada
        AE->>MC: Alerta sobre risco de conflito com contexto
        MC->>MC: Analisa natureza e gravidade do conflito
        MC->>MC: Desenvolve estratégia de mediação
        
        alt Conflito Baseado em Fatos
            MC->>VF: Solicita verificação de alegações disputadas
            VF->>MC: Retorna análise factual
            MC->>MC: Incorpora fatos verificados na mediação
        end
        
        alt Conflito de Compreensão
            MC->>EP: Solicita reformulação de conceitos complexos
            EP->>MC: Retorna explicações acessíveis
            MC->>MC: Incorpora explicações na mediação
        end
        
        MC->>AE: Implementa intervenção e solicita monitoramento
        AE->>MC: Fornece feedback sobre impacto emocional da intervenção
    end
  `;
  
  const flow3Diagram = `
    participant VF as Agente Verificador de Fatos
    participant P as Agente Pesquisador
    participant R as Agente Redator
    participant EP as Agente Educador Popular
    
    VF->>VF: Monitora afirmações feitas nos debates
    VF->>VF: Identifica alegações verificáveis
    
    alt Informação Verificável
        VF->>P: Solicita pesquisa aprofundada
        P->>VF: Retorna dados e fontes
        VF->>VF: Analisa e classifica confiabilidade
        
        alt Informação Incorreta ou Imprecisa
            VF->>R: Solicita contextualização
            R->>VF: Retorna correção contextualizada
            VF->>EP: Solicita adaptação da correção
            EP->>VF: Retorna versão acessível
        end
        
        VF->>VF: Prepara relatório de verificação
    end
  `;

  const flow4Diagram = `
    participant EP as Agente Educador Popular
    participant R as Agente Redator
    participant P as Agente Pesquisador
    participant AE as Agente de Análise de Emoções
    
    EP->>EP: Analisa conteúdo do debate
    EP->>EP: Identifica conceitos complexos e terminologia especializada
    
    EP->>P: Solicita explicações adicionais de conceitos técnicos
    P->>EP: Fornece definições e contexto
    
    EP->>R: Solicita reformulação linguística
    R->>EP: Retorna versões com diferentes níveis de complexidade
    
    EP->>AE: Consulta sobre impacto emocional do tema
    AE->>EP: Fornece insights sobre sensibilidades culturais
    
    EP->>EP: Desenvolve materiais adaptados (texto, visual, áudio)
    EP->>EP: Aplica princípios de design universal
  `;

  const flow5Diagram = `
    participant AE as Agente de Análise de Emoções
    participant MC as Agente Mediador de Conflitos
    participant CT as Agente Curador de Temas
    participant EP as Agente Educador Popular
    
    AE->>AE: Monitora continuamente interações
    AE->>AE: Analisa padrões emocionais e linguísticos
    
    alt Padrão Problemático Detectado
        AE->>MC: Alerta sobre dinâmica negativa
        MC->>AE: Solicita análise detalhada
        AE->>MC: Fornece relatório de padrões
        
        alt Tema Sensível
            MC->>CT: Consulta sobre contexto do tema
            CT->>MC: Fornece contexto histórico e social
        end
        
        MC->>EP: Solicita estratégias de comunicação construtiva
        EP->>MC: Sugere abordagens pedagógicas
        
        MC->>AE: Implementa intervenções sutis
        AE->>AE: Monitora mudanças no clima emocional
    end
    
    AE->>AE: Gera relatórios periódicos de saúde do debate
  `;

  const flow6Diagram = `
    participant R as Agente Redator
    participant P as Agente Pesquisador
    participant CT as Agente Curador de Temas
    participant EP as Agente Educador Popular
    
    R->>R: Monitora desenvolvimento do debate
    R->>R: Identifica pontos de convergência e divergência
    
    R->>P: Solicita verificação de novos argumentos
    P->>R: Fornece contexto adicional e fontes
    
    R->>R: Sintetiza estado atual do debate
    R->>CT: Propõe evolução ou ramificação do tema
    
    CT->>CT: Avalia potencial da nova direção
    CT->>R: Aprova ou sugere ajustes
    
    R->>EP: Solicita adaptação da síntese
    EP->>R: Retorna versões acessíveis
    
    R->>R: Prepara atualização do debate
  `;

  const flow7Diagram = `
    participant Todos as Todos os Agentes
    participant Orq as Orquestrador
    participant Comitê as Comitê de Ética
    participant Usuários as Feedback de Usuários
    
    Todos->>Orq: Reportam métricas de operação
    Orq->>Orq: Analisa conformidade com diretrizes
    
    alt Dilema Ético Detectado
        Orq->>Comitê: Escala para revisão humana
        Comitê->>Orq: Fornece orientação
        Orq->>Todos: Atualiza parâmetros de operação
    end
    
    Usuários->>Orq: Fornecem feedback sobre agentes
    Orq->>Orq: Analisa padrões de feedback
    
    Orq->>Todos: Ajusta comportamentos baseado em feedback
    Orq->>Comitê: Reporta periodicamente desempenho e desafios
  `;


  return (
    <div id="ai-flows-page">
      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Fluxos de Interação e Colaboração entre os Agentes de IA</h2>
        <p className={paragraphClasses}>
          Este documento detalha os fluxos de interação e colaboração entre os sete agentes de IA do aplicativo "Perspectivas em Diálogo", especificando como eles trabalham em conjunto para criar um ambiente dialógico, seguro e ético de discussão pública.
        </p>
      </section>

      {/* Flow 1 */}
      <section className={commonCardClasses}>
        <h3 className={flowTitleClasses}>1. Fluxo de Curadoria e Criação de Debates</h3>
        <p className={`${paragraphClasses} font-semibold`}>Objetivo:</p>
        <p className={paragraphClasses}>Identificar temas relevantes e criar debates estruturados com múltiplas perspectivas, baseados em informações confiáveis e apresentados de forma acessível.</p>
        <h4 className={subHeadingClasses}>Sequência de Interações:</h4>
        {renderSequenceDiagram(flow1Diagram)}
        <h4 className={subHeadingClasses}>Pontos de Decisão e Controle:</h4>
        <ol className={`${listClasses} list-decimal`}>
          <li>Seleção de Temas: O Agente Curador aplica critérios de relevância social, potencial dialógico e diversidade temática.</li>
          <li>Validação de Fontes: O Agente Verificador avalia a confiabilidade das informações antes da redação final.</li>
          <li>Revisão de Viés: Análise cruzada entre Agente Redator e Educador Popular para garantir pluralidade de perspectivas.</li>
          <li>Aprovação Final: O Agente Curador valida se o debate atende aos critérios de qualidade e alinhamento ético.</li>
        </ol>
        <h4 className={subHeadingClasses}>Métricas de Qualidade:</h4>
        <ul className={listClasses}>
          <li>Diversidade de fontes e perspectivas</li>
          <li>Precisão factual das informações</li>
          <li>Acessibilidade linguística</li>
          <li>Potencial de engajamento construtivo</li>
        </ul>
      </section>

      {/* Flow 2 */}
      <section className={commonCardClasses}>
        <h3 className={flowTitleClasses}>2. Fluxo de Moderação e Mediação de Interações</h3>
        <p className={`${paragraphClasses} font-semibold`}>Objetivo:</p>
        <p className={paragraphClasses}>Garantir que as interações entre participantes sejam respeitosas, construtivas e orientadas ao diálogo, intervindo quando necessário para prevenir ou resolver conflitos.</p>
        <h4 className={subHeadingClasses}>Sequência de Interações:</h4>
        {renderSequenceDiagram(flow2Diagram)}
        <h4 className={subHeadingClasses}>Pontos de Decisão e Controle:</h4>
        <ol className={`${listClasses} list-decimal`}>
          <li>Detecção de Tensão: O Agente de Análise de Emoções utiliza limites adaptativos para identificar riscos.</li>
          <li>Classificação de Conflitos: O Agente Mediador categoriza o tipo de conflito para determinar a abordagem.</li>
          <li>Escalação: Protocolo claro para quando um conflito deve ser encaminhado para moderação humana.</li>
          <li>Avaliação de Impacto: Monitoramento contínuo para verificar se a intervenção foi eficaz.</li>
        </ol>
        <h4 className={subHeadingClasses}>Métricas de Qualidade:</h4>
        <ul className={listClasses}>
          <li>Taxa de desescalada de conflitos</li>
          <li>Percepção de justiça pelos participantes</li>
          <li>Continuidade do diálogo após intervenções</li>
          <li>Minimização de intervenções desnecessárias</li>
        </ul>
      </section>

      {/* Flow 3 */}
      <section className={commonCardClasses}>
        <h3 className={flowTitleClasses}>3. Fluxo de Verificação e Contextualização de Informações</h3>
        <p className={`${paragraphClasses} font-semibold`}>Objetivo:</p>
        <p className={paragraphClasses}>Garantir a qualidade e confiabilidade das informações compartilhadas nos debates, oferecendo contexto e verificação factual.</p>
        <h4 className={subHeadingClasses}>Sequência de Interações:</h4>
        {renderSequenceDiagram(flow3Diagram)}
        <h4 className={subHeadingClasses}>Pontos de Decisão e Controle:</h4>
        <ol className={`${listClasses} list-decimal`}>
          <li>Seleção de Alegações: Priorização de afirmações com maior impacto potencial no debate.</li>
          <li>Classificação de Confiabilidade: Escala clara e transparente para avaliar a precisão das informações.</li>
          <li>Abordagem de Correções: Estratégias diferenciadas para informações incorretas vs. imprecisas vs. enganosas.</li>
          <li>Transparência Metodológica: Documentação clara do processo de verificação.</li>
        </ol>
        <h4 className={subHeadingClasses}>Métricas de Qualidade:</h4>
        <ul className={listClasses}>
          <li>Precisão das verificações</li>
          <li>Tempo de resposta para alegações críticas</li>
          <li>Aceitação das correções pelos participantes</li>
          <li>Impacto educativo das verificações</li>
        </ul>
      </section>

      {/* Flow 4 */}
      <section className={commonCardClasses}>
        <h3 className={flowTitleClasses}>4. Fluxo de Adaptação Educacional e Acessibilidade</h3>
        <p className={`${paragraphClasses} font-semibold`}>Objetivo:</p>
        <p className={paragraphClasses}>Tornar os debates e seus conteúdos acessíveis a públicos diversos, adaptando linguagem, formato e abordagem pedagógica.</p>
        <h4 className={subHeadingClasses}>Sequência de Interações:</h4>
        {renderSequenceDiagram(flow4Diagram)}
        <h4 className={subHeadingClasses}>Pontos de Decisão e Controle:</h4>
        <ol className={`${listClasses} list-decimal`}>
          <li>Identificação de Públicos: Mapeamento de diferentes perfis de usuários e suas necessidades.</li>
          <li>Níveis de Adaptação: Definição clara dos níveis de complexidade e formatos disponíveis.</li>
          <li>Validação Cultural: Processo para garantir que adaptações respeitem contextos culturais diversos.</li>
          <li>Feedback de Usuários: Mecanismos para avaliar a eficácia das adaptações.</li>
        </ol>
        <h4 className={subHeadingClasses}>Métricas de Qualidade:</h4>
        <ul className={listClasses}>
          <li>Compreensão por diferentes públicos</li>
          <li>Diversidade de formatos disponíveis</li>
          <li>Preservação da integridade conceitual</li>
          <li>Engajamento de públicos tradicionalmente excluídos</li>
        </ul>
      </section>

      {/* Flow 5 */}
      <section className={commonCardClasses}>
        <h3 className={flowTitleClasses}>5. Fluxo de Análise de Impacto Socioemocional</h3>
        <p className={`${paragraphClasses} font-semibold`}>Objetivo:</p>
        <p className={paragraphClasses}>Monitorar o clima emocional dos debates, identificar padrões problemáticos e promover interações saudáveis.</p>
        <h4 className={subHeadingClasses}>Sequência de Interações:</h4>
        {renderSequenceDiagram(flow5Diagram)}
        <h4 className={subHeadingClasses}>Pontos de Decisão e Controle:</h4>
        <ol className={`${listClasses} list-decimal`}>
          <li>Limiares Adaptativos: Ajuste dinâmico dos níveis de alerta baseado no contexto do debate.</li>
          <li>Privacidade: Garantia de que a análise emocional respeite limites éticos e de privacidade.</li>
          <li>Contextualização Cultural: Consideração de diferenças culturais na expressão emocional.</li>
          <li>Intervenção Gradual: Escala de intervenções proporcional à gravidade da situação.</li>
        </ol>
        <h4 className={subHeadingClasses}>Métricas de Qualidade:</h4>
        <ul className={listClasses}>
          <li>Diversidade emocional saudável nos debates</li>
          <li>Redução de padrões tóxicos de interação</li>
          <li>Percepção de segurança psicológica pelos participantes</li>
          <li>Capacidade de abordar temas sensíveis de forma construtiva</li>
        </ul>
      </section>

       {/* Flow 6 */}
      <section className={commonCardClasses}>
        <h3 className={flowTitleClasses}>6. Fluxo de Síntese e Evolução de Debates</h3>
        <p className={`${paragraphClasses} font-semibold`}>Objetivo:</p>
        <p className={paragraphClasses}>Capturar insights, convergências e divergências dos debates, promovendo evolução do diálogo e aprendizado coletivo.</p>
        <h4 className={subHeadingClasses}>Sequência de Interações:</h4>
        {renderSequenceDiagram(flow6Diagram)}
        <h4 className={subHeadingClasses}>Pontos de Decisão e Controle:</h4>
        <ol className={`${listClasses} list-decimal`}>
          <li>Timing de Sínteses: Determinação do momento ideal para introduzir sínteses.</li>
          <li>Identificação de Padrões: Critérios para reconhecer convergências significativas.</li>
          <li>Evolução Temática: Processo para decidir quando um debate deve evoluir ou ramificar.</li>
          <li>Preservação de Contribuições: Garantia de que todas as perspectivas relevantes sejam representadas.</li>
        </ol>
        <h4 className={subHeadingClasses}>Métricas de Qualidade:</h4>
        <ul className={listClasses}>
          <li>Profundidade e evolução dos debates ao longo do tempo</li>
          <li>Capacidade de identificar pontos de consenso emergente</li>
          <li>Satisfação dos participantes com as sínteses</li>
          <li>Geração de novos insights e direções</li>
        </ul>
      </section>

      {/* Flow 7 */}
      <section className={commonCardClasses}>
        <h3 className={flowTitleClasses}>7. Fluxo de Governança e Supervisão Ética</h3>
        <p className={`${paragraphClasses} font-semibold`}>Objetivo:</p>
        <p className={paragraphClasses}>Garantir que todos os agentes operem dentro de parâmetros éticos, com transparência e prestação de contas.</p>
        <h4 className={subHeadingClasses}>Sequência de Interações:</h4>
        {renderSequenceDiagram(flow7Diagram)}
        <h4 className={subHeadingClasses}>Pontos de Decisão e Controle:</h4>
        <ol className={`${listClasses} list-decimal`}>
          <li>Monitoramento Contínuo: Sistemas automatizados para detectar desvios de comportamento esperado.</li>
          <li>Escalação Clara: Critérios definidos para quando uma decisão deve ser escalada para humanos.</li>
          <li>Feedback Integrado: Incorporação sistemática do feedback de usuários no aprimoramento dos agentes.</li>
          <li>Transparência: Documentação acessível de todos os processos de governança.</li>
        </ol>
        <h4 className={subHeadingClasses}>Métricas de Qualidade:</h4>
        <ul className={listClasses}>
          <li>Conformidade com diretrizes éticas</li>
          <li>Tempo de resposta para dilemas éticos</li>
          <li>Diversidade de perspectivas no comitê de supervisão</li>
          <li>Satisfação dos usuários com a governança do sistema</li>
        </ul>
      </section>

      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Integração com o Aplicativo Perspectivas em Diálogo</h2>
        <h3 className={subHeadingClasses}>Interface de Usuário</h3>
        <ul className={listClasses}>
          <li>Indicadores claros de quando um agente está atuando</li>
          <li>Opções para solicitar intervenção específica de agentes</li>
          <li>Mecanismos de feedback sobre a atuação dos agentes</li>
          <li>Transparência sobre limitações e capacidades</li>
        </ul>
        <h3 className={subHeadingClasses}>Controles de Privacidade</h3>
        <ul className={listClasses}>
          <li>Configurações granulares sobre quais agentes podem analisar contribuições</li>
          <li>Opções de anonimização para análise emocional</li>
          <li>Consentimento explícito para uso de contribuições em sínteses</li>
        </ul>
        <h3 className={subHeadingClasses}>Acessibilidade</h3>
        <ul className={listClasses}>
          <li>Múltiplos formatos para interagir com os agentes (texto, voz, visual)</li>
          <li>Adaptação automática baseada em necessidades do usuário</li>
          <li>Linguagem inclusiva e respeitosa em todas as interações</li>
        </ul>
      </section>

      <section className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Considerações de Implementação</h2>
        <h3 className={subHeadingClasses}>Priorização de Desenvolvimento</h3>
        <ol className={`${listClasses} list-decimal`}>
          <li>Fluxos essenciais para lançamento inicial:
            <ul className="list-disc list-inside ml-5 mt-1">
                <li>Curadoria e Criação de Debates</li>
                <li>Verificação e Contextualização de Informações</li>
                <li>Governança e Supervisão Ética</li>
            </ul>
          </li>
          <li>Fluxos para segunda fase:
            <ul className="list-disc list-inside ml-5 mt-1">
                <li>Moderação e Mediação de Interações</li>
                <li>Adaptação Educacional e Acessibilidade</li>
            </ul>
          </li>
          <li>Fluxos para terceira fase:
            <ul className="list-disc list-inside ml-5 mt-1">
                <li>Análise de Impacto Socioemocional</li>
                <li>Síntese e Evolução de Debates</li>
            </ul>
          </li>
        </ol>
        <h3 className={subHeadingClasses}>Requisitos Técnicos</h3>
        <ul className={listClasses}>
          <li>APIs para fontes de dados confiáveis</li>
          <li>Infraestrutura de processamento de linguagem natural</li>
          <li>Sistemas de armazenamento seguro e ético</li>
          <li>Mecanismos de auditoria e logging</li>
        </ul>
        <h3 className={subHeadingClasses}>Validação e Testes</h3>
        <ul className={listClasses}>
          <li>Testes com grupos diversos de usuários</li>
          <li>Simulações de cenários críticos</li>
          <li>Avaliação por especialistas em ética, educação e mediação</li>
          <li>Períodos de operação supervisionada antes de autonomia completa</li>
        </ul>
        <p className={`${paragraphClasses} mt-4 text-xs italic`}>
            Este documento serve como guia detalhado para a implementação dos fluxos de interação entre os sete agentes de IA do aplicativo Perspectivas em Diálogo.
        </p>
      </section>
    </div>
  );
};

export default AiFlowsPage;
