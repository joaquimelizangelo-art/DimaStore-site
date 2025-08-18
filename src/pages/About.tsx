import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Shield } from 'lucide-react';
import Banner from '../components/Banner';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      number: '300+',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      number: '24/16',
      label: 'Suporte Disponível'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      number: '+1',
      label: 'Anos de Experiência'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      number: '100%',
      label: 'Transações Seguras'
    }
  ];

  return (
    <div>
      {/* Frases do topo - sem banner */}
      <section className="w-full py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">Conheça a história e os valores da DimaStore</p>
      </section>

      {/* Seção Principal */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-base text-gray-600 mb-8 text-justify">
                Em 2024, no coração da comunidade gamer angolana, nasceu a DimaStore com um único propósito: transformar a forma como os jogadores de Free Fire compram seus diamantes. Percebemos que muitos enfrentavam dificuldades com métodos de pagamento limitados, demora nas entregas e falta de confiança nas lojas online. Foi então que decidimos criar uma plataforma 100% focada no público angolano, oferecendo uma experiência segura, rápida e dedicada exclusivamente ao Free Fire.<br /><br />
                Desde o início, a DimaStore colocou os jogadores em primeiro lugar, trazendo recargas de diamantes com preços acessíveis, suporte humanizado e meios de pagamento locais adaptados à realidade de Angola. Ao longo do tempo, crescemos não apenas em números, mas em confiança, construindo uma comunidade fiel que nos escolhe diariamente para fortalecer sua jornada dentro do jogo.<br /><br />
                Hoje, a DimaStore é mais do que uma simples loja: é símbolo de compromisso, qualidade e paixão pelo Free Fire. Seguimos firmes, lado a lado com cada guerreiro do campo de batalha, abastecendo sonhos e vitórias com cada recarga feita.
              </p>
              <Link 
                to="/faq" 
                className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Tire Suas Dúvidas
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/assets/about/equipe_dimastore.jpg"
                alt="Equipe DimaStore"
                className="rounded-lg shadow-lg w-full h-auto"
                onError={(e) => {
                  // Fallback para imagem externa se a local falhar
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nossos Números
            </h2>
            <p className="text-lg text-gray-600">
              Resultados que comprovam nossa excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-5 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Nossa missão é oferecer diamantes de Free Fire com agilidade, confiança e o melhor atendimento, fortalecendo a comunidade gamer angolana.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Nossa visão é ser a maior referência em venda de diamantes Free Fire em Angola, promovendo segurança e satisfação para todos os jogadores.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <p className="text-gray-600">
                Transparência, segurança, rapidez no atendimento e compromisso com a satisfação total de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8">
            Faça parte da nossa comunidade e tenha acesso aos melhores produtos digitais!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Comprar Agora
            </Link>
            <Link to="/faq" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;