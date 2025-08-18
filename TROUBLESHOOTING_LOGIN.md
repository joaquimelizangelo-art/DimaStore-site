# Solução de Problemas de Login - DimaStore

## Problemas Comuns e Soluções

### 1. Login não funciona
- **Verifique o console do navegador** para mensagens de erro
- Clique no botão "Testar Conexão Firebase" na página de login
- Certifique-se de que o popup não está sendo bloqueado pelo navegador

### 2. Erro "Unauthorized Domain"
- Verifique se o domínio está autorizado no Firebase Console
- Adicione `localhost` e `127.0.0.1` para desenvolvimento local
- Para produção, adicione o domínio real do site

### 3. Erro "Operation Not Allowed"
- No Firebase Console, vá para Authentication > Sign-in method
- Habilite o provedor "Google"
- Configure o OAuth consent screen se necessário

### 4. Popup bloqueado
- Verifique as configurações de popup do navegador
- Adicione o site às exceções de popup
- O sistema tentará usar redirect automaticamente se popup falhar

### 5. Problemas de rede
- Verifique a conexão com a internet
- Tente novamente em alguns minutos
- Verifique se o Firebase está acessível

## Configurações do Firebase

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
VITE_FIREBASE_MEASUREMENT_ID=seu_measurement_id
```

### Firebase Console
1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Selecione seu projeto
3. Vá para Authentication > Sign-in method
4. Habilite Google Sign-in
5. Configure o OAuth consent screen se necessário

## Testando a Conexão

1. Abra a página de login (`/login`)
2. Clique em "Testar Conexão Firebase"
3. Verifique o console do navegador para logs detalhados
4. Se houver erro, verifique as mensagens e códigos de erro

## Logs de Debug

O sistema agora inclui logs detalhados no console:
- Configuração do Firebase
- Tentativas de login
- Códigos de erro específicos
- Estado da autenticação

## Suporte

Se os problemas persistirem:
1. Verifique todos os logs no console
2. Teste a conexão Firebase
3. Verifique as configurações no Firebase Console
4. Consulte a documentação oficial do Firebase
