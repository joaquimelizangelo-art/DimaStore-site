import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, DollarSign, Star, Users } from 'lucide-react';
import { diamondPackages } from '../data/products';

const testimonials = [
  {
    name: 'Apela Angolano',
    avatar: '/assets/avatars/apela_angolano.jpg', // Foto real do Apela Angolano
    hasRealPhoto: true, // Indica se tem foto real
    text: 'A DimaStore mostrou ser diferente, cumprem o que prometem e entregam diamantes rápido. É uma loja que passa confiança.',
    stars: 5,
  },
  {
    name: 'Mob_Ângelo',
    avatar: '/assets/avatars/mob_angelo.jpg', // Foto real do Mob_Ângelo
    hasRealPhoto: true, // Indica que tem foto real
    text: 'A DimaStore é a solução que jogador angolano precisava! Serviço rápido, seguro e com atendimento. Experiência 100% aprovada.',
    stars: 5,
  },
  {
    name: 'EdzinX',
    avatar: '/assets/avatars/edzinx.jpg', // Foto real do EdzinX
    hasRealPhoto: true, // Indica que tem foto real
    text: 'A DimaStore chegou pra mudar o cenário em Angola! Testei o serviço e recomendo de olhos fechados, rápido e confiável.',
    stars: 5,
  },
];

const Home: React.FC = () => {
  const packagesRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  // Substituir a URL da imagem dos cards de diamantes
  const diamondImage = "/assets/diamante.png";
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const goto = params.get('goto');
    if (goto === 'pacotes' && packagesRef.current) {
      packagesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Função para redirecionamento ao WhatsApp com mensagem personalizada
  const handleWhatsAppRedirect = (packageId: number) => {
    const whatsappNumber = "244952255641";
    
    // Mensagens personalizadas para cada pacote (exatamente como enviado)
    const messages = {
      1: "Olá! Vim pelo site e quero carregar 110 diamantes no Free Fire pelo valor de 1.100 Kz. Como posso fazer o pagamento? ",
      2: "Olá! Vim pelo site e quero carregar 341 diamantes no Free Fire pelo valor de 3.500 Kz. Como posso fazer o pagamento? ",
      3: "Olá! Vim pelo site e quero carregar 572 diamantes no Free Fire pelo valor de 5.000 Kz. Como posso fazer o pagamento? ",
      4: "Olá! Vim pelo site e quero carregar 1.166 diamantes no Free Fire pelo valor de 10.500 Kz. Como posso fazer o pagamento? ",
      5: "Olá! Vim pelo site e quero carregar 2.400 diamantes no Free Fire pelo valor de 21.500 Kz. Como posso fazer o pagamento? ",
      6: "Olá! Vim pelo site e quero carregar 6.160 diamantes no Free Fire pelo valor de 52.000 Kz. Como posso fazer o pagamento? "
    };
    
    const message = messages[packageId as keyof typeof messages] || "Olá! Vim pelo site e quero carregar diamantes no Free Fire.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Abre o WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-white min-h-screen">
      {/* Banner principal - HERO FULL WIDTH */}
      <section className="w-full min-h-[280px] md:min-h-[360px] flex items-center justify-center relative overflow-hidden bg-white">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
          alt="Banner gamer - DimaStore"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/60 via-yellow-500/30 to-black/20 mix-blend-multiply" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-12 md:py-20">
          <span className="uppercase text-white font-bold tracking-widest text-[1.1rem] md:text-[1.8rem] drop-shadow" style={{ fontFamily: 'Russo One, Arial, sans-serif', color: '#fff' }}>DIMAS PARA</span>
          <span className="text-[1.9rem] md:text-[3.5rem] font-extrabold text-white drop-shadow-lg text-center leading-tight mt-2 mb-2" style={{ fontFamily: 'Russo One, Arial, sans-serif', color: '#fff' }}>FREE FIRE EM ANGOLA</span>
          <span className="mt-2 text-[1rem] md:text-[1.1rem] font-semibold text-white drop-shadow text-center mb-4" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>O melhor lugar para comprar diamantes Free Fire em Angola!</span>
          <button 
            onClick={() => packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="mt-6 px-8 py-2 bg-gradient-to-r from-[#7c3aed] via-[#a5b4fc] to-[#6366f1] text-white rounded-full font-bold text-[0.9rem] shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200" 
            style={{ fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: '0.03em' }}
          >
            QUERO MEUS DIAMANTES!
          </button>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-8 bg-[#f7f7ff]">
        <div className="max-w-6xl mx-auto px-2 md:px-0">
          <h2 className="text-center text-xl md:text-2xl font-bold text-black mb-8 tracking-tight">Por que escolher a DimaStore?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur rounded-3xl p-6 flex flex-col items-center shadow-lg border border-blue-100 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-5 mb-6 flex items-center justify-center shadow">
                <Shield className="w-9 h-9 text-blue-600" />
              </div>
              <div className="font-extrabold text-xl md:text-2xl text-blue-700 mb-2 text-center">Métodos de Pagamento</div>
              <div className="text-gray-600 text-base text-center">Metodos de pagamento fácil e seguro, bancos 100% angolanos.</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-3xl p-6 flex flex-col items-center shadow-lg border border-blue-100 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-5 mb-6 flex items-center justify-center shadow">
                <Clock className="w-9 h-9 text-blue-600" />
              </div>
                              <div className="font-extrabold text-xl md:text-2xl text-blue-700 mb-2 text-center">Suporte 24/16</div>
                <div className="text-gray-600 text-base text-center">Suporte 24/16 via WhatsApp e outros canais!</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-3xl p-6 flex flex-col items-center shadow-lg border border-blue-100 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-5 mb-6 flex items-center justify-center shadow">
                <Users className="w-9 h-9 text-blue-600" />
              </div>
              <div className="font-extrabold text-xl md:text-2xl text-blue-700 mb-2 text-center">Pagamento Seguro</div>
              <div className="text-gray-600 text-base text-center">Transações protegidas e dados criptografados.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pacotes de Diamantes */}
      <section className="py-8 bg-[#f7f7ff]" ref={packagesRef as any}>
        <div className="max-w-6xl mx-auto px-2 md:px-0">
          <h2 className="text-center text-xl md:text-2xl font-bold text-black mb-6 tracking-tight">Pacotes de Diamantes Free Fire</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {diamondPackages.map((pkg) => (
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
        </div>
      </section>

      {/* Feedback dos clientes - Carrossel Animado */}
      <section className="py-8 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-8 tracking-tight" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            Confira o feedback dos nossos clientes
          </h2>
          
          {/* Carrossel Container */}
          <div className="relative">
            {/* Indicadores de navegação */}
            <div className="flex justify-center space-x-3 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para feedback ${index + 1}`}
                />
              ))}
            </div>

            {/* Container dos slides */}
            <div className="relative h-[320px] md:h-[280px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentSlide
                      ? 'translate-x-0 opacity-100 scale-100'
                      : index < currentSlide
                      ? '-translate-x-full opacity-0 scale-95'
                      : 'translate-x-full opacity-0 scale-95'
                  }`}
                  style={{
                    transform: index === currentSlide 
                      ? 'translateX(0) scale(1)' 
                      : index < currentSlide 
                        ? 'translateX(-100%) scale(0.95)' 
                        : 'translateX(100%) scale(0.95)'
                  }}
                >
                  <div className="flex justify-center">
                    <div className="max-w-xl mx-auto">
                      <div className="relative bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-2xl border border-gradient-to-r from-blue-200 to-purple-200 h-full group">

                        
                        {/* Texto do feedback */}
                        <p className="text-gray-700 mb-6 text-base md:text-lg text-center leading-relaxed font-medium mt-2">
                          {testimonial.text}
                        </p>
                        
                        {/* Estrelas */}
                        <div className="flex items-center space-x-2 mb-6 self-center">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow animate-pulse" 
                              style={{animationDelay: `${i * 0.1}s`}} 
                            />
                          ))}
                        </div>
                        
                        {/* Avatar e nome */}
                        <div className="flex items-center space-x-3 mt-auto">
                          <div className="relative group">
                            {testimonial.hasRealPhoto ? (
                              // Foto real do usuário
                              <div className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                <img 
                                  src={testimonial.avatar} 
                                  alt={`Foto de ${testimonial.name}`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    // Fallback para inicial se a imagem falhar
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.nextElementSibling?.classList.remove('hidden');
                                  }}
                                />
                                {/* Fallback para inicial (escondido por padrão) */}
                                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg hidden">
                                  {testimonial.name.charAt(0).toUpperCase()}
                                </div>
                              </div>
                            ) : (
                              // Avatar com inicial (padrão)
                              <div className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                                {testimonial.name.charAt(0).toUpperCase()}
                              </div>
                            )}
                            {/* Efeito de brilho */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                          </div>
                          <span className="font-bold text-black text-lg">{testimonial.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botões de navegação */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 hover:text-blue-700 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-blue-200"
              aria-label="Feedback anterior"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 hover:text-blue-700 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl border border-blue-200"
              aria-label="Próximo feedback"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;