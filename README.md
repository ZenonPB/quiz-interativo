# 🎯 Quiz Interativo

Um quiz dinâmico e interativo desenvolvido com React, que permite aos usuários testarem seus conhecimentos enquanto acompanham seu desempenho em tempo real.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📋 Objetivo do Projeto

O **Quiz Interativo** foi desenvolvido para proporcionar uma experiência educacional envolvente, onde os usuários podem:

- ✅ Responder questões de múltipla escolha
- ⏱️ Acompanhar o tempo gasto em cada questão
- 📊 Visualizar estatísticas detalhadas de desempenho
- 🔄 Reiniciar o quiz quantas vezes quiser
- 🎨 Desfrutar de uma interface moderna e responsiva

O projeto demonstra conceitos fundamentais do React, como gerenciamento de estado, componentes reutilizáveis e renderização condicional.

## 🏗️ Estrutura dos Componentes

A aplicação é organizada em componentes modulares e reutilizáveis:

```
src/
├── components/
│   ├── Header/
│   │   ├── index.jsx              # Cabeçalho com título, progresso e timer
│   │   └── Header.module.css      # Estilos do cabeçalho
│   │
│   ├── QuestionCard/
│   │   ├── index.jsx              # Card de questão com opções
│   │   └── QuestionCard.module.css # Estilos do card
│   │
│   └── ScoreBoard/
│       ├── index.jsx              # Painel de resultados finais
│       └── ScoreBoard.module.css  # Estilos do painel
│
├── data/
│   └── questions.js               # Banco de dados das questões
│
├── App.jsx                        # Componente principal
├── App.module.css                 # Estilos globais
└── main.jsx                       # Ponto de entrada da aplicação
```

### 🧩 Detalhamento dos Componentes

#### **App.jsx**
Componente raiz que gerencia o estado global da aplicação:
- **Estado `current`**: Controla a questão atual
- **Estado `answer`**: Armazena todas as respostas do usuário
- **Estado `step`**: Alterna entre "quiz" e "resultado"
- Coordena a navegação entre questões e tela de resultados

#### **Header**
Exibe informações contextuais do quiz:
- Título do quiz
- Progresso atual (questão X de Y)
- Timer que reinicia a cada nova questão

#### **QuestionCard**
Renderiza a questão atual:
- Texto da questão
- Quatro opções de resposta em grid
- Timer individual por questão
- Callback para registrar a resposta

#### **ScoreBoard**
Painel completo de resultados:
- Pontuação total obtida
- Percentual de acertos
- Melhor tempo de resposta
- Lista detalhada de todas as questões com feedback visual
- Botão para reiniciar o quiz

## 🚀 Como Executar o Quiz

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd quiz-interativo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```
   ou
   ```bash
   yarn dev
   ```

4. **Acesse no navegador**
   
   Abra seu navegador e acesse:
   ```
   http://localhost:5173
   ```

### 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## 🎮 Como Jogar

1. **Responda as questões**: Clique em uma das quatro opções disponíveis
2. **Acompanhe seu progresso**: O cabeçalho mostra qual questão você está e quanto tempo levou
3. **Veja seus resultados**: Após a última questão, visualize seu desempenho detalhado
4. **Tente novamente**: Clique em "Reiniciar Quiz" para fazer uma nova tentativa

## 🎨 Funcionalidades

- ⚡ **Performance otimizada** com Vite
- 🎯 **Sistema de pontuação** com pesos diferentes por questão
- ⏰ **Cronômetro individual** para cada questão
- 📱 **Design responsivo** que funciona em diversos dispositivos
- 🌈 **Feedback visual** para respostas corretas e incorretas
- 🔄 **Reinício rápido** para jogar múltiplas vezes

## 📦 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca para construção de interfaces
- **Vite 7.1.7** - Build tool e dev server
- **CSS Modules** - Estilos com escopo local
- **ESLint** - Linter para garantir qualidade do código

## 🤝 Contribuindo

Sinta-se à vontade para adicionar novas questões editando o arquivo `src/data/questions.js`. Cada questão deve seguir o formato:

```javascript
{
  id: 1,
  question: "Sua pergunta aqui?",
  options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
  answer: "Resposta correta",
  points: 2
}
```

---

<div align="center">
  
**Desenvolvido por Zenon**

</div>