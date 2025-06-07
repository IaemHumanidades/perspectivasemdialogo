
import React from 'react';
import { ClockIcon } from '../icons/ClockIcon';
import { CheckIcon } from '../icons/CheckIcon';
import { UserGroupIcon } from '../icons/UserGroupIcon';
import { LeafIcon } from '../icons/LeafIcon';
import { GlobeIcon } from '../icons/GlobeIcon';

const CultureOfPeaceDefinition: React.FC = () => {
  const items = [
    { icon: ClockIcon, text: "Reconhecimento do Protagonismo Indígena:", description: "Compreender que os povos indígenas foram e são agentes ativos de sua própria história, não meros espectadores passivos." },
    { icon: CheckIcon, text: "Valorização dos Saberes Tradicionais:", description: "Reconhecer a importância dos conhecimentos indígenas sobre o meio ambiente, medicina, organização social e espiritualidade." },
    { icon: UserGroupIcon, text: "Diálogo Intercultural:", description: "Promover trocas genuínas entre diferentes culturas, baseadas no respeito e na horizontalidade." },
    { icon: LeafIcon, text: "Justiça Histórica e Reparação:", description: "Reconhecer os impactos da colonização e buscar formas de reparação e justiça." },
    { icon: GlobeIcon, text: "Autodeterminação:", description: "Respeitar o direito dos povos indígenas de determinarem seus próprios caminhos e prioridades." },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-peace-green-dark mb-4">O Que Significa uma Cultura de Paz no Contexto dos Povos Indígenas?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Uma Cultura de Paz no contexto dos povos indígenas e da colonização envolve o reconhecimento das injustiças históricas, a valorização dos saberes tradicionais e a construção de relações baseadas no respeito mútuo e na justiça social. Isso se traduz em:
      </p>
      <ul className="space-y-4 text-gray-700">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li key={index} className="flex items-start sm:items-center">
              <IconComponent className="w-6 h-6 mr-3 text-peace-blue-primary flex-shrink-0 mt-1 sm:mt-0" />
              <div>
                <strong className="text-gray-800">{item.text}</strong>
                <span className="ml-1">{item.description}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CultureOfPeaceDefinition;
