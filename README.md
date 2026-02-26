# Centro Científico e Cultural da Urca - Hotsite SGB

Este é um hotsite responsivo para acompanhamento das obras do Centro Científico e Cultural da Urca, desenvolvido para a SGB.

## Estrutura do Projeto

```
/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos CSS
├── js/
│   └── script.js      # JavaScript para interações
└── images/            # Imagens do projeto
    ├── logo-sgb.png
    ├── hero-bg.jpg
    ├── obra-foto.jpg
    ├── obra-foto2.jpg
    ├── noticia1.jpg
    ├── noticia2.jpg
    └── noticia3.jpg
```

## Funcionalidades

### 1. **Header Fixo**
- Logo da SGB
- Menu de navegação com scroll suave
- Informações de contato
- Efeito de transparência no scroll

### 2. **Seção Hero**
- Background com overlay azul
- Título principal animado
- Seta animada indicando scroll

### 3. **O Projeto**
- Seção com texto descritivo sobre o projeto
- Layout responsivo e legível

### 4. **Acompanhe as Obras** ⭐
- **Carrossel com 2 layouts diferentes:**
  - **Com foto:** Layout lado a lado (texto + imagem)
  - **Sem foto:** Layout centralizado (apenas texto)
- Navegação por setas
- Suporte a navegação por teclado (←→)
- Suporte a swipe em dispositivos móveis
- Dados dinâmicos via JavaScript

### 5. **Linha do Tempo** ⭐
- **Carrossel horizontal navegável:**
  - 3 slides: 2025, 2026, e 2027+
  - Navegação por setas laterais
  - Marcos temporais organizados por ano
  - Item ativo destacado visualmente
- Subtítulo próximo ao título principal
- Suporte a navegação por teclado (←→)
- Suporte a swipe em dispositivos móveis
- Indicadores visuais de navegação

### 6. **Notícias**
- Carrossel de notícias com imagem e texto
- Navegação por setas
- Layout responsivo

### 7. **Dúvidas Frequentes (FAQ)**
- Seção expansível com perguntas e respostas
- Animações suaves de abertura/fechamento
- Apenas uma pergunta aberta por vez

### 8. **Footer**
- Botão "Voltar ao Topo" com animação

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica
- **CSS3:** 
  - Flexbox e Grid
  - Animações e transições
  - Media queries para responsividade
  - Gradientes e efeitos visuais
- **JavaScript:**
  - Manipulação do DOM
  - Carrossels dinâmicos
  - Animações de scroll
  - Navegação por teclado e touch

## Características Especiais

### Sistema de Obras Dinâmico
O sistema de "Acompanhe as Obras" foi desenvolvido para alternar entre dois layouts:

```javascript
// Exemplo de obra com foto
{
    date: "26/02/26",
    text: "Descrição da obra...",
    image: "images/obra-foto.jpg",
    hasImage: true
}

// Exemplo de obra sem foto
{
    date: "15/02/26", 
    text: "Descrição da obra...",
    image: null,
    hasImage: false
}
```

### Animações e Interatividade
- Scroll suave entre seções
- Animações de entrada dos elementos
- Feedback visual em hover
- Transições suaves entre conteúdos

### Responsividade
- Layout adaptável para desktop, tablet e mobile
- Menu colapsável em telas pequenas
- Imagens responsivas
- Typography scaling

## Como Usar

1. **Navegação:** Use o menu fixo no topo para navegar entre seções
2. **Obras:** Use as setas ou teclado (←→) para navegar pelas atualizações
3. **Timeline:** Use as setas laterais ou teclado (←→) para navegar pelos anos
4. **Notícias:** Use as setas para ver diferentes notícias
5. **FAQ:** Clique nas perguntas para expandir as respostas

## Personalização

### Adicionando Novas Obras
Edite o array `obrasData` em `js/script.js`:

```javascript
const obrasData = [
    {
        date: "DD/MM/AA",
        text: "Sua descrição aqui...",
        image: "images/sua-imagem.jpg", // ou null para layout sem foto
        hasImage: true // ou false
    }
];
```

### Adicionando Novas Notícias
Edite o array `noticiasData` em `js/script.js`:

```javascript
const noticiasData = [
    {
        title: "TÍTULO DA NOTÍCIA",
        text: "Texto da notícia...",
        image: "images/sua-noticia.jpg"
    }
];
```

## Cores da Marca

- **Azul Principal:** #1e5aa8
- **Azul Secundário:** #2c7be5
- **Cinza Claro:** #f8f9fa
- **Texto:** #333333

## Navegador Suportados

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Autor

Desenvolvido para SGB - Sistema de Gerenciamento de Barragens
