# 📸 Como Trocar a Imagem da Página "Sobre Nós" - DimaStore

## 🎯 **Objetivo:**
Trocar a imagem da seção "Nossa História" na página "Sobre Nós" por uma imagem personalizada da DimaStore.

## 📁 **Nome da Imagem:**
```
equipe_dimastore.jpg
```

## 📂 **Localização:**
```
public/assets/about/equipe_dimastore.jpg
```

## 🔧 **Configuração no Código:**
O código já está configurado para usar a nova imagem:

```typescript
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
```

## 📋 **Checklist para Adicionar a Imagem:**

### **1. Preparar a Imagem:**
- [ ] **Formato**: JPG, PNG ou WebP
- [ ] **Tamanho**: Recomendado 600x400px ou maior
- [ ] **Qualidade**: Boa resolução
- [ ] **Proporção**: Retangular (16:9 ou 4:3) recomendado

### **2. Salvar no Projeto:**
- [ ] **Pasta**: `public/assets/about/`
- [ ] **Nome**: `equipe_dimastore.jpg` (exatamente assim)
- [ ] **Permissões**: Arquivo legível

### **3. Testar:**
- [ ] **Carregamento** da imagem
- [ ] **Fallback** se imagem falhar (mostra imagem externa)
- [ ] **Responsividade** em mobile/desktop
- [ ] **Efeitos visuais** (sombra, bordas arredondadas)

## 🎨 **Características da Implementação:**

### **✅ Funcionalidades:**
- **Imagem personalizada** da DimaStore
- **Fallback automático** para imagem externa se a local falhar
- **Responsivo** em todos os dispositivos
- **Efeitos visuais** mantidos (sombra, bordas arredondadas)
- **Performance otimizada**

### **🔄 Fallback Automático:**
Se a imagem local não carregar, automaticamente mostra a imagem externa original.

### **📱 Responsividade:**
- **Mobile**: Adapta automaticamente
- **Desktop**: Mantém proporções
- **Bordas**: Arredondadas (rounded-lg)
- **Sombra**: Efeito de profundidade (shadow-lg)

## 🧪 **Como Testar:**

### **Opção 1: Teste Simples**
1. **Abra** o arquivo `index.html` no navegador
2. **Navegue** até a página "Sobre Nós"
3. **Verifique** se a nova imagem aparece

### **Opção 2: Teste no Projeto Principal**
1. **Instale o Node.js** (seguindo `INSTALAR_NODEJS.md`)
2. **Execute** `npm install` e `npm run dev`
3. **Acesse** http://localhost:5173
4. **Navegue** até "Sobre Nós"

## 🔍 **O que Verificar:**

### **✅ Se Funcionar:**
- Nova imagem da equipe DimaStore aparece
- Efeitos visuais mantidos (sombra, bordas)
- Responsivo em mobile e desktop
- Carregamento rápido

### **❌ Se Não Funcionar:**
- Aparece a imagem externa original (fallback)
- Verificar console do navegador (F12)
- Verificar se o arquivo existe no local correto

## 🚨 **Se Ainda Não Funcionar:**

### **Verificar:**
1. **Console do navegador** (F12) para erros
2. **Caminho do arquivo** está correto
3. **Formato da imagem** é suportado
4. **Tamanho do arquivo** não é muito grande

### **Soluções:**
1. **Verificar permissões** do arquivo
2. **Testar com imagem menor** (menos de 2MB)
3. **Converter para formato diferente** (PNG, WebP)
4. **Verificar se o nome está exato**: `equipe_dimastore.jpg`

## 🎉 **Resultado Esperado:**

Após adicionar a imagem, você verá:
- ✅ **Imagem personalizada** da equipe DimaStore
- ✅ **Efeitos visuais** funcionando
- ✅ **Sistema robusto** com fallback
- ✅ **Performance otimizada**

## 📞 **Suporte:**

Se tiver problemas:
1. **Verifique** se o arquivo está no local correto
2. **Confirme** se o nome está exato: `equipe_dimastore.jpg`
3. **Teste** o fallback automático
4. **Verifique** o console do navegador para erros

**Agora é só adicionar a imagem da equipe DimaStore em `public/assets/about/equipe_dimastore.jpg` e testar!** 🚀
