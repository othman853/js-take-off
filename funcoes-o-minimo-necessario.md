# O mínimo sobre Funções

### O que é uma função?

Fundamentalmente, uma função pode ser entendida como um bloco de código isolado e "chamável". Isso é dizer que posso definir uma função que executa um código que pode ser reaproveitado em diferentes momentos, bastando _chamar_ a função para executar o código definido.

### Uma declaração de função

```js
function nomeDaFuncao(parametro1, parametro2, parametro3) {
  // Onde a mágica acontece
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

Existe uma maneira alternativa para definirmos funções em JavaScript. É possível "armazenar a declaração de uma função em uma variável":

```js
const soma = function soma(umNumero, outroNumero) {
  return umNumero + outroNumero;
}

// A utilização desta função ocorre da mesma maneira:
soma(1, 1) // 2
```

O que também permite criar funções anônimas \(sem um nome\):

```js
const soma = function (umNumero, outroNumero) {
  return umNumero + outroNumero;
}

soma(1, 1) // 2
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



