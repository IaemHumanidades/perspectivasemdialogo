
import React from 'react';

interface IconProps {
  className?: string;
}

export const GlobeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2z"></path>
  </svg>
);
