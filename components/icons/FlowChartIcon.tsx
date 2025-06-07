
import React from 'react';

interface IconProps {
  className?: string;
}

export const FlowChartIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5M3.75 12v6.75A2.25 2.25 0 006 21h2.25M3.75 12H20.25M16.5 3.75v16.5M12 3.75v16.5m3.75-16.5v16.5M9.75 12.75h4.5m-4.5 3h4.5m4.5-3h.008v.008H18.75V12.75zm0 3h.008v.008H18.75V15.75zm-3-3h.008v.008H15.75V12.75zm0 3h.008v.008H15.75V15.75zm-3-3h.008v.008H12.75V12.75zm0 3h.008v.008H12.75V15.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h.008v.008H12V7.5zm-.75.008a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V7.508zM15 7.5h.008v.008H15V7.5zm-.75.008a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008A.75.75 0 0114.25 7.508V7.5zM9 7.5h.008v.008H9V7.5zm-.75.008a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75V7.5z" />
  </svg>
);
