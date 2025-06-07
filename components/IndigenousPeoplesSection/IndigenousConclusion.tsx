
import React from 'react';

interface IndigenousConclusionProps {
  onOpenReflectionModal: () => void;
}

const IndigenousConclusion: React.FC<IndigenousConclusionProps> = ({ onOpenReflectionModal }) => {
  return (
    <section id="conclusao-indigenas" className="my-8 text-center">
      <h3 className="text-xl font-semibold text-peace-green-dark mb-4">Conclusão: Por uma Nova Relação</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A construção de uma cultura de paz entre povos indígenas e sociedade nacional passa pelo reconhecimento das injustiças históricas, pela valorização da diversidade cultural e pelo compromisso com a justiça social. É um processo contínuo que exige transformações profundas em nossas estruturas sociais, políticas e econômicas.
      </p>
      <p className="text-gray-700 leading-relaxed font-semibold mb-6">
        Cada pessoa, cada instituição e cada comunidade tem um papel a desempenhar nessa jornada de reconciliação e construção de um futuro mais justo e plural.
      </p>
      <button 
        onClick={onOpenReflectionModal}
        className="btn-peace bg-peace-green-primary hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
      >
        Deixe uma Mensagem de Reflexão
      </button>
    </section>
  );
};

export default IndigenousConclusion;
