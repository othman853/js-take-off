# Funções

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

soma(1,1) // 2
```

Em um primeiro momento, parece não existir uma grande diferença entre uma função convencional e uma arrow function, no entanto, é possível tornar as coisas mais simples:

```js
const soma = (umNumero, outroNumero) => umNumero + outroNumero

soma(1,1) // 2
```

Em uma arrow function, quando o corpo da função possui somente um linha, não é necessário especificar chaves \({}\) nem return, a função retornará o resultado da expressão de sua única linha, sendo no caso do exemplo acima, `umNumero + outroNumero`.

### Enviando Funções por parâmetro

É possível enviar uma função por parâmetro para outra função:

```js
const oi = () => 'Oi'

const saudarPessoa = (saudacao, nome) => saudacao() + ', ' + nome

saudarPessoa(oi, 'Helen Keller') // Oi, Helen Keller
```

### Funções retornando funções

É possível que uma função retorne uma função:

```js
const multiplicar = (multiplicador) => (valor) => multiplicador * valor

multiplicar(2) // Retorna uma funcao que recebe um valor e o multiplica por 2

// O que equivale a:
const multiplicaPor2 = multiplicar(2)

const multiplicaPor3 = multiplicar(3)

// E permite coisas como:
multiplicaPor2(2) // 4

multiplicaPor3(2) // 6
```

### Composição de funções

Funções que retornam e recebem funções são muito mais úteis do que parecem em um primeiro momento. É possível, por exemplo, compor funções:

```js
const soma = (a, b) => a + b

const dobra = (valor) => valor + valor

const multiplica = (multiplicador) => (valor) => multiplicador * valor

const somaDobros = (valorA, valorB) => soma(dobra(valorA), dobra(valorB))

const multiplicaPor3 = multiplica(3)

const somaDobrosEMultiplicaPor3 = (valorA, valorB) => multiplicaPor3(somaDobros(valorA, ValorB))

somaDobrosEMultiplicaPor3(1, 1) // 12
```



