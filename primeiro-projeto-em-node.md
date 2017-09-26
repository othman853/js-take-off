# Primeiro projeto em node

Até então, temos uma pasta com um arquivo de olá mundo. Uma vez que tudo deu certo, podemos prosseguir para planos mais ambiciosos: um projeto.

### Por onde começar

A primeira coisa a se fazer para ter um projeto em node é inicializá-lo, através do seguinte comando:

```
npm init
```

Este comando lhe fará muitas perguntas à respeito de como você prefere configurar seu novo projeto. No momento, estas informações não são importantes, podemos deixar que o `npm` escolha pra gente, pressionando `enter` a cada pergunta que ele nos fizer.

### package.json

Package.json, um arquivo de configuração foi gerado como resultado da execução do npm init. Este arquivo contém todas as escolhas feitas ao responder as perguntas do npm. Mas, afinal, para que serve este arquivo? O que está guardado nele?

Bem, o package.json é o manifesto de um projeto, o que basicamente significa que ele contém informações gerais à respeito daquele projeto, como:

* nome do projeto 
* versão
* descrição
* arquivo de início 
* alias para scripts
* repositório de versão de controle
* autores
* licença
* dependências

Estas informações servem para muitos propósitos, como identificar o projeto node e configurar ferramentas e scripts utilizados para o fluxo de trabalho de desenvolvimento do projeto.



