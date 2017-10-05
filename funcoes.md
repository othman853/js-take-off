# Funções

O capítulo anterior abordou o mínimo possível à respeito de funções, isto é, os detalhes que são requisitos para entender para que servem e como manipular funções em código JavaScript. Somente com o conteúdo do capítulo anterior seria possível prosseguir através dos próximos capítulos. Porém, neste capítulo constam temas mais aprofundados à respeito de funções, onde são apresentados aspectos importantes sobre o funcionamento das funções. _**Apesar de opcional, este capítulo deveria ser eventualmente revisitado**_. 

### O que é uma função?

Fundamentalmente, uma função pode ser entendida como um bloco de código isolado e "chamável". Isso é dizer que posso definir uma função que executa um código que pode ser reaproveitado em diferentes momentos, bastando _chamar_ a função para executar o código definido. Funções podem ou não receber parâmetros e retornar valores, bem como somente executar um código sem ter que receber ou retornar qualquer valor:

**Uma função que não recebe parâmetros, mas retorna um valor:**

```js
function saudacao() {
  return 'Olá';
}
```

**Uma função que recebe parâmetros e retorna um valor:**

```js
function soma(umNumero, outroNumero) {
  return umNumero + outroNumero;
}
```

**Uma função que recebe parâmetros, mas não retorna um valor \(bem, não explícitamente\):**

```js
function saudacaoNoConsole(nome) {
  console.log('Olá, ' + nome);
}
```

### A anatomia de uma função

A Keyword _**function**_:

```js
function nomeDaFuncao(parametro1, parametro2, parametro3) {
^^^^^^^^
// Serve para indicar que uma função está sendo definida
}
```

O nome da função:

```js
function nomeDaFuncao(parametro1, parametro2, parametro3) {
         ^^^^^^^^^^^^
//       Serve para identificar a funcao sendo definida
}
```

Parâmetros:

```js
function nomeDaFuncao(parametro1, parametro2, parametro3) {
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                    Lista de valores recebidos como argumento pela função
}
```

Chamada de uma função:

```js
// chamando a função através do seu nome, sem passar parâmetros
nomeDaFuncao()

// chamando a função através do seu nome, passando os três parâmetros
nomeDaFuncao('p1', 'p2', 'p3')
```

### Funções como expressões

Existe uma maneira alternativa de declarar funções em JavaScript. É possível armazenar a declaração de uma variável em uma função:

```js
const soma = function soma(umNumero, outroNumero) {
  return umNumero + outroNumero;
}

// A utilização desta função ocorre da mesma maneira:
soma(1, 1) // retornará 2
```

### Arrow functions

No ES6, existe uma versão simplificada de funções, são as chamadas **arrow functions**:

```js
const soma = (umNumero, outroNumero) => {
  return umNumero + outroNumero;
}

soma(1,1) // retornará 2
```

Em um primeiro momento, parece não existir uma grande diferença entre uma função convencional

Hoisting

Declaração de função vs Expressão de função

### Peculiaridades do JavaScript

Uma função **sempre** retornará um valor, mesmo quando não há uma declaração de _return. \_No caso das funções que não possuem um valor de return definido, o valor de retorno será_ **undefined**.

