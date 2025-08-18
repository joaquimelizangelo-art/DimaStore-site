import { createContext, useContext, useEffect, useState } from 'react';
import { signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, User, GoogleAuthProvider, getRedirectResult } from 'firebase/auth';
import { auth } from '../firebaseConfig';

interface AuthContextType {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  loginWithGoogleRedirect: () => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      console.log('Iniciando login com Google...');
      
      // Criar provider com configurações específicas
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      
      // Tentar popup primeiro, se falhar usar redirect
      try {
        console.log('Tentando login via popup...');
        const result = await signInWithPopup(auth, provider);
        console.log('Login bem-sucedido via popup:', result.user);
        setUser(result.user);
        setLoading(false);
      } catch (popupError: any) {
        console.log('Popup falhou, tentando redirect:', popupError.code);
        
        // Se popup falhar, usar redirect
        console.log('Iniciando redirect...');
        await signInWithRedirect(auth, provider);
      }
    } catch (error: any) {
      console.error('Erro ao iniciar login com Google:', error.code);
      setLoading(false);
      
      if (error.code === 'auth/unauthorized-domain') {
        alert('Erro de configuração: domínio não autorizado. Verifique as configurações do Firebase.');
      } else if (error.code === 'auth/network-request-failed') {
        alert('Erro de conexão! Verifique sua internet e tente novamente.');
      } else if (error.code === 'auth/popup-closed-by-user') {
        alert('Login cancelado pelo usuário.');
      } else if (error.code === 'auth/popup-blocked') {
        alert('Popup bloqueado pelo navegador. Tente novamente ou verifique as configurações de popup.');
      } else if (error.code === 'auth/operation-not-allowed') {
        alert('Login com Google não está habilitado. Verifique as configurações do Firebase.');
      } else {
        alert(`Erro de login: ${error.message}\nCódigo: ${error.code}`);
      }
    }
  };

  const loginWithGoogleRedirect = async () => {
    try {
      setLoading(true);
      console.log('Iniciando login com Google (redirect)...');
      
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });
      
      await signInWithRedirect(auth, provider);
    } catch (error: any) {
      console.error('Erro no login com redirect:', error);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log('Logout realizado com sucesso');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Estado de autenticação mudou:', currentUser ? 'Logado' : 'Não logado');
      if (currentUser) {
        console.log('=== DADOS COMPLETOS DO USUÁRIO GOOGLE ===');
        console.log('UID:', currentUser.uid);
        console.log('Email:', currentUser.email);
        console.log('Display Name:', currentUser.displayName);
        console.log('Photo URL:', currentUser.photoURL);
        console.log('Photo URL Type:', typeof currentUser.photoURL);
        console.log('Photo URL Length:', currentUser.photoURL?.length);
        console.log('Provider Data:', currentUser.providerData);
        console.log('==========================================');
        
        // Verificar se photoURL está vazio ou undefined
        if (!currentUser.photoURL) {
          console.warn('⚠️ PHOTOURL ESTÁ VAZIO! Verificando providerData...');
          currentUser.providerData.forEach((provider, index) => {
            console.log(`Provider ${index}:`, {
              providerId: provider.providerId,
              photoURL: provider.photoURL,
              displayName: provider.displayName
            });
          });
        }
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Verificar resultado de redirect ao carregar a página
  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        console.log('Verificando resultado de redirect...');
        const result = await getRedirectResult(auth);
        if (result) {
          console.log('Login bem-sucedido via redirect:', result.user);
          setUser(result.user);
        } else {
          console.log('Nenhum resultado de redirect encontrado');
        }
      } catch (error) {
        console.error('Erro ao verificar resultado de redirect:', error);
      } finally {
        setLoading(false);
      }
    };
    
    checkRedirectResult();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, loginWithGoogleRedirect, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 