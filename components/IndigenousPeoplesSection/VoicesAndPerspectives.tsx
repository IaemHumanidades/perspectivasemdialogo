
import React from 'react';

const VoicesAndPerspectives: React.FC = () => {
  return (
    <section id="vozes-indigenas" className="my-8">
      <h3 className="text-xl font-semibold text-peace-green-dark mb-4">Vozes e Perspectivas: Compreendendo as Narrativas</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Para construir uma cultura de paz, é essencial ouvir e valorizar as diferentes narrativas sobre o processo de colonização e seus impactos, reconhecendo tanto as perspectivas acadêmicas quanto os conhecimentos e memórias dos povos indígenas.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-emerald-50 rounded-lg shadow-md border border-emerald-200">
          <h4 className="text-lg font-semibold text-peace-green-dark mb-3">Perspectiva Indígena</h4>
          <p className="text-gray-700 mb-2 text-sm">Para muitos povos indígenas, a colonização representou uma ruptura violenta em seus modos de vida, com impactos que persistem até hoje. As narrativas indígenas frequentemente enfatizam a resistência, a adaptação e a continuidade cultural apesar das adversidades.</p>
          <p className="text-gray-700 text-sm">A tradição oral indígena preserva memórias e conhecimentos que oferecem uma visão diferente da história oficial, valorizando a conexão com o território, as relações comunitárias e os saberes ancestrais.</p>
          <img 
            src="https://placehold.co/300x200/6EE7B7/047857?text=Narrativa+Oral+Indígena" 
            alt="Representação da perspectiva indígena: ancião indígena compartilhando saberes com jovens de sua comunidade" 
            className="mt-4 mx-auto rounded-lg shadow-sm max-w-full h-auto" 
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/300x200/cccccc/969696?text=Erro+Perspectiva+Indígena'; }}
          />
        </div>
        <div className="p-6 bg-sky-50 rounded-lg shadow-md border border-sky-200">
          <h4 className="text-lg font-semibold text-peace-blue-dark mb-3">Revisões Historiográficas</h4>
          <p className="text-gray-700 mb-2 text-sm">A historiografia contemporânea tem revisitado criticamente as narrativas tradicionais sobre a colonização, reconhecendo o protagonismo indígena e questionando visões eurocêntricas que por muito tempo dominaram os livros de história.</p>
          <p className="text-gray-700 text-sm">Novas abordagens acadêmicas buscam compreender as complexas interações entre povos indígenas e colonizadores, reconhecendo as estratégias de resistência, negociação e adaptação desenvolvidas pelos povos originários.</p>
          <img 
            src="https://placehold.co/300x200/7DD3FC/0C4A6E?text=Pesquisa+Histórica+e+Antropológica" 
            alt="Representação de revisões historiográficas: livros e documentos sobre história e antropologia indígena" 
            className="mt-4 mx-auto rounded-lg shadow-sm max-w-full h-auto" 
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/300x200/cccccc/969696?text=Erro+Historiografia'; }}
          />
        </div>
      </div>
    </section>
  );
};

export default VoicesAndPerspectives;
