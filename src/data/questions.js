const questions = [

    {
        id: 1,
        question: "Qual é o nome completo do samuel?",
        options: ["Samuel Moreira Ferreira", "Samuel Antônio Moreira Ferreira", "Samuel Silva", "Samuel Ferreira"],
        answer: "Samuel Moreira Ferreira",
        points: 2
    },

    {
        id: 2,
        question: "Qual é a data de nascimento do samuel?",
        options: ["01/04/2008", "05/10/2011", "01/02/2008", "01/02/2007"],
        answer: "01/02/2008",
        points: 3
    },

    {
        id: 3,
        question: "Por qual desses motivos o samuel NÃO tomou uma ocorrência na escola?",
        options: ["Pulou a janela", "Falar que o israel peidou", "Usou um de seus 5 celulares", "Verificou se o bumbum estava realmente sujo"],
        answer: "Verificou se o bumbum estava realmente sujo",
        points: 1
    },

    {
        id: 4,
        question: "O samuel está autorizado: ",
        options: ["Beber na garrafa alheia", "De bermuda", "Descobrir um novo jeito de andar de bike", "A dormir demais"],
        answer: "De bermuda",
        points: 1
    },

    {
        id: 5,
        question: "Qual comando cria um novo projeto React com Vite?",
        options: [
            "npx create-react-app",
            "npm init vite@latest",
            "npm install vite",
            "npx react-vite"
        ],
        answer: "npm init vite@latest",
        points: 2
    },
    
    {
        id: 6,
        question: "Qual hook pode ser usado para armazenar valores entre renderizações sem causar re-render?",
        options: ["useState", "useEffect", "useRef", "useMemo"],
        answer: "useRef",
        points: 4
    },

    {
        id: 7,
        question: "Qual hook é mais indicado para memorizar valores derivados de cálculos caros?",
        options: ["useReducer", "useMemo", "useEffect", "useCallback"],
        answer: "useMemo",
        points: 5
    },

    {
        id: 8,
        question: "Qual hook é usado para funções que precisam ser memorizadas?",
        options: ["useEffect", "useCallback", "useMemo", "useState"],
        answer: "useCallback",
        points: 4
    },

    {
        id: 9,
        question: "Em React, como chamamos o processo de atualizar a interface quando o estado muda?",
        options: ["Binding", "Re-renderização", "Rebuild", "Patch"],
        answer: "Re-renderização",
        points: 3
    },
    
    {
        id: 10,
        question: "Qual ferramenta é usada para inspecionar o estado e props de componentes React no navegador?",
        options: ["Redux DevTools", "React DevTools", "Chrome Inspector", "Vite Plugin"],
        answer: "React DevTools",
        points: 2
    }
]

export default questions