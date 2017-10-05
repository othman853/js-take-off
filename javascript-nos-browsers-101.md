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

#### HTML

**H**yper**T**ext **M**arkup **L**anguage. É utilizada para definir a estrutura de uma página, em outras palavras, quais elementos esta página terá. Por exemplo: links, cabeçalho, rodapé, uma lista de elementos ou um parágrafo\).

No começo da internet, fazia muito sentido que os sites fossem criados somente utilizando HTML e nada mais, afinal, HTML serve para definir a estrutura de um documento de **hipertexto**, onde hipertexto pode ser entendido como um documento que permite a criação de links, seja para outras partes do próprio documento ou para outros documentos de hipertexto.

Antigamente, as páginas feitas somente em HTML, eram apenas um monte de links, listas e textos em preto e branco, que permitiam pouquíssimas possibilidades de estilização, não era possível colorir ou formatar o conteúdo. Para isso, passou-se a utilizar o _CSS._

#### CSS

**C**ascading **S**tyle **S**heet. O CSS entrou em cena para tornar os documentos HTML mais bonitos. Quando aplicado à um documento HTML, o CSS consegue alterar o visual dos elementos deste documento, permitindo que se adicione cores, formatos, fontes e muitas outras opções. Hoje em dia, o CSS permite efetuar operações complexas, como a aplicação de estilos específicos para diferentes dispositivos e dimensões de tela \(parte das operações que permitem a criação de páginas _responsivas_\) ou até mesmo animações e resposta à eventos \(por exemplo, aplicar um estilo à um elemento quando o usuário passar o mouse por cima deste elemento\).

#### JavaScript

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

#### Os browsers

Sem os browsers, não existiria a internet da maneira como a conhecemos, tudo seria um monte de texto que acaba sendo quase ilegível para as pessoas, especialmente aquelas que não tem um conhecimento mais aprofundado de como os protocolos utilizados na comunicação entre servidores e clientes funcionam \(já me parece confuso ao tentar apontar este fato\).

##### Como funciona a internet?

De uma maneira extremamente simplificada, podemos entender que a internet nada mais é do que uma rede de computadores conectados, conversando entre si.

Para que essas conversas ocorram, é necessário que os computadores tenham linguagens formais para que todo mundo possa se entender. Tais linguagens são conhecidas como _**protocolos**_.

Cada **protocolo** é utilizado para um tipo específico de conversa, por exemplo:

* **SMTP:** é um dos protocolos utilizados para a troca de emails
* **FTP:** é utilizado para trocar arquivos entre computadores
* **HTTP:** utilizado para a transferência de conteúdo hipertexto

**O HTTP é a fundação da internet**, pois ele permite que se envie informações de arquivos HTML, CSS e JavaScript de um computador para o outro, o que é fundamental para a vida das páginas web.

_Isso quer dizer que, quando alguém acessa um site, para poder vê-lo funcionando num browser é preciso antes receber os dados contendo as definições HTML, CSS e JavaScript deste site._

Evidentemente, não basta apenas receber tais dados, eles precisam ser interpretados para que façam sentido e se tornem uma página bonita e funcional.

Então, recapitulando, o que acontece por debaixo dos panos para que a magia da internet seja possível?

* Alguém acessa o site www.google.com.br



