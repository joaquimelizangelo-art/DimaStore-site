import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserAvatar from './UserAvatar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, loginWithGoogle, loginWithGoogleRedirect, logout, loading } = useAuth();

  // Função para tentar diferentes URLs do Google - REMOVIDA

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100/40" style={{boxShadow: '0 2px 16px 0 rgba(99,102,241,0.06)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <button 
            onClick={() => {
              if (location.pathname === '/') {
                // Se já estiver na Home, apenas scroll para o topo
                window.scrollTo({ top: 0, behavior: 'auto' });
              } else {
                // Se estiver em outra página, navega para Home
                navigate('/');
                // Garante que a página inicie do topo
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'auto' });
                }, 100);
              }
            }}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="font-bold text-black drop-shadow-lg group-hover:scale-105 transition-transform duration-200" style={{ fontFamily: 'Russo One, Arial, sans-serif', fontSize: '1.3rem', letterSpacing: '-0.03em', textShadow: '0 2px 8px #6366f133' }}>
              Dima<span className="text-[#6366f1] group-hover:text-purple-600 transition-colors">Store</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/sobre', label: 'Sobre Nós' },
              { to: '/faq', label: 'FAQ' },
              { to: '/politicas', label: 'Políticas' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-1 font-medium text-sm transition-colors duration-200 ${location.pathname === to ? 'text-[#636ae8] font-bold' : 'text-gray-700'} hover:text-[#636ae8]`}
              >
                {label}
                <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${location.pathname === to ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} group-hover:scale-x-100`}></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar diamantes, preços, pagamento..."
                className="pl-10 pr-8 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-60 transition-all duration-200 shadow-sm hover:shadow-md bg-white/90"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter" && searchTerm.trim()) {
                    navigate(`/busca?q=${encodeURIComponent(searchTerm.trim())}`);
                  }
                }}
                onFocus={() => {
                  // Mostrar sugestões quando focar
                  console.log('Sugestões de busca: 110, 341, 572, 1156, 2400, 6160, pagamento, faq');
                }}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ×
                </button>
              )}
              {searchTerm && searchTerm.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-43 overflow-y-auto">
                  <div className="p-2 text-xs text-gray-500 border-b">
                    Pressione Enter para buscar
                  </div>
                  <div className="p-2 text-xs text-gray-600">
                    <div className="font-semibold mb-1">Sugestões:</div>
                    <div className="space-y-1">
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=110`)}>• 110 diamantes</div>
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=341`)}>• 341 diamantes</div>
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=572`)}>• 572 diamantes</div>
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=1,166`)}>• 1.166 diamantes</div>
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=2,400`)}>• 2.400 diamantes</div>
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=6,160`)}>• 6.160 diamantes</div>
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=pagamento`)}>• Pagamento</div>
                      <div className="hover:bg-blue-50 p-1 rounded cursor-pointer" onClick={() => navigate(`/busca?q=faq`)}>• FAQ</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="group">
                    <UserAvatar user={user} size="md" />
                  </div>
                  <div className="font-semibold text-gray-800 text-sm truncate max-w-[140px]">
                    {user.displayName || 'Usuário'}
                  </div>
                  <button onClick={logout} className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow hover:brightness-110 hover:scale-105 text-xs font-medium transition-all duration-200">Sair</button>
                </div>
              ) : (
                <button 
                  onClick={handleLogin} 
                  disabled={loading}
                  className={`px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow text-xs font-semibold transition-all duration-200 hover:brightness-110 hover:scale-105 ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : ''
                  }`}
                >
                  {loading ? 'Entrando...' : 'Entrar com Google'}
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 shadow-lg rounded-b-xl animate-fade-in-down">
            <nav className="flex flex-col space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/sobre', label: 'Sobre Nós' },
                { to: '/faq', label: 'FAQ' },
                { to: '/politicas', label: 'Políticas' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative px-2 py-2 font-medium text-base transition-all duration-200 rounded-lg ${
                    location.pathname === to 
                      ? 'text-[#636ae8] font-bold bg-blue-50' 
                      : 'text-gray-700 hover:text-[#636ae8] hover:bg-gray-50'
                  }`}
                >
                  {label}
                  <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    location.pathname === to 
                      ? 'opacity-100 scale-x-100' 
                      : 'opacity-0 scale-x-0'
                  }`}></span>
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t">
              {user ? (
                <div className="flex items-center space-x-3 mb-4">
                  <div className="group">
                    <UserAvatar user={user} size="md" />
                  </div>
                  <div className="font-semibold text-gray-800 text-sm truncate max-w-[140px]">
                    {user.displayName || 'Usuário'}
                  </div>
                  <button onClick={logout} className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow hover:brightness-110 hover:scale-105 text-xs font-medium transition-all duration-200">Sair</button>
                </div>
              ) : (
                <div className="flex items-center space-x-4 mb-4">
                  <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <User className="w-5 h-5" />
                  </button>

                  <button 
                    onClick={handleLogin} 
                    disabled={loading}
                    className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium ${
                      loading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : ''
                    }`}
                  >
                    {loading ? 'Entrando...' : 'Entrar'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;