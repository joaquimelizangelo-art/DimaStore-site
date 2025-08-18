import React from 'react';
import { useLocation } from 'react-router-dom';
import { diamondPackages } from '../data/products';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults: React.FC = () => {
  const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';

  // Função para extrair números da string
  const extractNumbers = (str: string) => {
    return str.replace(/[^\d]/g, '');
  };

  // Função para normalizar texto (remover acentos)
  const normalizeText = (text: string) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  };

  const results = diamondPackages.filter(pkg => {
    const normalizedSearch = normalizeText(searchTerm);
    const normalizedAmount = normalizeText(pkg.amount);
    const normalizedPrice = normalizeText(pkg.price);
    
    // Busca por quantidade de diamantes
    const diamondAmount = extractNumbers(pkg.amount);
    const searchAmount = extractNumbers(searchTerm);
    
    // Busca por preço
    const priceAmount = extractNumbers(pkg.price);
    const searchPrice = extractNumbers(searchTerm);
    
    return (
      // Busca por texto
      normalizedAmount.includes(normalizedSearch) ||
      normalizedPrice.includes(normalizedSearch) ||
      pkg.amount.toLowerCase().includes(searchTerm) ||
      pkg.price.toLowerCase().includes(searchTerm) ||
      // Busca por números específicos
      (searchAmount && diamondAmount.includes(searchAmount)) ||
      (searchPrice && priceAmount.includes(searchPrice)) ||
      // Busca por palavras-chave
      (searchTerm.includes('diamante') && normalizedAmount.includes('diamante')) ||
      (searchTerm.includes('aoa') && normalizedPrice.includes('aoa')) ||
      (searchTerm.includes('kwanza') && normalizedPrice.includes('aoa'))
    );
  });

  // Redireciona para WhatsApp com mensagem personalizada por pacote
  const handleWhatsAppRedirect = (packageId: number) => {
    const whatsappNumber = '244952255641';
    const messages: Record<number, string> = {
      1: 'Olá! Vim pelo site e quero carregar 110 diamantes no Free Fire pelo valor de 1.100 Kz. Como posso fazer o pagamento? ',
      2: 'Olá! Vim pelo site e quero carregar 341 diamantes no Free Fire pelo valor de 3.500 Kz. Como posso fazer o pagamento? ',
      3: 'Olá! Vim pelo site e quero carregar 572 diamantes no Free Fire pelo valor de 5.000 Kz. Como posso fazer o pagamento? ',
      4: 'Olá! Vim pelo site e quero carregar 1.166 diamantes no Free Fire pelo valor de 10.500 Kz. Como posso fazer o pagamento? ',
      5: 'Olá! Vim pelo site e quero carregar 2.400 diamantes no Free Fire pelo valor de 21.500 Kz. Como posso fazer o pagamento? ',
      6: 'Olá! Vim pelo site e quero carregar 6.160 diamantes no Free Fire pelo valor de 52.000 Kz. Como posso fazer o pagamento? ' ,
    };

    const message = messages[packageId] || 'Olá! Vim pelo site e quero carregar diamantes no Free Fire.';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const pages = [
    { name: 'FAQ', path: '/faq', keywords: ['faq', 'perguntas', 'frequentes', 'ajuda', 'dúvidas', 'como', 'funciona'] },
    { name: 'Políticas', path: '/politicas', keywords: ['política', 'políticas', 'privacidade', 'termos', 'reembolso', 'entrega', 'condições'] },
    { name: 'Sobre Nós', path: '/sobre', keywords: ['sobre', 'quem somos', 'história', 'loja', 'empresa', 'dima', 'dimastore'] },
    { name: 'Pagamento', path: '/pagamento', keywords: ['pagamento', 'pagar', 'multicaixa', 'paypay', 'dinheiro', 'transferência'] },
  ];

  const pageResults = pages.filter(page => {
    const normalizedSearch = normalizeText(searchTerm);
    const normalizedPageName = normalizeText(page.name);
    
    return (
      normalizedPageName.includes(normalizedSearch) ||
      page.keywords.some(keyword => 
        normalizeText(keyword).includes(normalizedSearch) || 
        normalizedSearch.includes(normalizeText(keyword))
      )
    );
  });

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Resultados da busca por: <span className="text-blue-600">"{searchTerm}"</span>
      </h1>
      
      {results.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Produtos encontrados ({results.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {results.map(pkg => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow border border-gray-200 flex flex-col items-center p-4 relative transition hover:shadow-lg">
                {pkg.popular && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
                )}
                <img src={pkg.image} alt="Diamantes" className="h-32 mb-4 select-none" draggable="false" />
                <div className="text-xl md:text-2xl font-bold text-black mb-1 text-center">{pkg.amount}</div>
                <div className="text-gray-400 text-base line-through mb-1 text-center">{pkg.oldPrice}</div>
                <div className="text-2xl font-bold text-blue-600 mb-4 text-center">{pkg.price}</div>
                <button
                  onClick={() => handleWhatsAppRedirect(pkg.id)}
                  className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 text-white font-bold py-2 rounded-lg transition-all hover:scale-105"
                >
                  COMPRAR
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      
      {pageResults.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            📄 Páginas encontradas ({pageResults.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {pageResults.map(page => (
              <a 
                key={page.path} 
                href={page.path} 
                className="block p-6 border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-blue-700 font-medium text-lg"
              >
                {page.name}
              </a>
            ))}
          </div>
        </>
      )}
      
      {results.length === 0 && pageResults.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Nenhum resultado encontrado
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Não encontramos resultados para <span className="font-semibold">"{searchTerm}"</span>
          </p>
          <div className="bg-blue-50 rounded-xl p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-blue-800 mb-3">💡 Sugestões de busca:</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• "110 diamantes" ou "110"</li>
              <li>• "1500" ou "AOA 1500"</li>
              <li>• "341" para pacotes maiores</li>
              <li>• "pagamento" para métodos de pagamento</li>
              <li>• "faq" para perguntas frequentes</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults; 