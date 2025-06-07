import React from 'react';

const Footer: React.FC = () => {
  const currentYear = 2025; // Updated to static year 2025
  const ownerName = "Perspectivas em Diálogo - Reino Mágico da Leitura"; // Updated owner name

  return (
    <footer className="bg-gray-800 text-gray-300 p-6 text-center mt-12 rounded-t-lg">
      <p>&copy; <span id="currentYear">{currentYear}</span> {ownerName}. Licenciado sob a Licença MIT.</p>
      <p className="text-sm mt-1">Promovendo o diálogo e a compreensão.</p>
    </footer>
  );
};

export default Footer;