# O mínimo sobre Variáveis

Todos os conceitos e exemplos levarão em consideração o ES6, pois é uma das versões mais populares do JavaScript atualmente. Juntamente com os tipos de variáveis, é bastante importante entender os conceitos por trás dos escopos de variáveis em JavaScript, no entanto, para entender os escopos, existem alguns pré-requisitos, por isso, vamos ver primeiro os tipos de variáveis para depois entendermos mais à fundo o que são escopos e qual escopo cada tipo de variável possui.

Somente com o conteúdo deste capítulo é possível seguir adiante para outros temas, no entanto, **apesar de opcional o **_**capítulo variáveis em mais detalhes, **_**deveria ser eventualmente visitado**.

Basicamente, existem quatro formas diferentes de definir uma variável em JavaScript, cada uma com sua particularidade:

### Sem modificador

```js
fruta = 'Banana'
```

Apesar de ser possível, esta forma **deve ser evitada**, pois ela sempre declara variáveis no escopo global. Veremos mais sobre escopos \(e porque é ruim ficar declarando muitas variáveis no escopo global\) adiante.

### Var

```js
var fruta = 'Banana'
```

_**var**_ era a única maneira existente de se declarar uma variável não-global em ES5.

### Let

```js
let fruta = 'Banana'
```

**let** é a maneira ES6 de declarar variáveis não-globais cujos valores podem ser sobrescritos, ou seja, o seguinte código é válido:

```js
let fruta = 'Banana'
fruta = 'Morango'
```

### Const

```js
const fruta = 'Banana'
```

**const** é a maneira ES6 de declarar variáveis não-globais cujos valores não podem ser sobrescritos. Ou seja, ao declarar uma variável const, não podemos mais alterar seu valor posteriormente, o que torna o seguinte código inválido:

```js
const fruta = 'Banana'
fruta = 'Morango' // Resulta em um erro: Assignment to constant variable
```

E como se declara uma constante usando ES5?

```js
// Provavelmente isso não fara o menor sentido agora, sem problemas. 
// Nada disso importa nesse momento.

Object.defineProperty(window, 'fruta', {value: 'Banana', writable: false})
```



