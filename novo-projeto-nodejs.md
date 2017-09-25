# Novo projeto Node.js

Antes de qualquer coisa, precisamos [instalar o node](https://nodejs.org/en/download/). Para testar se a instalação foi feita corretamente, podemos executar:

```
node --version
```

Este comando irá imprimir na tela a versão do node que acabou de ser instalada. 

### Executando Scripts

Uma vez que temos o node corretamente instalado num computador, podemos executar scripts ou comandos independentes \(com o uso do [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop), vamos voltar nesse assunto depois\). Neste momento tudo que precisamos entender é como executar scripts, pois é como um projeto em node começa a funcionar.



### Olá mundo

Para fins de sanidade, criamos uma pasta para agrupar todos os futuros arquivos do nosso projeto:

```
mkdir ola-js
```

Depois, dentro desta pasta, criamos um arquivo para escrever nosso script de olá mundo:

```bash
cd ola-js # Acessa a pasta que criamos

touch ola-mundo.js # cria um arquivo vazio chamado ola-mundo.js
```

Então, implementamos o olá mundo em JavaScript com a seguinte linha:

```js
console.log('Bom dia')
```



