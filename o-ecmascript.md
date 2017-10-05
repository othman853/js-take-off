# O ECMAScript

O ECMAScript é a especificação do JavaScript. Isso é dizer que ECMAScript é uma espécie de documentação onde estão as definições de o que é JavaScript e como cada browser ou plataforma devem implementar seus motores de interpretação JavaScript para que estes interpretem, bem, JavaScript, ou seja, que entenda JavaScript como a mesma coisa que todos os outros browsers entendem. O ECMAScript é, portanto, o guia oficial seguido por cada empresa/equipe/pessoa que desenvolve um browser que interprete JavaScript.

É dessa forma que os browsers possuem interpretadores de JavaScript que entendem JavaScript como sendo a mesma coisa. Na verdade, é quase isso. Alguns browsers implementam funcionalidades do JavaScript que ainda não foram implementadas em outros browsers \(ou nem estão na especificação ECMAScript\).

### Incompatibilidade e Graceful Degradation

Essas diferenças causam incompatibilidade entre browsers e é por isso que às vezes se deve escrever partes do código específicas para alguns browsers \(Internet Explorer é um caso clássico\). Isso se torna especialmente importante quando nosso código precisa suportar browsers antigos \(Internet Explorer 6, por exemplo\) que não entendem versões mais recentes de JavaScript, o que faz com que seja necessário implementar _polyfills_ \(reimplementação "manual" de funcionalidades mais recentes que não estão presentes em versões mais antigas de uma linguagem\).

A biblioteca Modernizr, por exemplo, é útil para saber quando podemos ou não utilizar uma funcionalidade do JavaScript em um browser. Podemos utilizar geolocalização na versão mais recente do Chrome, porém, não podemos fazer o mesmo no Internet Explorer 8. Modernizr nos permite identificar essas situações e implementar alguma alternativa para as funcionalidades que não podemos utilizar, o que é popularmente conhecido como _**Graceful Degradation**_.

### **ES5 e ES6**

A versão com melhor compatibilidade atualmente é a versão 5 do ECMAScript \(tendo em vista a retrocompatibilidade\). No entanto, a maioria dos browsers nas suas versões mais recentes já suportam as funcionalidades do ES6 \(ou, oficialmente, ES2015\). A parte triste disso é que o ES6 trouxe muitas melhorias ao JavaScript, possibilitando inúmeras maneiras de escrever um código melhor, mais e simples e mais legível.

### **Transpiling de código**

_Existe alguma forma de usar ES6 no browser mantendo a compatibilidade? E se tivesse uma ferramenta que fizesse polyfills automaticamente?_

Bem, é possível usar código ES6 em browsers e ainda assim manter a compatibilidade com browsers mais velhos. Através de ferramentas como o Babel, por exemplo, que leem o código escrito em ES6 e o _transpilam_ para um ES5 feio de ler mas compatível com a maioria dos browsers. Através do Babel, é possível efetuar conversões de código como:

```js
// forEach em ES6 usando arrow functions, uma funcionalidade exclusiva do ES6

[1, 2, 3].forEach(n => console.log(n))
```

```js
// Código acima transformado em ES5 pelo Babel:

[1, 2, 3].forEach(function(n) {
  console.log(n);
})
```

Apesar de Babel e transpiling serem amplamente adotados hoje em dia, eles ainda não são relevantes para entendermos como funciona o JavaScript no Browser.

