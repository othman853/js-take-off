## Muito prazer, npm

O npm é uma ferramenta adicional ao node, que é instalada junto com ele. Portanto, quando instalamos node, instalamos o npm junto. Para quê serve o npm? Podemos entendê-lo como a **ferramenta de build** \(mais à respeito disso no apêndice\) oficial do node. Como ferramenta de build, o npm se torna fundamental para um projeto, pois ele é responsável por muitas tarefas que envolvem o desenvolvimento de um projeto. Dentre outras coisas, o npm ajuda bastante no seguinte:

### Gestão de dependências

Todo projeto de software atual possui dependências externas. Podemos entender _**dependência**_ como todo código de terceiros que utilizamos para não reinventar todas as rodas que envolvem construir um software. Refletindo rapidamente, poderíamos citar alguns exemplos reais de bibliotecas node que podem ser dependência de um projeto:

* Uma biblioteca de acesso à banco de dados: mongoose
* Uma biblioteca de manipulação de datas: moment
* Uma biblioteca de execução de testes: mocha

Todo novo projeto de software tem problemas comuns que precisam de resolução e, é bem provável que alguém já tenha resolvido este problema antes de você no mundo open source. Podemos utilizar estas soluções disponíveis mundo afora através da gestão de dependências fornecida pelo npm. Mais adiante, veremos em mais detalhe como o npm gerencia dependências.

### Automação de tarefas

O npm possui definições de scripts. Isso é dizer que podemos automatizar tarefas repetitivas do projeto de uma maneira simples e organizada utilizando o npm. Os alias de scripts, por exemplo, são úteis para dar um nome simples à um comando que pode ser exaustivamente utilizado no fluxo de desenvolvimento, mas que tem uma sintaxe muito longa para ser memorizada:

```
./cria-pastas-temporarias && ./copia-arquivos-estaticos --usar-svg && ./executa-testes
```

O comando abaixo é apenas um exemplo hipotético, mas que acontece com muita frequência conforme os projetos começam a crescer.
