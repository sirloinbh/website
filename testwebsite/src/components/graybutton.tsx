import React, { useState } from 'react';

interface GrayButtonProps {
  text: string;
}

const GrayButton: React.FC<GrayButtonProps> = ({ text }) => {
  const [color, setColor] = useState('#202124');

  const toggleColor = () => {
    setColor(currentColor => currentColor === '#202124' ? '#1A3466' : '#202124');
  };

  return (
    <button
      onClick={toggleColor}
      className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4`}
      style={{ backgroundColor: color }} 
      type="button"
    >
      {text}
    </button>
  );
};

export default GrayButton;
