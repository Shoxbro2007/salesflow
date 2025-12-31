import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/');
  };

  return (
    <header className="bg-white shadow">
      <div className="px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">SalesFlow</h1>
        <button
          onClick={handleLogout}
          className="text-red-500 hover:underline"
        >
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
