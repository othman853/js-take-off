# HTTP: a base da internet

De uma maneira extremamente simplificada, podemos entender que a internet nada mais é do que uma rede de computadores conectados, conversando entre si.

Para que essas conversas ocorram, é necessário que os computadores tenham linguagens formais para que todo mundo possa se entender. Imagine alguém que somente fala italiano tentando falar com alguém que fala somente espanhol, seria impossível estabelecer uma comunicação eficiente.

_Tais linguagens são conhecidas como_ _**protocolos**_.

Cada **protocolo** é utilizado para um tipo específico de conversa, por exemplo:

* **SMTP:** é um dos protocolos utilizados para a troca de emails
* **FTP:** é utilizado para trocar arquivos entre computadores
* **HTTP:** utilizado para a transferência de conteúdo hipertexto

### O **HTTP **

O protocolo HTTP pode ser entendido como **a fundação da internet**, pois ele permite que se envie informações de arquivos HTML, CSS e JavaScript de um computador para o outro, o que é fundamental para a vida das páginas web \(a forma principal de comunicação utilizada na internet\).

**Isso quer dizer que, quando alguém acessa um site, para poder vê-lo funcionando num browser é preciso antes receber os dados contendo as definições HTML, CSS e JavaScript deste site através do HTTP.**

Evidentemente, não basta apenas receber tais dados, eles precisam ser interpretados para que façam sentido e se tornem uma página bonita e funcional. Essa é mais uma tarefa para os browsers: interpretar os dados recebidos por HTTP e transformá-los em páginas utilizáveis por seres humanos.

### Browser e HTTP passo a passo

Então, observando o que acontece quando uma pessoa acessa um site qualquer, podemos ver tudo que um browser faz por nós, humanos:

**Comunicação HTTP:**

* Alguém acessa o site no endereço _www.google.com.br_
* O browser faz uma **requisição HTTP** para o servidor que está no endereço _www.google.com.br_
  * Em outras palavras, o browser diz, falando em HTTP com o servidor: _"Por favor, me passe os dados da página"_
* O servidor, de maneira formal, responde ao browser com uma **resposta HTTP** contendo as informações pedidas de forma organizada e padronizada, de um jeito que browser consegue entender o que foi recebido

**Renderização de uma página:**

* O browser recebe o conteúdo HTML, CSS e JS que foi enviado pelo servidor através do HTTP
* O browser começa a interpretar tal conteúdo, transformando-o em uma página
  * Baseada na estrutura descrita pelo HTML
  * Nos estilos descritos nos CSS
  * E em tudo mais que estiver nos JavaScripts

Em princípio, isso é tudo que precisamos saber sobre como os computadores se comunicam através da internet, no entanto, este é um assunto que se aprofunda muito e possui inúmeros conceitos e tópicos que valem a pena serem aprendidos em algum momento.

