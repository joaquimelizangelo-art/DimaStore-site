import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Smartphone, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4 group">
              <span className="font-bold drop-shadow-lg group-hover:scale-105 transition-transform duration-200" style={{ fontFamily: 'Russo One, Arial, sans-serif', fontSize: '1.3rem', letterSpacing: '-0.03em', textShadow: '0 2px 8px #6366f133' }}>
                <span className="text-black">Dima</span><span className="text-[#6366f1] group-hover:text-purple-400 transition-colors">Store</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Sua loja oficial de diamantes Free Fire e produtos digitais. Entregas rápidas e seguras.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61579063815135" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/diimastoree?igsh=Ynl2cmdqeGJ3N2x5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/DimaStoree?t=kPoszjt9F7DFQT0y5cmpjQ&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Siga-nos no X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@dimastoree?_t=ZM-8yynAwEJXZo&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Siga-nos no TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.2.3-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/politicas" className="text-gray-400 hover:text-white transition-colors">
                  Políticas
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-semibold mb-3">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://wa.me/244952255641?text=Olá! Preciso de ajuda com a DimaStore. Podem me ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors hover:scale-105 transform duration-200"
                  aria-label="Central de Ajuda via WhatsApp"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/244952255641?text=Olá! Preciso de ajuda com a DimaStore. Podem me ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-base font-semibold mb-3">Métodos de Pagamento</h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-gray-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-gray-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded flex items-center justify-center">
                <Shield className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Pagamentos seguros e criptografados
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DimaStore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;