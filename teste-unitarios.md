# Testes unitários

Testes geralmente não são o primeiro passo para aprender uma nova tecnologia, pois muitas vezes eles assumem que a pessoa que está escrevendo o código já domina a linguagem. No entanto, JavaScript possui algumas bibliotecas em node que, com um pouquinho de ajuda, não são uma barreira imensa para começar o aprendizado através dos testes. Portanto, porque não começamos pelos testes?

### Começar pelos testes é uma boa ideia

Este guia está sendo escrito por alguém que já passou pelas dores de aprender JavaScript, assim como as dores de aprender a testar o JavaScript. Eu pessoalmente acredito que TDD, juntamente com um material ou alguém que possa servir de guia básico, pode ser usado como uma excelente ferramenta de aprendizado e este é meu objetivo.

### Regras de convivência

Antes de qualquer coisa, é importante estabelecer regras fundamentais:

* Você não precisa saber tudo que está acontecendo nos exemplos
* Você não precisa dominar os comandos nem entender 100% do código
* Você não pode ceder à síndrome do impostor porque pensa que não sabe nada
* No começo, concentre-se mais nos códigos que farão os testes passarem do que nos testes em si
* Se preocupe em entender como o JavaScript funciona antes de tentar resolver problemas imensos utilizando-o

### Configurando a estrutura de testes

Uma vez que tenhamos as regras básicas estabelecidas, vamos começar, nunca esquecendo das regras.

O primeiro passo é adicionar as bibliotecas _mocha_ e _chai_ à nossa lista de _**dependências de desenvolvimento**_:

```
npm install --save-dev mocha chai
```

Este comando resultará nas seguintes alterações do projeto:

* A criação da pasta** **_**node\_modules**_
  * Que conterá o código das bibliotecas **chai** e **mocha**

* O arquivo _**package-lock.json**_
  * Que conterá informações da versão das bibliotecas que estamos utilizando



Organização de dependências

O node possui diferentes escopos para suas dependências

Um projeto node possui diferentes _**escopos**_ dependência:

#### Desenvolvimento

#### Produção



