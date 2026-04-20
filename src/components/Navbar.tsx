import { Link } from 'react-router-dom';
import { LogOut, User, Menu } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isAuthenticated: boolean;
  logout: () => void;
}

export default function Navbar({ isAuthenticated, logout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">Platforma SP</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Главная</Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                  <User size={18} />
                  Профиль
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut size={18} />
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Войти</Link>
                <Link 
                  to="/register" 
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Регистрация
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 py-4 px-4 space-y-1">
          <Link to="/" className="block py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md">Главная</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="block py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md">Профиль</Link>
              <button onClick={logout} className="block w-full text-left py-2 text-base font-medium text-red-600 hover:bg-gray-50 rounded-md">Выйти</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md">Войти</Link>
              <Link to="/register" className="block py-2 text-base font-medium text-indigo-600 hover:bg-gray-50 rounded-md">Регистрация</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
