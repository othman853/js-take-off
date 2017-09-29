# Olá, mundo

Antes de qualquer coisa, precisamos instalar o node. Há um [instalador executável para Mac e Windows](https://nodejs.org/en/download/). A maneira mais fácil de instalá-lo no Linux é através do seu repositório, que pode ser configurado conforme [este guia oficial](https://nodejs.org/en/download/package-manager/).

Para testar se a instalação foi feita corretamente, podemos executar:

```
node --version
```

Este comando irá imprimir na tela a versão do node que acabou de ser instalada.

### Executando Scripts

Uma vez que temos o node corretamente instalado num computador, podemos executar scripts ou comandos independentes \(com o uso do [REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop). Se você não é familiar com a ideia de um REPL, veja o apêndice\). Neste momento tudo que precisamos entender é como executar scripts, pois é como um projeto em node começa a funcionar.

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

### Funcionou?

Para validar se nosso script funciona, podemos executá-lo:

```
node ola-mundo.js
```

Se tudo deu certo, deveríamos ver uma mensagem no terminal:

```
Bom dia
```



