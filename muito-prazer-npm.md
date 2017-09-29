# Automação de tarefas

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

O npm possui apelidos padrões para scripts, que possuem um papel específico dentro de um projeto, como:

* **start**: Espera-se que ao executar este comando, o projeto será executado
* **test**: Espera-se que ao executar o comando deste apelido, os testes do projeto serão executados

Todos os apelidos padrões do npm pode ser executados como:

```
npm <apelido>
```

No entanto, não precisamos nos restringir à apelidos padrões, podemos criar nossos próprios apelidos, porém, precisamos executá-los de outra forma:

```
npm run <meu-apelido>
```



