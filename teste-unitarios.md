# Organização de dependências

> Se você não é familiar com o conceito de pacotes ou dependências de um projeto, veja o conteúdo do apêndice.

O primeiro passo é adicionar as bibliotecas _mocha_ e _chai_ à nossa lista de _**dependências de desenvolvimento**_:

```
npm install --save-dev mocha chai
```

Este comando resultará nas seguintes alterações do projeto:

* A criação da pasta** **_**node\_modules**_

  * Que conterá o código das bibliotecas **chai** e **mocha**

* O arquivo _**package-lock.json**_

  * Que conterá informações da versão das bibliotecas que estamos utilizando

### Escopos

O node possui diferentes escopos para suas dependências

Um projeto node possui diferentes _**escopos**_ dependência:

#### Desenvolvimento

#### Produção



