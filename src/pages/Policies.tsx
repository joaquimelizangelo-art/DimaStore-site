import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, RefreshCw, AlertCircle } from 'lucide-react';
import Banner from '../components/Banner';

const Policies: React.FC = () => {
  const policies = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Política de Privacidade',
      content: [
        'Coletamos apenas as informações necessárias para processar sua compra',
        'Seus dados são protegidos por criptografia SSL de última geração',
        'Não compartilhamos suas informações com terceiros sem sua autorização',
        'Você pode solicitar a exclusão de seus dados a qualquer momento'
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Política de Entrega',
      content: [
        'Entregas automáticas em até 5 minutos após confirmação do pagamento',
        'Notificação por email quando os diamantes forem creditados',
        'Suporte disponível 24/16 para resolver problemas de entrega',
        'Garantia de entrega ou reembolso total em caso de falha'
      ]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-purple-500" />,
      title: 'Política de Reembolso',
      content: [
        'Produtos digitais não podem ser devolvidos após a entrega',
        'Reembolso integral em caso de falha na entrega',
        'Prazo de 7 dias para solicitar reembolso por problemas técnicos',
        'Suporte especializado para resolver conflitos rapidamente'
      ]
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: 'Termos de Uso',
      content: [
        'Proibido revender ou redistribuir produtos adquiridos',
        'Uso exclusivo para contas próprias do Free Fire',
        'Não nos responsabilizamos por banimentos por uso indevido',
        'Reservamos o direito de cancelar pedidos suspeitos'
      ]
    }
  ];

  return (
    <div>
      {/* Frases do topo - sem banner */}
      <Banner 
        title="Políticas da Loja"
        subtitle="Conheça nossos termos, políticas e condições de uso"
      />

      {/* Seção Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossas Políticas
            </h2>
            <p className="text-xl text-gray-600">
              Transparência e segurança em todos os nossos processos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {policy.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">
                    {policy.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {policy.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Termos Detalhados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Termos e Condições Detalhados
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Aceitação dos Termos
              </h3>
              <p className="text-gray-600 mb-4">
                Ao utilizar nossos serviços, você concorda com todos os termos e condições aqui estabelecidos. 
                Estes termos podem ser atualizados periodicamente, e é sua responsabilidade verificar mudanças.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. Descrição dos Serviços
              </h3>
              <p className="text-gray-600 mb-4">
                A DimaStore é uma plataforma de venda de produtos digitais, especialmente diamantes para o jogo Free Fire. 
                Oferecemos entrega automática e suporte especializado para garantir a melhor experiência de compra.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Responsabilidades do Cliente
              </h3>
              <p className="text-gray-600 mb-4">
                É responsabilidade do cliente fornecer informações corretas, incluindo ID do Free Fire válido. 
                Não nos responsabilizamos por entregas em contas incorretas devido a informações erradas fornecidas pelo cliente.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                4. Limitações de Responsabilidade
              </h3>
              <p className="text-gray-600 mb-4">
                Nossa responsabilidade está limitada ao valor da compra. Não nos responsabilizamos por danos indiretos, 
                perda de dados ou problemas causados por mau uso dos produtos adquiridos.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                5. Contato e Suporte
              </h3>
              <p className="text-gray-600 mb-4">
                Para dúvidas, suporte ou solicitações relacionadas a estas políticas, entre em contato conosco através 
                dos canais oficiais disponíveis em nosso site. Nosso suporte está disponível 24/16 para atendê-lo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ainda Tem Dúvidas?
          </h2>
          <p className="text-xl mb-8">
            Nossa equipe está sempre pronta para esclarecer qualquer questão sobre nossas políticas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver FAQ
            </Link>
            <a 
              href="https://wa.me/244952255641?text=Olá! Preciso de ajuda com a DimaStore. Podem me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-center"
            >
              Falar com Suporte
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;