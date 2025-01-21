import React from "react";

type ButtonProps = {
  label: string; 
  onClick?: () => void; 
  disabled?: boolean; 
 
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      onClick={onClick}
      disabled={disabled}        >
      {label}
    </button>
  );
};

export default Button;