# O JavaScript dos Browsers

* As tecnologias de uma página web
* Variáveis
* Arrays
* Objetos
* Funções
* Eventos
* DOM
* document e window

## As tecnologias de uma página web

JavaScript foi por muito tempo uma linguagem cujo uso era restrito exclusivamente à criação de páginas web. HTML, CSS e JavaScript são as três linguagens fundamentais para criar páginas web, e cada uma possui uma responsabilidade específica:

### HTML

**H**yper**T**ext **M**arkup **L**anguage. É utilizada para definir a estrutura de uma página, em outras palavras, quais elementos esta página terá. Por exemplo: links, cabeçalho, rodapé, uma lista de elementos ou um parágrafo\).

No começo da internet, fazia muito sentido que os sites fossem criados somente utilizando HTML e nada mais, afinal, HTML serve para definir a estrutura de um documento de **hipertexto**, onde hipertexto pode ser entendido como um documento que permite a criação de links, seja para outras partes do próprio documento ou para outros documentos de hipertexto.

Antigamente, as páginas feitas somente em HTML, eram apenas um monte de links, listas e textos em preto e branco, que permitiam pouquíssimas possibilidades de estilização, não era possível colorir ou formatar o conteúdo. Para isso, passou-se a utilizar o _CSS._

### CSS

**C**ascading **S**tyle **S**heet. O CSS entrou em cena para tornar os documentos HTML mais bonitos. Quando aplicado à um documento HTML, o CSS consegue alterar o visual dos elementos deste documento, permitindo que se adicione cores, formatos, fontes e muitas outras opções. Hoje em dia, o CSS permite efetuar operações complexas, como a aplicação de estilos específicos para diferentes dispositivos e dimensões de tela \(parte das operações que permitem a criação de páginas _responsivas_\) ou até mesmo animações e resposta à eventos \(por exemplo, aplicar um estilo à um elemento quando o usuário passar o mouse por cima deste elemento\).

### JavaScript

O JavaScript, por sua vez, teve diferentes papéis ao longo de sua história. Muitas tarefas que antes só poderiam ser feitas através de JavaScript, como animações e aplicação de estilos de acordo com os eventos, por exemplo, hoje podem ser feitas utilizando somente HTML e CSS. Isso quer dizer que o JavaScript não é mais necessário? Não, o JavaScript ainda permite que se façam inúmeras peripécias que não são possíveis apenas com HTML e CSS. Algumas delas são:

* Animações 2D e 3D \(algumas são factíveis com CSS, mas JavaScript possui mais recursos para isso\)
* Manipulação dos elementos da página
  * Criação de novos elementos que não foram originalmente descritos no HTML
  * Remoção e/ou alteração de elementos existentes
* Implementação de lógica na página
  * Validar o campo CPF de um formulário usando um algorítmo
  * Mostrar a hora atual em um parágrafo \(isso só é possível com JavaScript\)
* Resposta à eventos
  * Por exemplo: Quando a pessoa clicar no botão Olá, mostrar mensagem "Olá"

### Os browsers

Sem os browsers, não existiria a internet da maneira como a conhecemos, tudo seria um monte de texto que acaba sendo quase ilegível para as pessoas, especialmente aquelas que não tem um conhecimento mais aprofundado de como os protocolos utilizados na comunicação entre servidores e clientes funcionam \(já me parece confuso ao tentar apontar este fato\).

#### Como funciona a internet?

De uma maneira extremamente simplificada, podemos entender que a internet nada mais é do que uma rede de computadores conectados, conversando entre si.

Para que essas conversas ocorram, é necessário que os computadores tenham linguagens formais para que todo mundo possa se entender. Imagine alguém que somente fala italiano tentando falar com alguém que fala somente espanhol, seria impossível estabelecer uma comunicação eficiente.

_Tais linguagens são conhecidas como_ _**protocolos**_.

Cada **protocolo** é utilizado para um tipo específico de conversa, por exemplo:

* **SMTP:** é um dos protocolos utilizados para a troca de emails
* **FTP:** é utilizado para trocar arquivos entre computadores
* **HTTP:** utilizado para a transferência de conteúdo hipertexto

**O HTTP é a fundação da internet**, pois ele permite que se envie informações de arquivos HTML, CSS e JavaScript de um computador para o outro, o que é fundamental para a vida das páginas web \(a forma principal de comunicação utilizada na internet\).

**Isso quer dizer que, quando alguém acessa um site, para poder vê-lo funcionando num browser é preciso antes receber os dados contendo as definições HTML, CSS e JavaScript deste site através do HTTP.**

Evidentemente, não basta apenas receber tais dados, eles precisam ser interpretados para que façam sentido e se tornem uma página bonita e funcional. Essa é mais uma tarefa para os browsers: interpretar os dados recebidos por HTTP e transformá-los em páginas utilizáveis por seres humanos.

#### O passo a passo da magia chamada internet

Então, observando o que acontece quando uma pessoa acessa um site qualquer, podemos ver tudo que um browser faz por nós, humanos:

**Comunicação HTTP:**

* Alguém acessa o site no endereço www.google.com.br
* O browser faz uma **requisição HTTP** para o servidor que está no endereço www.google.com.br
  * Em outras palavras, o browser diz, falando em HTTP com o servidor: "Por favor, me passe os dados da página"
* O servidor, de maneira formal, responde ao browser com uma **resposta HTTP** contendo as informações pedidas de forma organizada e padronizada, de um jeito que browser consegue entender o que foi recebido

**Renderização de uma página:**

* O browser recebe o conteúdo HTML, CSS e JS que foi enviado pelo servidor através do HTTP
* O browser começa a interpretar tal conteúdo, transformando-o em uma página
  * Baseada na estrutura descrita pelo HTML
  * Nos estilos descritos nos CSS
  * E em tudo mais que estiver nos JavaScripts

### Como o browser lida com o JavaScript

O browser é um software que possui muitos mecanismos complexos por trás das cenas, tudo para fazer com as páginas sejam renderizadas corretamente. No momento, estamos interessados em apenas um destes mecanismos em particular:  o **motor de interpretação e execução de JavaScript**.

Browsers possuem diferentes motores de interpretação JavaScript, que funcionam de formas diferentes. Por exemplo, o **Google Chrome** possui o **V8** e o **Firefox** possui o **SpiderMonkey**.

Isso levanta o questionamento:

_**Cada browser possui sua própria versão de JavaScript?**_

A resposta mais simples é: **não**. O que levanta outro questionamento:

_**Se cada motor funciona de uma forma diferente, mas o mesmo JavaScript funciona em todos os browsers, como isso acontece?**_

A resposta mais simples seria: **ECMAScript**. No entanto, _não é totalmente verdade que o mesmo JavaScript funciona em todos os browsers_.

#### O ECMAScript

O ECMAScript é a especificação do JavaScript. Isso é dizer que ECMAScript é uma espécie de documentação onde estão as definições de o que é JavaScript e como cada browser ou plataforma devem implementar seus motores de interpretação JavaScript para que estes interpretem, bem, JavaScript, ou seja, que entenda JavaScript como a mesma coisa que todos os outros browsers entendem. O ECMAScript é, portanto, o guia oficial seguido por cada empresa/equipe/pessoa que desenvolve um browser que interprete JavaScript.

É dessa forma que os browsers possuem interpretadores de JavaScript que entendem JavaScript como sendo a mesma coisa. Na verdade, é quase isso. Alguns browsers implementam funcionalidades do JavaScript que ainda não foram implementadas em outros browsers \(ou nem estão na especificação ECMAScript\).

Essas diferenças causam incompatibilidade entre browsers e é por isso que às vezes se deve escrever partes do código específicas para alguns browsers \(Internet Explorer é um caso clássico\). Isso se torna especialmente importante quando nosso código precisa suportar browsers antigos \(Internet Explorer 6, por exemplo\) que não entendem versões mais recentes de JavaScript, o que faz com que seja necessário implementar _polyfills_ \(reimplementação "manual" de funcionalidades mais recentes que não estão presentes em versões mais antigas de uma linguagem\). 

A biblioteca Modernizr, por exemplo, é útil para saber quando podemos ou não utilizar uma funcionalidade do JavaScript em um browser. Podemos utilizar geolocalização na versão mais recente do Chrome, porém, não podemos fazer o mesmo no Internet Explorer 8. Modernizr nos permite identificar essas situações e implementar alguma alternativa para as funcionalidades que não podemos utilizar, o que é popularmente conhecido como _Graceful Degradation_.

**ES5 e ES6**

A versão com melhor compatibilidade atualmente é a versão 5 do ECMAScript \(tendo em vista a retrocompatibilidade\). No entanto, a maioria dos browsers nas suas versões mais recentes já suportam as funcionalidades do ES6 \(ou, oficialmente, ES2015\). A parte triste disso é que o ES6 trouxe muitas melhorias ao JavaScript, possibilitando inúmeras maneiras de escrever um código melhor, mais e simples e mais legível.

**Transpiling de código**

_Existe alguma forma de usar ES6 no browser mantendo a compatibilidade? E se tivesse uma ferramenta que fizesse polyfills automaticamente?_

Bem, é possível usar código ES6 em browsers e ainda assim manter a compatibilidade com browsers mais velhos. Através de ferramentas como o Babel, por exemplo, que leem o código escrito em ES6 e o _transpilam_ para um ES5 feio de ler mas compatível com a maioria dos browsers. Apesar de Babel e transpiling serem amplamente adotados hoje em dia, eles ainda não são relevantes para entendermos como funciona o JavaScript no Browser.

