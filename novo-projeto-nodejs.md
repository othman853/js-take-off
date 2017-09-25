# Novo projeto Node.js

Antes de qualquer coisa, precisamos [instalar o node](https://nodejs.org/en/download/). 



Depois de o termos instalado, haverão dois novos comandos disponíveis:

## Comando node: REPL e Scripts

#### O que é um REPL

REPL é uma sigla em inglês para **R**ead **E**val **P**rint **L**oop, o que significa que esta é uma ferramenta que pode ser utilizada para validar expressões de uma linguagem sem ter que escrever um arquivo para ser compilado/interpretado. Isso significa que, ao digitar `node` no terminal, vai ser possível validar expressões JavaScript com uma resposta imediata:

```
> 1 + 1
2
```

#### Executando Scripts

Além do REPL, o comando node também pode receber como parâmetro um arquivo de script, que será interpretado e executado:

Se criarmos um arquivo chamado bom-dia.js contendo somente a seguinte linha:

console.log\('Bom dia'\)



E executarmos este script com o comando node bom-dia.js



Teremos a seguinte mensagem no terminal:



Dado que eu criei um arquivo chamado `bom-dia.js`

E o arquivo possui o seguinte conteúdo:

console.log\('Bom dia'\)



Quando eu executar node bom-dia.js



Então eu verei a mensagem Bom dia no terminal



## npm: Ferramenta de build

O que é um build?

Criamos uma pasta para acomodar o código:

```
mkdir meu-projeto; cd meu-projeto
```

Inicializamos o projeto através do npm:

```
npm init
```



