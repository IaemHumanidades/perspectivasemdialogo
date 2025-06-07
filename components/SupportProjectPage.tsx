
import React from 'react';

const SupportProjectPage: React.FC = () => {
  const commonCardClasses = "my-8 p-6 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl";
  const sectionTitleClasses = "text-xl md:text-2xl font-semibold text-peace-blue-dark mb-4";
  const paragraphClasses = "text-gray-700 leading-relaxed mb-3 text-sm sm:text-base";

  return (
    <div id="support-project-page">
      <section id="intro-projeto" className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>O Projeto "Perspectivas"</h2>
        <p className={paragraphClasses}>
          O aplicativo "Perspectivas" se baseia na facilitação do diálogo, principalmente no que se refere a temas sensíveis e tabus na sociedade. Nossa proposta é apoiar a construção de entendimentos a partir das diversas perspectivas sobre as temáticas, em vez de fomentar a divisão. Buscamos ser uma ferramenta para combater visões enviesadas e promover um debate mais rico e informado.
        </p>
      </section>

      <section id="diferencial-perspectivas" className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Nosso Diferencial: Transformando o Debate</h2>
        <p className={paragraphClasses}>
          O diferencial do aplicativo "Perspectivas" está em sua proposta de transformar o debate em um processo educativo, dialógico e empático, ao invés de apenas competitivo ou polarizado. Diferente de outras plataformas digitais de participação, que frequentemente priorizam a rapidez da votação ou a simples exposição de opiniões, o "Perspectivas" valoriza o tempo da escuta, da reflexão e da construção coletiva do pensamento.
        </p>
        <p className={paragraphClasses}>
          Ele convida as pessoas a se colocarem no lugar do outro, a reconhecerem os fundamentos das ideias com as quais discordam e a aprenderem com a diversidade de argumentos.
        </p>
        <p className={paragraphClasses}>
          Inspirado em princípios da educação popular, da Comunicação Não Violenta e da ética do cuidado, o "Perspectivas" se compromete com um uso consciente e responsável da tecnologia, inclusive da inteligência artificial, para fortalecer a qualidade do diálogo público. Em vez de reforçar bolhas informacionais, o app cria pontes entre visões distintas, ajudando os participantes a identificar valores comuns e ampliar seu repertório crítico.
        </p>
        <p className={paragraphClasses}>
          Com isso, ele se destaca como uma ferramenta inovadora voltada não apenas para tomar decisões, mas para formar cidadãos mais conscientes, cooperativos e capazes de construir consensos sustentáveis.
        </p>
        <p className={paragraphClasses}>
          O aplicativo conta com aspectos visuais que facilitam ao usuário entender como as diferentes perspectivas sobre determinado assunto estão sendo discutidas, em que ponto se encontram e em quais pontos se distanciam, auxiliando em diálogos mais produtivos e respeitosos para todos os participantes. Além disso, os debates ficam visíveis para todos, para servirem de base tanto para formação, execução de projetos e outras iniciativas.
        </p>
      </section>

      <section id="como-apoiar" className={commonCardClasses}>
        <h2 className={sectionTitleClasses}>Sua Contribuição é Fundamental!</h2>
        <p className={paragraphClasses}>
          Para que o "Perspectivas" continue crescendo e aprimorando sua missão de cultivar diálogos transformadores, seu apoio é essencial. Existem diversas formas de contribuir:
        </p>
        <div className="space-y-6 mt-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-peace-green-dark mb-2">Apoio Financeiro</h3>
            <p className={`${paragraphClasses} mb-4`}>
              Contribuições financeiras, de qualquer valor, nos ajudam a cobrir os custos de desenvolvimento, manutenção da plataforma, criação de conteúdo educativo e expansão do alcance do projeto.
            </p>
            <a
              href="https://apoioperspectivas.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-white hover:bg-amber-600 py-2.5 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              aria-label="Acesse nossa página de apoio"
            >
              Apoie nosso Projeto
            </a>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-peace-blue-primary mb-2">Divulgue o Projeto</h3>
            <p className={paragraphClasses}>
              Compartilhe o "Perspectivas" com seus amigos, familiares, colegas e em suas redes sociais. Quanto mais pessoas conhecerem e utilizarem a plataforma, mais rico e diverso será nosso diálogo.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-sky-600 mb-2">Contribua com Conteúdo e Debates</h3>
            <p className={paragraphClasses}>
              Participe ativamente dos debates, sugira novos temas para discussão e ajude-nos a construir uma base de conhecimento colaborativa. Sua perspectiva é valiosa! (Fique atento ao botão "Gerar Novo Tema com IA" na página inicial).
            </p>
          </div>
        </div>
        <p className={`${paragraphClasses} mt-6 font-semibold text-center`}>
          Juntos, podemos semear a esperança e construir um futuro com mais diálogo, empatia e compreensão.
        </p>
      </section>
    </div>
  );
};

export default SupportProjectPage;