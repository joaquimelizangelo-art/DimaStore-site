import { auth } from '../firebaseConfig';
import { signInAnonymously } from 'firebase/auth';

export const testFirebaseConnection = async () => {
  try {
    console.log('Testando conexão com Firebase...');
    console.log('Configuração do auth:', auth);
    
    // Tentar uma operação simples para testar a conexão
    const result = await signInAnonymously(auth);
    console.log('Conexão com Firebase OK:', result.user.uid);
    
    // Fazer logout imediatamente
    await auth.signOut();
    console.log('Teste de conexão concluído com sucesso');
    return true;
  } catch (error) {
    console.error('Erro na conexão com Firebase:', error);
    return false;
  }
};
