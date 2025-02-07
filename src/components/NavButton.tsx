import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  label: string; 
}

const NavButton: React.FC<NavButtonProps> = ({ to, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;
  return (
    <button
      onClick={() => navigate(to)}
      className={`px-4 py-1 rounded rounded-full ${
        isActive ? 'bg-[#DB3069] text-white' : 'bg-transparent hover:bg-[#db306920]'}`}
    >
      {label}
    </button>
  );
};

export default NavButton;