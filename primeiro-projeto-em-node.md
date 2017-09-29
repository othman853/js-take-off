# Primeiro projeto em node

Até então, temos uma pasta com um arquivo de olá mundo. Uma vez que tudo deu certo, podemos prosseguir para planos mais ambiciosos: um projeto.

### Muito prazer, npm

O npm é uma ferramenta adicional ao node, que é instalada junto com ele. Portanto, quando instalamos node, instalamos o npm junto. Para quê serve o npm? Podemos entendê-lo como a **ferramenta de build** \(mais à respeito disso no apêndice\) oficial do node, uma ferramenta de build é, basicamente, uma ferramenta utilizada em projetos para estabelecer uma solução padrão de realizar diversas tarefas relacionadas à construção de um projeto. Talvez não seja tão claro agora, e nem precisa estar claro, tudo que precisamos saber é que utilizaremos o npm para fazer algumas coisas durante o trabalho.

### Por onde começar

A primeira coisa a se fazer para ter um projeto em node é inicializá-lo através do npm:

```
npm init
```

Este comando lhe fará perguntas à respeito de como você prefere configurar seu novo projeto. No momento, estas informações não são importantes, podemos deixar que o `npm` escolha pra gente, pressionando `enter` a cada pergunta que ele nos fizer.

### package.json

Package.json é um arquivo em formato JSON que guarda a configuração principal de um projeto node. Ele é gerado na execução do npm init e conterá informações sobre o projeto que podem ser utilizadas por pessoas ou por ferramentas que irão interagir com o código. Ao ser gerado, ele se parece mais ou menos com o seguinte:

```
{
  "name": "side-projects",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Num primeiro momento, o mais importante deste arquivo são as configurações chamadas **scripts** e **dependencies, **apesar de dependencies não estar presente no package.json quando ele é gerado, não se preocupe, chegaremos lá.

### O formato JSON

De forma simples, o JSON é um padrão utilizado para _descrever_ informações. Ele é baseado na notação de objetos do JavaScript \(daí o nome, JSON significa: **J**ava**S**cript **O**bject **N**otation\). O único papel de um arquivo JSON é estruturar informações, nada mais. Ele é amplamente adotado por ser fácil de ler, isso é fato tanto para pessoas quanto para máquinas, por isso JSON se tornou tão popular. No capítulo de Objetos, a notação do JSON fará mais sentido, já que ela é a notação utilizada pelo JavaScript para representar seus Objetos.

