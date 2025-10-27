import React from 'react';

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M16.5 18.75h-9a9.75 9.75 0 011.316-5.322A4.5 4.5 0 0112 6.75a4.5 4.5 0 014.184 6.678 9.75 9.75 0 011.316 5.322" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 6.75V3M3.75 18.75h16.5" 
    />
  </svg>
);

export default CrownIcon;
