import React from 'react';
import { useNavigate } from 'react-router-dom'; 

interface RedButtonProps {
  text: string;
  to: string; 
}

const RedButton: React.FC<RedButtonProps> = ({ text, to }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate(to); 
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      {text}
    </button>
  );
};

export default RedButton;
