
import React from 'react';

const PathsToReconciliation: React.FC = () => {
  const paths = [
    { number: 1, title: "Demarcação e Proteção de Territórios", description: "Garantir o direito constitucional dos povos indígenas aos seus territórios tradicionais, essenciais para sua sobrevivência física e cultural." },
    { number: 2, title: "Educação Intercultural", description: "Promover uma educação que valorize a diversidade cultural, combata estereótipos e preconceitos, e inclua as histórias e perspectivas indígenas nos currículos escolares." },
    { number: 3, title: "Diálogo de Saberes", description: "Reconhecer o valor dos conhecimentos tradicionais indígenas e promover diálogos horizontais com o conhecimento científico ocidental." },
    { number: 4, title: "Políticas Públicas Diferenciadas", description: "Desenvolver e implementar políticas públicas que respeitem as especificidades culturais dos povos indígenas nas áreas de saúde, educação, segurança alimentar e desenvolvimento econômico." },
    { number: 5, title: "Participação e Representatividade", description: "Garantir a participação efetiva dos povos indígenas nos processos decisórios que afetam suas vidas e aumentar sua representatividade em espaços políticos e institucionais." }
  ];

  return (
    <section id="caminhos-reconciliacao" className="my-8">
      <h3 className="text-xl font-semibold text-peace-green-dark mb-4">Caminhos para a Reconciliação e Justiça</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A construção de uma cultura de paz no contexto das relações entre povos indígenas e sociedade nacional requer ações concretas em múltiplas frentes:
      </p>
      <div className="space-y-6">
        {paths.map((path) => (
          <div key={path.number} className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-peace-green-dark mb-2">{path.number}. {path.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{path.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PathsToReconciliation;
