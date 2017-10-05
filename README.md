# Decolando com JavaScript

JavaScript é uma linguagem muito versátil, o que a tornou uma das mais adotadas dos últimos anos, sendo aplicada nos mais diversos contextos, desde a criação de front-ends modernos baseados em componentes e estados reativos, passando por aplicações desktop e IoT, até sistemas web altamente complexos que demandam diferentes níveis de disponibilidade e escalabilidade.

A sintaxe simplificada, tipagem flexível e a possibilidade de adotar conceitos de diversos paradigmas ao mesmo tempo são o que tornam JavaScript uma linguagem tão divertida e peculiar. Entretanto, sua peculiaridade abre margem para uma grande barreira de adoção, especialmente para aquelas pessoas que estão dando seus primeiros passos, seja somente em JS ou na programação como um todo. Assim como pode ser muito divertido programar usando JS e bolar soluções eficientes e com design incrível, também é muito fácil cair num temporal de confusão e código difícil de manter e entender.

A ideia deste guia, como o nome sugere, não é ensinar tudo que se pode fazer usando JavaScript, mas sim, as suas partes mais importantes que embasam conceitos mais amplos de cada área de aplicação de Js. Em outras palavras, este guia tenta ensinar o mínimo necessário para entender o que é e como se programa em JavaScript aplicando conceitos específicos da linguagem \(o que torna o trabalho mais divertido e a vida mais produtiva\). Idealmente, após ler este guia, a pessoa leitora será capaz de entender e escrever código JavaScript, independentemente da plataforma ou contexto em que se está programando, e apesar de os aspectos específicos de cada uma dessas plataformas ou contextos não serem cobertos aqui, não será difícil aprender tais aspectos em um próximo passo.

### Preparar para decolagem

O JavaScript de hoje em dia se baseia extensivamente no **node.js**. Isso se deve ao fato de o node ser a invenção que ampliou as possibilidades de uso da linguagem para além dos browsers \(o único lugar onde ela era aplicada originalmente\), sendo possível usar JavaScript, assim como outras linguagens de script \(como Python, Ruby ou Perl\), em diversos contextos.  À partir daí, surgiram muitas formas de se utilizar JavaScript e muitas ferramentas para impulsionar as mais diversas estratégias de construção de aplicações. Junto disso, também foram surgindo novas especificações da linguagem, que introduziram à ela novas funcionalidades.

A forma mais simples de entrar no contexto imenso do JavaScript é começar entendendo seus aspectos práticos \(como escrever código de fato\) através do node. Depois de obtida a velocidade ideal, será muito mais fácil voar para outras áreas de aplicação do JavaScript \(daí a analogia de uma decolagem\).

### Que tipo de leitora aproveitaria melhor este guia?

Este guia é voltado especialmente àquelas pessoas que estão começando seus estudos sobre programação, seja na faculdade ou por conta própria, como as pessoas que escreveram suas primeiras linhas de HTML e agora não sabem para onde ir, por exemplo. Este guia também pode ser útil à pessoas que já têm experiência em outras linguagens e querem aprender JavaScript e saber por onde começar no vasto e confuso mundo dos _callbacks_ e _undefined_. Se você é uma pessoa com uma certa experiência em JavaScript, talvez este guia seja bastante redundante e não muito útil.

### Exemplos de aplicação de JavaScript pós node

Citando apenas algumas ferramentas, se pode entender melhor como JavaScript tornou-se poderoso após o node:

#### Webpack, Babel, Typescript, React e outras bibliotecas e ferramentas para JS browser-side

O código browser-side não é mais o mesmo que o de cinco ou dez anos atrás. Muitas ferramentas surgiram em volta do JavaScript, dando-lhe muitos super poderes que permitem as mais diversas formas de uso... 

#### **Ionic e React Native**

Dentre muitos outros, Ionic e React Native são ferramentas que possibilitam a criação de aplicações móveis para múltiplos sistemas operacionais baseadas quase totalmente em código JavaScript.

#### Electron

Electron possibilita a criação de aplicações Desktop baseadas em tecnologias web, tais como HTML, CSS e JavaScript. Algumas das aplicações que o utilizam são, por exemplo: Atom e Slack.

#### JhonnyFive e BENJA

A biblioteca Jhonny Five permite o uso de JavaScript para programação de dispositivos IoT, como o Arduino. BENJA é uma distribuição Linux para nano computadores \(como Raspberry Pi e Beagle Bone\) com foco em aplicações do tipo Kiosk.

#### Express

Express é a biblioteca mais popular para desenvolvimento de aplicações web com node.js. Com um design extremamente versátil e inteligente, Express permite o uso de diversos módulos para as mais diferentes necessidades de uma aplicação web, o que permite o desenvolvimento de aplicações web completas.

#### **MongoDB**

MongoDB é um dos mais populares bancos de dados não relacionais e, embora não seja feito em JavaScript, ele ainda assim se baseia em vários conceitos da linguagem para estruturar informações e fornecer mecanismos de pesquisa.

