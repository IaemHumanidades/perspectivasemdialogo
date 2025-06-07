
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-gradient-to-r from-peace-blue-gradient-from to-peace-blue-gradient-to text-white p-6 md:p-10 text-center rounded-b-xl shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg md:text-xl">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
