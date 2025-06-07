
import React from 'react';
import { BookIcon } from '../icons/BookIcon'; // Changed from HistoryIcon to BookIcon based on path

interface TimelineItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, isLast = false }) => {
  return (
    <div className="relative pl-[30px] pb-6"> {/* Changed mb-6 to pb-6 for line extension */}
      {/* Dot */}
      <div className="absolute left-[8px] top-[5px] w-3 h-3 bg-peace-blue-primary rounded-full z-10 border-2 border-white shadow"></div>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[13px] top-[5px] w-0.5 bg-slate-300 h-full"></div>
      )}
      {/* Content */}
      <div>
        <h5 className="font-semibold text-gray-800">{title}</h5>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HistoricalRoots: React.FC = () => {
  const impacts = [
    { title: "Impacto Demográfico:", description: "Estima-se que havia cerca de 5 milhões de indígenas no território que hoje é o Brasil quando os portugueses chegaram em 1500. Com doenças, guerras e escravização, essa população foi drasticamente reduzida, chegando a apenas 450 mil indígenas atualmente." },
    { title: "Expropriação Territorial:", description: "A colonização resultou na perda de territórios tradicionais, fundamentais não apenas para a subsistência física, mas também para a reprodução cultural e espiritual dos povos indígenas." },
    { title: "Imposição Cultural e Religiosa:", description: "Através da catequização e de políticas assimilacionistas, buscou-se impor valores europeus e cristãos, desvalorizando e criminalizando práticas culturais e espirituais indígenas." },
    { title: "Escravização e Trabalho Forçado:", description: "Muitos indígenas foram escravizados ou submetidos a regimes de trabalho forçado, especialmente nos primeiros séculos da colonização, antes da intensificação do tráfico de africanos escravizados." },
    { title: "Transformações Sociais e Políticas:", description: "A colonização alterou profundamente as organizações sociais e políticas indígenas, impondo novas estruturas de poder e desarticulando sistemas tradicionais de governança." }
  ];

  const resistance = [
    { title: "Resistência Armada:", description: "Diversos povos indígenas resistiram militarmente à invasão de seus territórios, organizando confederações e alianças para enfrentar os colonizadores, como a Confederação dos Tamoios e a Guerra dos Bárbaros." },
    { title: "Negociação e Alianças Estratégicas:", description: "Muitos grupos indígenas estabeleceram alianças com europeus para fortalecer sua posição frente a outros grupos indígenas rivais ou colonizadores de outras nacionalidades, demonstrando agência política e diplomática." },
    { title: "Adaptação Cultural:", description: "Os povos indígenas desenvolveram estratégias de adaptação cultural, incorporando seletivamente elementos europeus enquanto mantinham aspectos fundamentais de suas identidades e práticas culturais." },
    { title: "Preservação de Conhecimentos:", description: "Através da tradição oral e de práticas cotidianas, os povos indígenas preservaram conhecimentos ancestrais sobre medicina, agricultura, manejo ambiental e espiritualidade, que hoje são reconhecidos por seu valor científico e cultural." },
    { title: "Movimentos Contemporâneos:", description: "Desde a segunda metade do século XX, os povos indígenas têm se organizado em movimentos políticos que reivindicam direitos territoriais, culturais e de autodeterminação, conquistando importantes avanços na Constituição de 1988." }
  ];

  return (
    <section id="historia-colonizacao" className="my-8">
      <h3 className="text-xl font-semibold text-peace-green-dark mb-6 flex items-center">
        <BookIcon className="w-7 h-7 mr-3 text-peace-gray-icon" />
        Raízes Históricas: Compreendendo o Processo de Colonização
      </h3>
      <p className="text-gray-700 leading-relaxed mb-8">
        Entender o processo histórico da colonização europeia e seus impactos sobre os povos indígenas é fundamental para contextualizar os desafios atuais e construir caminhos para a reconciliação e a justiça.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-peace-green-dark mb-4">Impactos da Colonização</h4>
          <div className="space-y-0"> {/* Remove space-y here, TimelineItem handles its bottom padding */}
            {impacts.map((item, index) => (
              <TimelineItem key={index} title={item.title} description={item.description} isLast={index === impacts.length - 1} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-peace-green-dark mb-4">Resistência e Protagonismo Indígena</h4>
          <div className="space-y-0">
            {resistance.map((item, index) => (
              <TimelineItem key={index} title={item.title} description={item.description} isLast={index === resistance.length - 1} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mt-8 text-xs italic">
        Nota: Esta é uma síntese de processos históricos complexos, com múltiplas interpretações. O objetivo é fornecer um panorama que valorize tanto as perspectivas acadêmicas quanto os conhecimentos dos povos indígenas.
      </p>
    </section>
  );
};

export default HistoricalRoots;
