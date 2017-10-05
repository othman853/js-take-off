# JavaScript no Browser

JavaScript foi por muito tempo uma linguagem cujo uso era restrito exclusivamente aos browsers, onde seu principal e único papel era trazer um pouco de vida à paginas estáticas feitas em **HTML** e **CSS**. Juntos, HTML, CSS e JavaScript, são, até hoje, as três linguagens fundamentais para criar páginas web e aplicações front-end, onde cada um dos três possui um papel específico:

### HTML

**H**yper**T**ext **M**arkup **L**anguage \(linguagem de marcação de hipertexto\). É utilizada para definir a estrutura de uma página, em outras palavras, quais elementos esta página terá. Por exemplo: links, cabeçalho, rodapé, uma lista de elementos ou um parágrafo\).

No começo da internet, fazia muito sentido que os sites fossem criados somente utilizando HTML e nada mais, afinal, HTML serve para definir a estrutura de um documento de **hipertexto**, onde hipertexto pode ser entendido como um documento que permite a criação de links, seja para outras partes do próprio documento ou para outros documentos de hipertexto.

Antigamente, as páginas feitas somente em HTML, eram apenas um monte de links, listas e textos em preto e branco, que permitiam pouquíssimas possibilidades de estilização, não era possível colorir ou formatar o conteúdo. Para isso, passou-se a utilizar o _CSS._

### CSS

**C**ascading **S**tyle **S**heet \(folha de estilo em cascata. O CSS entrou em cena para tornar os documentos HTML mais bonitos. Quando aplicado à um documento HTML, o CSS consegue alterar o visual dos elementos deste documento, permitindo que se adicione cores, formatos, fontes e muitas outras opções. Hoje em dia, o CSS permite efetuar operações complexas, como a aplicação de estilos específicos para diferentes dispositivos e dimensões de tela \(parte das operações que permitem a criação de páginas _responsivas_\) ou até mesmo animações e resposta à eventos \(por exemplo, aplicar um estilo à um elemento quando o usuário passar o mouse por cima deste elemento\).

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

_Qual a diferença entre página estática e página dinâmica?_

### Os browsers {#the-browsers}

Sem os browsers, não existiria a internet da maneira como a conhecemos, tudo seria um monte de texto que acaba sendo quase ilegível para as pessoas, especialmente aquelas que não tem um conhecimento mais aprofundado de como os protocolos utilizados na comunicação entre servidores e clientes funcionam \(já me parece confuso ao tentar apontar este fato\). Além de ser uma ferramenta que sabe comunicar e entender HTTP \(o protocolo fundamental da internet\), os browsers também sabem como montar páginas web de acordo com aquilo que eles recebem, logo, estas duas características os tornam não somente as aplicações mais utilizadas, mas também as mais importantes para a história e funcionamento da internet sob a perspectiva de uma pessoa usuária.

### Como o browser lida com o JavaScript {#how-browsers-deal-with-js}

O browser é um software que possui muitos mecanismos complexos por trás das cenas, tudo para fazer com as páginas sejam renderizadas corretamente. No momento, estamos interessados em apenas um destes mecanismos em particular:  o **motor de interpretação e execução de JavaScript**.

Browsers possuem diferentes motores de interpretação JavaScript, que funcionam de formas diferentes. Por exemplo, o **Google Chrome** possui o **V8** e o **Firefox** possui o **SpiderMonkey**.

Isso levanta o questionamento:

_**Cada browser possui sua própria versão de JavaScript?**_

A resposta mais simples é: **não**. O que levanta outro questionamento:

_**Se cada motor funciona de uma forma diferente, mas o mesmo JavaScript funciona em todos os browsers, como isso acontece?**_

A resposta mais simples seria: **ECMAScript**. No entanto, _não é totalmente verdade que o mesmo JavaScript funciona em todos os browsers_.



