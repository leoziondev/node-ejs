const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "EJS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "Muito fácil de usar!"
        },
        {
            title: "A",
            message: "AMAZING JS STACK"
        },
        {
            title: "I",
            message: "Install ejs"
        },
        {
            title: "S",
            message: "Sintaxe simples"
        }
    ];    

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS!"

    res.render("pages/index", {
        qualitys: items,        
        subtitle
    });
})

app.get("/sobre", function (req, res) {

    const featuresItems = [
        {
            icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
            title: 'Use Javascript simples',
            description: 'Use Javascript simples. Amamos JavaScript. É uma linguagem totalmente amigável. Todas as linguagens de modelagem tornam-se completas de Turing. Basta eliminar o intermediário e usar JS!',
        },
        {
            icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
            title: 'Tempo de desenvolvimento rápido',
            description: 'Não perca tempo e atenção tentando descobrir uma nova sintaxe misteriosa por causa da "elegância" - ou como pré-processar seus dados para que eles realmente sejam renderizados corretamente.',
        },
        {
            icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
            title: 'Sintaxe simples',
            description: 'Código JavaScript em tags scriptlet simples e diretas. Basta escrever um JavaScript que emita o HTML que você deseja e fazer o trabalho!',
        },
        {
            icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
            title: 'Depuração fácil',
            description: 'É fácil depurar erros de EJS: seus erros são exceções simples de JavaScript, com números de linha de modelo incluídos.',
        },
        {
            icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
            title: 'Desenvolvimento ativo',
            description: 'EJS tem uma grande comunidade de usuários ativos e a biblioteca está em desenvolvimento ativo. Teremos prazer em responder às suas perguntas ou ajudá-lo.',
        },
        {
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            title: 'Execução rápida',
            description: 'Todos nós sabemos o quão rápido o V8 e os outros tempos de execução do JavaScript ficaram. O EJS armazena em cache as funções JS intermediárias para execução rápida.',
        },
    ];

    res.render("pages/about", {
        features: featuresItems,
    });
})

app.listen(8080);
console.log('Server Start ...')