## Muito prazer, npm

O npm é uma ferramenta adicional ao node, que é instalada junto com ele. Portanto, quando instalamos node, instalamos o npm junto. Para quê serve o npm? Podemos entendê-lo como a **ferramenta de build** \(mais à respeito disso no apêndice\) oficial do node. Como ferramenta de build, o npm se torna fundamental para um projeto, pois ele é responsável por muitas tarefas que envolvem o desenvolvimento de um projeto. Nesse momento, duas capacidades do npm são relevantes:

### Gestão de pacotes

Neste contexto, de forma simples, podemos entender _**pacote**_ como um pedaço de software reutilizável entre diferentes projetos. Pensando em uma analogia:



> Imaginando que o nosso projeto é construir um carro, precisamos de um motor para que o carro possa andar e, por consequência, um motor precisa de um sistema de refrigeração.



À partir daí \(se carros fossem como software\), temos duas opções:

* Projetar e construir um sistema de refrigeração para o motor

* Reutilizar um sistema de refrigeração já construído

Ainda seguindo a analogia, o repositório do npm é uma autopeça contendo milhares de partes de carros que já foram construídas por outras pessoas que tiveram que fazer carros semelhantes aos nossos. Poderíamos utilizar este repositório para encontrar e utilizar um sistema de refrigeração pronto, que foi projetado e testado por muita gente e que servisse para o nosso caso.

Além disso, o npm também facilita a forma como adicionamos as peças de um projeto. Ao invés de irmos até a loja buscar um novo componente do carro sempre que necessário, fazemos um pedido para a loja especificando tudo que precisamos e deixamos que a loja nos entregue tudo de maneira organizada sempre que for preciso.

Deixando o carro de lado e pensando em software novamente, podemos observar alguns exemplos reais de pacotes do npm:

* [Mongoose](https://www.npmjs.com/package/mongoose): uma biblioteca para facilitar a interação com bancos de dados MongoDB 
* [Moment](https://www.npmjs.com/package/moment): Uma biblioteca para manipular datas
* [Mocha](https://www.npmjs.com/package/mocha): Uma biblioteca de execução de testes
* [Express](https://www.npmjs.com/package/express): Um framework para construção de aplicações web baseadas em rotas

### Automação de tarefas

Desenvolver um software envolve sempre executar tarefas repetitivas durante um dia de trabalho. Coisas como executar os testes, ou criar algumas pastas temporárias que o projeto precisa utilizar ao executar, são exemplos. Na maioria das vezes, estas tarefas envolvem comandos complexos com inúmeros parâmetros e informações difíceis de memorizar e chatas de escrever repetidas vezes.

Para esses casos, o npm permite criar apelidos para estes comandos longos. Isso traz duas grandes vantagens:

* Não precisamos mais memorizar comandos gigantes
* O npm se torna a ferramenta padrão dos projetos, centralizado seus comandos e scripts em um só lugar e criando uma maneira padronizada de executá-los

Abaixo temos um exemplo quase real de um caso onde o npm seria útil. Imagine que, para cada vez que um projeto precise ter seus testes executados, uma desenvolvedora teria que executar o seguinte comando:

```
./cria-pastas-temporarias && ./copia-arquivos-estaticos --usar-svg && ./executa-testes
```

Isso seria bastante exaustivo. Para resolver esse problema, bastaria editar o arquivo **package.json**, adicionando a configuração de um apelido na seção de "scripts". Algo como:

```
"scripts": {
  "test": "./cria-pastas-temporarias && ./copia-arquivos-estaticos --usar-svg && ./executa-testes"
}
```

Dessa forma, ao invés de executar o comando gigante toda vez, bastaria:

```
npm test
```

O npm possui apelidos padrões para scripts, que possuem um papel específico em um projeto, como:

* **start**: Espera-se que ao executar este comando, o projeto será executado
* **test**: Espera-se que ao executar o comando deste apelido, os testes do projeto serão executados



