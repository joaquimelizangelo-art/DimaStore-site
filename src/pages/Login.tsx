import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { testFirebaseConnection } from '../utils/firebaseTest';

const Login: React.FC = () => {
  const { user, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold mb-4">Entrar</h1>
        <button
          onClick={loginWithGoogle}
          disabled={loading}
          className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Entrando...' : 'Entrar com Google'}
        </button>
        
        {/* Botão de teste para debug */}
        <button
          onClick={async () => {
            const result = await testFirebaseConnection();
            if (result) {
              alert('Conexão com Firebase OK!');
            } else {
              alert('Erro na conexão com Firebase. Verifique o console.');
            }
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-600 transition"
        >
          Testar Conexão Firebase
        </button>
        
        {/* Botão para ver dados do usuário */}
        {user && (
          <button
            onClick={() => {
              console.log('Dados completos do usuário:', user);
              alert(`Usuário: ${user.displayName}\nEmail: ${user.email}\nFoto: ${user.photoURL || 'Não disponível'}`);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition"
          >
            Ver Dados do Usuário
          </button>
        )}
        
        {/* Botão para forçar atualização da foto */}
        {user && (
          <button
            onClick={async () => {
              try {
                console.log('🔄 Forçando atualização do usuário...');
                await user.reload();
                console.log('✅ Usuário atualizado:', {
                  photoURL: user.photoURL,
                  displayName: user.displayName,
                  email: user.email
                });
                alert('Usuário atualizado! Verifique o console para novos dados.');
              } catch (error) {
                console.error('❌ Erro ao atualizar usuário:', error);
                alert('Erro ao atualizar usuário. Verifique o console.');
              }
            }}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600 transition"
          >
            🔄 Atualizar Usuário
          </button>
        )}
        
        <div className="text-sm text-gray-600 text-center">
          <p>Se o login não funcionar, clique em "Testar Conexão Firebase"</p>
          <p>e verifique o console do navegador para mais detalhes.</p>
        </div>
      </div>
    </div>
  );
};

export default Login; 