# Challenge Amigo Secreto - Oracle Next Education _ Alura

Uma aplicação web interativa para organizar sorteios de amigo secreto de forma simples e divertida!

![Amigo Secreto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## Sobre o Projeto

O Amigo Secreto é uma aplicação web desenvolvida como parte do Challenge Amigo Secreto da Alura. Este projeto tem como objetivo facilitar a organização de sorteios entre amigos, familiares ou colegas de trabalho. Com uma interface moderna e intuitiva, permite adicionar participantes e realizar sorteios aleatórios de forma rápida e segura.

🎓 Challenge Alura: Este projeto faz parte dos desafios práticos da Alura, focado no desenvolvimento de habilidades em JavaScript, HTML e CSS através de um projeto real e funcional.

### 🎯 Objetivo

Criar uma ferramenta digital que substitua os métodos tradicionais de sorteio (papéis em uma caixa), oferecendo:
- Interface amigável e responsiva
- Validação de dados
- Prevenção de duplicatas
- Sorteio verdadeiramente aleatório

## ⚡ Funcionalidades

- ✅ **Adicionar Participantes**: Campo de texto para inserir nomes dos participantes
- ✅ **Validação de Entrada**: Impede nomes vazios ou duplicados
- ✅ **Lista Visual**: Exibe todos os participantes adicionados em tempo real
- ✅ **Sorteio Aleatório**: Algoritmo que garante seleção imparcial
- ✅ **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- ✅ **Atalhos de Teclado**: Pressione Enter para adicionar rapidamente
- ✅ **Foco Automático**: Campo de entrada recebe foco automaticamente
- ✅ **Feedback Visual**: Resultado destacado com formatação especial

## 🎮 Demonstração

### Como Usar:

1. **Digite um nome** no campo de entrada
2. **Clique em "Adicionar"** ou pressione **Enter**
3. **Repita** para adicionar mais participantes
4. **Clique em "Sortear amigo"** para realizar o sorteio
5. **Veja o resultado** destacado na tela

### Exemplo de Uso:
```
👤 Participantes: Ana, Bruno, Carlos, Diana
🎲 Resultado: "O amigo sorteado é: Carlos!"
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com Flexbox
- **JavaScript (ES6)** - Lógica da aplicação e manipulação do DOM

### Recursos Externos
- **Google Fonts** - Tipografia (Inter e Merriweather)

### Conceitos Aplicados
- 🎨 **Design Responsivo**
- ♿ **Acessibilidade Web**
- 🏗️ **Manipulação do DOM**
- 🎲 **Algoritmos de Aleatoriedade**
- ✅ **Validação de Dados**
- 🎯 **Event Handling**

## 📁 Estrutura do Projeto

```
amigo-secreto/
├── 📄 index.html          # Estrutura HTML da aplicação
├── 🎨 style.css           # Estilos e layout
├── ⚡ app.js              # Lógica JavaScript
├── 📁 assets/             # Recursos visuais
│   ├── 🖼️ amigo-secreto.png
│   └── 🔄 play_circle_outline.png
└── 📖 README.md           # Documentação do projeto
```

### Descrição dos Arquivos

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Estrutura HTML com elementos semânticos e acessibilidade |
| `style.css` | Estilos CSS com variáveis, flexbox e design responsivo |
| `app.js` | Lógica JavaScript para manipulação do DOM e sorteio |
| `assets/` | Diretório com imagens e ícones utilizados na interface |

## 🔧 Principais Funções JavaScript

### `adicionarAmigo()`
- Valida e adiciona novos participantes à lista
- Previne duplicatas e entradas vazias

### `atualizarListaAmigos()`
- Atualiza a visualização da lista de participantes
- Manipula o DOM para exibir os nomes

### `sortearAmigo()`
- Realiza o sorteio aleatório usando `Math.random()`
- Exibe o resultado formatado na tela

## 🎨 Características do Design

- **Paleta de Cores**: Azul primário (#4B69FD) com detalhes em laranja (#fe652b)
- **Tipografia**: Combinação de Inter (moderna) e Merriweather (elegante)
- **Layout**: Design em duas seções com proporção 40/60
- **Interatividade**: Botões com hover effects e feedback visual
- **Responsividade**: Adaptável a diferentes tamanhos de tela

---

<div align="center">
  <strong>⭐ Se este projeto foi útil, considere dar uma estrela! ⭐</strong>
</div>

---

*Desenvolvido para o Desafio Amigo Secreto da Oracle Next Education _ Alura*