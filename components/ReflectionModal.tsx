
import React, { useState, useEffect, useRef } from 'react';
import type { ModalType } from '../App'; // Ensure App exports this type

interface ReflectionModalProps {
  onClose: () => void;
  contentType: ModalType;
  onAddTheme?: (themeTitle: string) => void; // Optional: only for addTheme type
}

const ReflectionModal: React.FC<ReflectionModalProps> = ({ onClose, contentType, onAddTheme }) => {
  const [message, setMessage] = useState('');
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalConfig = {
    reflection: {
      title: "Sua Mensagem de Reflexão",
      prompt: "Este é um espaço simbólico. A paz começa com pequenos gestos e grandes esperanças.",
      placeholder: "Escreva sua reflexão aqui...",
      submitButtonText: "Enviar Mensagem Simbólica",
      confirmationText: "Obrigado por sua mensagem de reflexão!",
      textareaId: "peaceMessage",
      ariaLabelledBy: "reflection-modal-title",
      submitAction: () => console.log("Mensagem de Paz:", message),
    },
    addTheme: {
      title: "Adicionar Novo Tema para Diálogo",
      prompt: "Sugira um tema para ser explorado. Ao enviar, nossos agentes de IA (simulados) iniciarão o processo de curadoria e criação de uma página de debate baseada em sua sugestão.",
      placeholder: "Digite o título ou uma breve descrição do tema...",
      submitButtonText: "Gerar Tema com IA",
      confirmationText: "Obrigado! Seu tema está sendo processado.",
      textareaId: "themeSuggestionMessage",
      ariaLabelledBy: "add-theme-modal-title",
      submitAction: () => {
        if (onAddTheme) {
          onAddTheme(message);
        } else {
          console.warn("onAddTheme handler not provided for addTheme modal type.");
        }
      },
    }
  };

  const currentConfig = modalConfig[contentType];

  const handleSubmit = () => {
    currentConfig.submitAction();
    // For addTheme, confirmation and closing will be handled by App.tsx after theme generation
    if (contentType === 'reflection') {
      setMessage('');
      setConfirmationVisible(true);
      setTimeout(() => {
        onClose();
        setConfirmationVisible(false); 
      }, 2800);
    } else {
      // For addTheme, the App component will handle closing the modal
      // setMessage(''); // Keep message for onAddTheme, App will clear or navigate
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!confirmationVisible && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [confirmationVisible, contentType]); // Re-focus if contentType changes and modal is re-used

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-75 p-4 transition-opacity duration-300 ease-in-out"
      role="dialog"
      aria-modal="true"
      aria-labelledby={currentConfig.ariaLabelledBy}
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg text-center transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modalFadeIn"
        style={{animation: 'modalFadeInScale 0.3s forwards'}}
      >
        <div className="flex justify-between items-center mb-5">
          <h3 id={currentConfig.ariaLabelledBy} className="text-xl font-semibold text-sky-600">{currentConfig.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Fechar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        {!confirmationVisible || contentType === 'addTheme' ? ( // Show form for addTheme even if confirmation might be handled externally
          <>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">{currentConfig.prompt}</p>
            <textarea
              id={currentConfig.textareaId}
              ref={textareaRef}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow shadow-sm"
              placeholder={currentConfig.placeholder}
              aria-label={currentConfig.placeholder}
            ></textarea>
            <button
              onClick={handleSubmit}
              disabled={!message.trim()}
              className={`mt-5 w-full py-2.5 px-4 rounded-lg font-semibold transition-all duration-300 ease-in-out text-white
                ${!message.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-peace-blue-primary hover:bg-peace-blue-primary-darker focus:ring-2 focus:ring-peace-blue-primary focus:ring-opacity-50'}`}
            >
              {currentConfig.submitButtonText}
            </button>
          </>
        ) : ( // Only for 'reflection' type confirmation shown here
          <div className="py-4">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-green-600 text-lg font-semibold">{currentConfig.confirmationText}</p>
          </div>
        )}
      </div>
      <style>{`
        @keyframes modalFadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modalFadeIn {
          animation: modalFadeInScale 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
};

export default ReflectionModal;
