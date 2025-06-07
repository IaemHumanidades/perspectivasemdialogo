
import React from 'react';
import { ClockIcon } from './icons/ClockIcon';
import { CheckIcon } from './icons/CheckIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { LeafIcon } from './icons/LeafIcon';
import { GlobeIcon } from './icons/GlobeIcon';
import { BookIcon } from './icons/BookIcon';
import { FlowChartIcon } from './icons/FlowChartIcon'; // Import the icon

interface IsraelPalestineSectionProps {
  onOpenReflectionModal: () => void;
}

interface TimelineItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, isLast = false }) => {
  return (
    <div className="relative pl-[30px] pb-6">
      <div className="absolute left-[8px] top-[5px] w-3 h-3 bg-peace-blue-primary rounded-full z-10 border-2 border-white shadow"></div>
      {!isLast && (
        <div className="absolute left-[13px] top-[5px] w-0.5 bg-slate-300 h-full"></div>
      )}
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const IsraelPalestineSection: React.FC<IsraelPalestineSectionProps> = ({ onOpenReflectionModal }) => {
  const cultureOfPeaceItems = [
    { icon: ClockIcon, text: "Diálogo e Escuta Ativa:", description: "Criar espaços seguros para que ambas as narrativas sejam ouvidas e compreendidas." },
    { icon: CheckIcon, text: "Educação para a Paz:", description: "Eliminar estereótipos, promover a empatia e ensinar a história do \"outro\"." },
    { icon: UserGroupIcon, text: "Reconhecimento da Humanidade Compartilhada:", description: "Enfatizar os valores e esperanças comuns." },
    { icon: LeafIcon, text: "Justiça e Reconciliação:", description: "Abordar injustiças de forma construtiva." },
    { icon: GlobeIcon, text: "Não-Violência Ativa:", description: "Promover a resistência pacífica e a resolução de conflitos sem violência." },
  ];

  const israeliJourney = [
    { title: "Antiguidade e Diáspora:", description: "Conexões ancestrais com a Terra de Israel (Eretz Israel), incluindo os Reinos de Israel e Judá. Após destruições e exílios, inicia-se uma longa diáspora, mantendo viva a identidade cultural e religiosa e a esperança de retorno." },
    { title: "Sionismo Moderno (Século XIX-XX):", description: "Emergência do Sionismo como movimento político buscando o restabelecimento de um lar nacional judaico na Palestina, impulsionado por perseguições na Europa e o anseio por autodeterminação." },
    { title: "O Mandato Britânico e Imigração (Aliyot):", description: "Após a Primeira Guerra Mundial, a Palestina fica sob Mandato Britânico. A Declaração Balfour (1917) apoia um \"lar nacional para o povo judeu\". Ondas de imigração judaica (Aliyot) aumentam a população judaica na região." },
    { title: "Holocausto e Criação de Israel (1948):", description: "O genocídio nazista (Holocausto) intensifica a urgência por um refúgio seguro. Em 1947, a ONU propõe a partilha da Palestina. Em 1948, é declarado o Estado de Israel, seguido imediatamente por uma guerra com estados árabes vizinhos." },
    { title: "Desenvolvimento e Conflitos Posteriores:", description: "Israel se desenvolve como nação, mas enfrenta conflitos contínuos (1956, 1967, 1973, etc.), moldando sua política de segurança e expansão territorial (Guerra dos Seis Dias, 1967, resulta na ocupação da Cisjordânia, Gaza, Jerusalém Oriental, Golã e Sinai)." }
  ];

  const palestinianJourney = [
    { title: "Presença Histórica e Identidade:", description: "População árabe com presença contínua e raízes profundas na região da Palestina histórica, desenvolvendo uma identidade cultural e nacional distinta ao longo dos séculos, inclusive sob o Império Otomano." },
    { title: "Mandato Britânico e Impacto do Sionismo:", description: "Durante o Mandato Britânico, a crescente imigração judaica e a compra de terras geram tensões e preocupações entre a população árabe palestina sobre seu futuro e direitos na terra." },
    { title: "A Nakba (\"Catástrofe\") de 1948:", description: "A guerra de 1948, que se seguiu à criação de Israel, resulta no deslocamento em massa (expulsão ou fuga) de centenas de milhares de palestinos de suas casas e terras, criando a duradoura questão dos refugiados palestinos." },
    { title: "Ocupação e Organização Política (Pós-1967):", description: "Após a Guerra dos Seis Dias em 1967, Israel ocupa a Cisjordânia, Faixa de Gaza e Jerusalém Oriental. A Organização para a Libertação da Palestina (OLP) emerge como principal representante do povo palestino, buscando autodeterminação." },
    { title: "Intifadas e Busca por Estado:", description: "Levantes populares (Intifadas) contra a ocupação israelense (a primeira em 1987, a segunda em 2000). Acordos de Oslo (anos 90) criam a Autoridade Palestina com autonomia limitada, mas um Estado palestino soberano permanece não realizado." }
  ];

  const pathsToPeace = [
    { number: 1, title: "Educação Transformadora", description: "Implementar programas educacionais que promovam o pensamento crítico, a empatia e o respeito mútuo." },
    { number: 2, title: "Fortalecimento de Iniciativas da Sociedade Civil", description: "Apoiar organizações que unem israelenses e palestinos em projetos comuns." },
    { number: 3, title: "Diplomacia e Mediação Inovadoras", description: "Apoiar processos de diálogo inclusivos que envolvam diversos atores sociais." },
    { number: 4, title: "Justiça Restaurativa e Reconciliação", description: "Criar mecanismos para abordar queixas históricas e violações de direitos." },
    { number: 5, title: "Cooperação Econômica e Desenvolvimento Compartilhado", description: "Promover projetos econômicos conjuntos que beneficiem ambas as comunidades." }
  ];
  
  const convergenceDivergenceData = {
    title: "Pontos de Convergência e Divergência: Israel-Palestina",
    introduction: "Analisar o conflito Israel-Palestina requer identificar áreas onde o entendimento mútuo pode ser construído (convergências) e os pontos fundamentais de desacordo (divergências) que precisam ser abordados para uma paz sustentável.",
    convergences: [
      "Ambos os povos (israelenses e palestinos) expressam um profundo desejo de segurança e uma vida livre de violência para suas comunidades.",
      "Há um reconhecimento crescente em ambos os lados da necessidade de uma solução que garanta a dignidade e os direitos humanos de todos os envolvidos.",
      "Muitos em ambas as sociedades valorizam a preservação de seus locais sagrados e patrimônio cultural na região."
    ],
    divergences: [
      "Status de Jerusalém: Divergência fundamental sobre se Jerusalém deve ser uma capital compartilhada, dividida, ou sob soberania exclusiva de um dos lados.",
      "Fronteiras e Território: Desacordo sobre as fronteiras de um futuro Estado Palestino, a legalidade e continuidade dos assentamentos israelenses na Cisjordânia.",
      "Direito de Retorno dos Refugiados Palestinos: Divergência sobre o direito dos refugiados palestinos de 1948 e seus descendentes de retornar às suas antigas casas em Israel.",
      "Segurança: Perspectivas conflitantes sobre as necessidades de segurança de Israel versus as demandas palestinas por soberania e fim da ocupação."
    ],
    imageUrl: `https://placehold.co/300x150/E0E7FF/4338CA?text=Diagrama+Convergência+Divergência+Israel+Palestina`
  };

  const commonCardClasses = "my-8 p-6 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1";
  const sectionTitleClasses = "text-2xl md:text-3xl font-semibold text-peace-blue-dark mb-4";
  const paragraphClasses = "text-gray-700 leading-relaxed mb-3 text-sm sm:text-base";

  return (
    <div id="israel-palestina-theme-content">
      <section id="introducao" className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Introdução: Semeando a Esperança</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A questão Israel-Palestina é uma das mais complexas e duradouras do nosso tempo, marcada por narrativas históricas profundas, perdas e anseios legítimos de ambos os povos. Esta página busca, de forma didática e assertiva, explorar como a promoção de uma <strong className="text-sky-600">Cultura de Paz</strong> pode ser um pilar fundamental para construir pontes, fomentar o entendimento mútuo e, finalmente, alcançar uma solução justa e sustentável.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Não se trata de simplificar o conflito, mas de iluminar caminhos construtivos que priorizem a dignidade humana, o diálogo e a coexistência pacífica.
        </p>
        <div className="mt-6 text-center">
          <img 
            src="https://placehold.co/600x300/BFDBFE/1E40AF?text=Símbolo+de+Paz+Israel+Palestina" 
            alt="Imagem simbólica de paz: Pomba branca sobre um mapa estilizado de Israel e Palestina, representando esperança" 
            className="mx-auto rounded-lg shadow-md max-w-full h-auto" 
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x300/BFDBFE/1E40AF?text=Erro+Imagem+Paz+Israel+Palestina'; }}
          />
        </div>
      </section>

      <section id="cultura-de-paz" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} mb-6`}>O Que é uma Cultura de Paz?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Uma Cultura de Paz, conforme definida pela UNESCO, é um conjunto de valores, atitudes, tradições, comportamentos e estilos de vida baseados no respeito pela vida, no fim da violência e na promoção e prática da não-violência por meio da educação, do diálogo e da cooperação.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">No contexto Israel-Palestina, isso se traduz em:</p>
        <ul className="space-y-4 text-gray-700">
          {cultureOfPeaceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="flex items-start">
                <IconComponent className="w-5 h-5 mr-3 text-peace-blue-primary flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-800">{item.text}</strong>
                  <span className="ml-1">{item.description}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="vozes-em-dialogo" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} mb-6`}>Vozes em Diálogo: Rumo ao Entendimento Mútuo</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Para construir uma cultura de paz, é essencial ouvir e validar as narrativas e aspirações de ambos os lados, reconhecendo que tanto israelenses quanto palestinos possuem laços profundos com a terra e anseiam por segurança, dignidade e um futuro próspero para seus filhos.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Perspectiva Israelense e Anseios por Paz</h3>
            <p className="text-gray-700 mb-2 text-sm">Muitos israelenses anseiam por segurança duradoura e o reconhecimento de seu direito a viver em paz em sua pátria histórica. A memória do Holocausto e conflitos passados moldam uma profunda necessidade de proteção.</p>
            <p className="text-gray-700 text-sm">Aspiram por relações normalizadas com seus vizinhos e um futuro onde seus filhos não precisem temer a guerra, valorizando iniciativas que promovam a coexistência e a segurança mútua.</p>
            <img 
              src="https://placehold.co/300x200/93C5FD/1E3A8A?text=Esperança+Israelense+Pela+Paz" 
              alt="Representação da esperança israelense por paz: uma família sorrindo com oliveiras ao fundo" 
              className="mt-4 mx-auto rounded-lg max-w-full h-auto" 
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/300x200/93C5FD/1E3A8A?text=Erro+Imagem+Esperança+Israelense'; }}
            />
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md border border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Perspectiva Palestina e Anseios por Paz</h3>
            <p className="text-gray-700 mb-2 text-sm">Muitos palestinos anseiam por autodeterminação, justiça, o fim da ocupação e o direito a um Estado soberano e viável. A experiência da Nakba e as dificuldades da vida sob ocupação são centrais em sua narrativa.</p>
            <p className="text-gray-700 text-sm">Aspiram por liberdade, dignidade e a oportunidade de construir um futuro próspero em sua terra, valorizando iniciativas que reconheçam seus direitos e promovam a justiça.</p>
            <img 
              src="https://placehold.co/300x200/A7F3D0/059669?text=Esperança+Palestina+Pela+Paz" 
              alt="Representação da esperança palestina por paz: crianças brincando sob oliveiras, simbolizando futuro" 
              className="mt-4 mx-auto rounded-lg max-w-full h-auto" 
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/300x200/A7F3D0/059669?text=Erro+Imagem+Esperança+Palestina'; }}
            />
          </div>
        </div>
      </section>

      <section id="historia-povos" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} mb-6 flex items-center`}>
          <BookIcon className="w-7 h-7 mr-3 text-peace-gray-icon" />
          Raízes Históricas: Compreendendo as Jornadas
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Entender as trajetórias históricas dos povos israelense e palestino é crucial para contextualizar o conflito atual e apreciar a profundidade de suas conexões com a terra e suas aspirações nacionais. Ambas as narrativas são complexas e carregadas de significado.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Jornada do Povo Israelense/Judeu</h3>
            <div className="space-y-0">
              {israeliJourney.map((item, index) => (
                <TimelineItem key={index} title={item.title} description={item.description} isLast={index === israeliJourney.length - 1} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-4">Jornada do Povo Palestino</h3>
            <div className="space-y-0">
              {palestinianJourney.map((item, index) => (
                <TimelineItem key={index} title={item.title} description={item.description} isLast={index === palestinianJourney.length - 1} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mt-8 text-xs italic">
          Nota: Estas são sínteses de histórias longas e complexas, com múltiplas interpretações. O objetivo é fornecer um panorama básico para fomentar a compreensão mútua.
        </p>
      </section>

      {/* New Convergence and Divergence Section */}
      <section id="convergencia-divergencia-israel-palestina" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center text-xl md:text-2xl`}> {/* Adjusted title size */}
          <FlowChartIcon className="w-6 h-6 mr-3 text-peace-blue-primary" />
          {convergenceDivergenceData.title}
        </h2>
        <p className={paragraphClasses}>{convergenceDivergenceData.introduction}</p>
        
        {convergenceDivergenceData.imageUrl && (
            <div className="my-4 text-center">
                <img 
                    src={convergenceDivergenceData.imageUrl} 
                    alt={`Visualização de ${convergenceDivergenceData.title.replace(/:/g, '')}`}
                    className="rounded-md shadow-sm mx-auto max-w-xs h-auto"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/300x150/cccccc/969696?text=Erro+Diagrama+Israel+Palestina'; }}
                />
            </div>
        )}

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-semibold text-green-600 mb-2">Pontos de Convergência Potencial:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              {convergenceDivergenceData.convergences.map((item, index) => (
                <li key={`conv-ip-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-red-600 mb-2">Principais Pontos de Divergência:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              {convergenceDivergenceData.divergences.map((item, index) => (
                <li key={`div-ip-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="caminhos-para-paz" className={commonCardClasses}>
        <h2 className={`${sectionTitleClasses} mb-6`}>Caminhos para uma Paz Sustentável</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A construção de uma cultura de paz requer ações concretas em múltiplas frentes:
        </p>
        <div className="space-y-6">
          {pathsToPeace.map((path) => (
            <div key={path.number} className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-sky-700 mb-2">{path.number}. {path.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{path.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="conclusao" className={`${commonCardClasses} text-center`}>
        <h2 className={sectionTitleClasses}>Conclusão: Um Chamado à Ação e à Esperança</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A jornada rumo à paz entre Israel e Palestina é árdua, mas não impossível. Uma Cultura de Paz, nutrida pela educação, pelo diálogo e pelo respeito mútuo, oferece as ferramentas mais poderosas para transformar o conflito.
        </p>
        <p className="text-gray-700 leading-relaxed font-semibold mb-6">
          Cada indivíduo, cada comunidade e cada nação tem um papel a desempenhar na construção dessa paz.
        </p>
        <button 
          onClick={onOpenReflectionModal}
          className="btn-peace bg-peace-blue-primary hover:bg-peace-blue-primary-darker text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
          aria-label="Deixe uma Mensagem de Paz"
        >
          Deixe uma Mensagem de Paz
        </button>
      </section>
    </div>
  );
};

export default IsraelPalestineSection;
