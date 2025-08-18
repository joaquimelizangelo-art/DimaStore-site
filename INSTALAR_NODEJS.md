# 🚀 Como Instalar Node.js e Testar o Projeto

## 📋 **Pré-requisitos:**
Para testar o projeto com a foto do ADM Danilson, você precisa instalar o Node.js.

## 🔧 **Instalar Node.js:**

### **Opção 1: Download Direto (Recomendado)**
1. **Acesse**: https://nodejs.org/
2. **Baixe** a versão LTS (Long Term Support)
3. **Execute** o instalador
4. **Siga** as instruções de instalação
5. **Reinicie** o terminal/PowerShell

### **Opção 2: Chocolatey (Windows)**
```powershell
choco install nodejs
```

### **Opção 3: Winget (Windows 10/11)**
```powershell
winget install OpenJS.NodeJS
```

## ✅ **Verificar Instalação:**
Após instalar, abra um novo terminal e digite:
```powershell
node --version
npm --version
```

## 🎯 **Testar o Projeto:**

### **1. Instalar Dependências:**
```powershell
npm install
```

### **2. Iniciar o Servidor de Desenvolvimento:**
```powershell
npm run dev
```

### **3. Acessar o Projeto:**
- **URL**: http://localhost:5173
- **Navegue** até a seção de feedbacks
- **Verifique** se a foto do Edmilson aparece

## 📸 **Sobre a Foto do ADM Danilson:**

### **Nome do Arquivo:**
```
publicassetsavatarsedmilson.jpg
```

### **Localização:**
```
public/assets/avatars/publicassetsavatarsedmilson.jpg
```

### **Configuração no Código:**
```typescript
{
  name: 'ADM Danilson',
  avatar: '/assets/avatars/publicassetsavatarsedmilson.jpg',
  hasRealPhoto: true,
  text: '💎 Site confiável e rápido, sempre recebo meus diamantes! 🇦🇴',
  stars: 5,
}
```

## 🔍 **Como Verificar se Funcionou:**

### **1. Foto Aparece:**
- ✅ Avatar mostra a foto real do ADM Danilson
- ✅ Efeitos de hover funcionam
- ✅ Borda azul e sombra visíveis

### **2. Fallback Funciona:**
- ✅ Se a imagem não carregar, mostra a inicial "E"
- ✅ Gradiente azul/roxo na inicial

### **3. Responsividade:**
- ✅ Funciona em mobile e desktop
- ✅ Tamanho correto (48x48px)

## 🚨 **Se a Foto Não Aparecer:**

### **Verificar:**
1. **Arquivo existe** em `public/assets/avatars/publicassetsavatarsedmilson.jpg`
2. **Nome correto** (sem espaços ou caracteres especiais)
3. **Formato suportado** (JPG, PNG, WebP)
4. **Console do navegador** para erros

### **Testar Fallback:**
- Se a foto não carregar, deve aparecer a inicial "E" com gradiente
- Isso confirma que o sistema está funcionando

## 🎉 **Resultado Esperado:**

Após seguir estes passos, você verá:
- ✅ **Foto real** do ADM Danilson no carrossel
- ✅ **Efeitos visuais** mantidos
- ✅ **Sistema robusto** com fallback
- ✅ **Performance otimizada**

## 📞 **Suporte:**

Se tiver problemas:
1. **Verifique** se o Node.js foi instalado corretamente
2. **Confirme** se o arquivo da foto está no local correto
3. **Teste** o fallback automático
4. **Verifique** o console do navegador para erros

**Boa sorte! A foto do ADM Danilson deve aparecer perfeitamente!** 🚀
