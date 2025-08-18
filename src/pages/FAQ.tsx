import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import Banner from '../components/Banner';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona a entrega dos diamantes?',
      answer: 'Após a confirmação do pagamento, seus diamantes são entregues automaticamente em sua conta do Free Fire em até 5 minutos. Você receberá uma confirmação por email quando os diamantes forem creditados.'
    },
    {
      question: 'Quais métodos de pagamento vocês aceitam?',
      answer: 'Atualmente aceitamos apenas pagamentos via Multicaixa Express. Estamos a trabalhar para adicionar novos métodos de pagamento em breve.'
    },
    {
      question: 'É seguro comprar diamantes na DimaStore?',
      answer: 'Sim, somos uma loja 100% segura e confiável. Utilizamos criptografia SSL para proteger suas informações e seguimos todas as normas de segurança para transações online.'
    },
    {
      question: 'Posso devolver ou trocar minha compra?',
      answer: 'Produtos digitais não podem ser devolvidos após a entrega. Porém, se houver algum problema com sua compra, entre em contato conosco e resolveremos rapidamente.'
    },
    {
      question: 'Como posso acompanhar meu pedido?',
      answer: 'Você pode acompanhar seu pedido através do email enviado após a compra ou entrando em contato com nosso suporte. Também enviamos notificações via WhatsApp (se solicitado).'
    },
    {
      question: 'Vocês oferecem desconto para compras em quantidade?',
      answer: 'Sim! Oferecemos descontos progressivos para compras maiores. Quanto mais você compra, maior o desconto. Consulte nossa tabela de preços para mais detalhes.'
    },
    {
      question: 'O que fazer se não recebi meus diamantes?',
      answer: 'Se você não recebeu seus diamantes em até 30 minutos após o pagamento, entre em contato conosco imediatamente pelo WhatsApp ou email. Resolveremos seu problema rapidamente.'
    },
    {
      question: 'Posso comprar para outro jogador?',
      answer: 'Sim, você pode comprar diamantes para qualquer ID do Free Fire. Basta inserir o ID do jogador destinatário no momento da compra.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div>
      {/* Frases do topo - sem banner */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">FAQ - Perguntas Frequentes</h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">Tire suas dúvidas sobre nossa loja e serviços</p>
      </section>

      {/* Seção Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Mais Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openItem === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não Encontrou Sua Resposta?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de suporte está sempre pronta para ajudá-lo com qualquer dúvida ou problema.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/244952255641?text=Olá! Preciso de ajuda com a DimaStore. Podem me ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block text-center"
              >
                Falar no WhatsApp
              </a>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Comprar?
          </h2>
          <p className="text-xl mb-8">
            Agora que você tirou suas dúvidas, que tal garantir seus diamantes?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/?goto=pacotes" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Comprar Agora
            </Link>
            <Link to="/sobre" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Conhecer a Loja
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;