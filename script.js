/* ==========================================================================
   Teste de afinidade — esquerdas RJ 2026 · voto proporcional
   Unidades comparadas = as legendas COMO ELAS APARECEM NA URNA:
     PT·PCdoB·PV — Federação Brasil da Esperança. No proporcional, as três
                   siglas funcionam como partido único: o voto vai para o
                   caixa comum e pode eleger candidato de qualquer uma.
     PSB         — concorre sozinho no proporcional.
     PDT         — concorre sozinho no proporcional.
     PSOL·Rede   — Federação PSOL Rede, mesma lógica de caixa comum.

   As afirmações são MANDATÁRIAS, não doutrinárias: perguntam o que a pessoa
   quer que seu deputado FAÇA com o mandato — prioridade, custo político e
   ordem das urgências —, não o que ela acha ideal em abstrato.
   Evita-se citar marcas associadas a um partido (nomes de programas, autoria
   de ações, cidades-vitrine) no enunciado; essas referências aparecem só na
   justificativa, depois da resposta.

   Posições codificadas pelo autor a partir do guia comparativo e de posições
   públicas verificadas. Corte: 03/08/2026 (convenções encerradas em 05/08;
   registro das candidaturas até 15/08). Escala: −2 a +2.
   Tudo roda localmente no navegador.
   ========================================================================== */

"use strict";

const PARTIDOS = {
  PT:   { sigla: "PT\u00b7PCdoB\u00b7PV", nome: "Federa\u00e7\u00e3o Brasil da Esperan\u00e7a", cor: "pt"  },
  PSB:  { sigla: "PSB",                    nome: "Partido Socialista Brasileiro",              cor: "psb" },
  PDT:  { sigla: "PDT",                    nome: "Partido Democr\u00e1tico Trabalhista",       cor: "pdt" },
  PSOL: { sigla: "PSOL\u00b7Rede",         nome: "Federa\u00e7\u00e3o PSOL Rede",              cor: "psol" }
};

const ESCOPO_ROTULO = {
  federal: "Vale para: deputado federal",
  estadual: "Vale para: deputado estadual",
  ambos: "Vale para: as duas c\u00e2maras"
};

const QUESTOES = [

  /* ============ como o mandato se relaciona com o governo ============ */
  {
    eixo: "Governo \u00b7 Lealdade", escopo: "federal",
    texto: "Quero um deputado que sustente o governo federal sem cr\u00edticas p\u00fablicas, deixando as diverg\u00eancias para conversas internas.",
    ctx: "A alternativa \u00e9 o chamado apoio cr\u00edtico: votar com o governo contra a direita, mas cobr\u00e1-lo em p\u00fablico quando discorda.",
    pos: { PT: 2, PSB: 2, PDT: 1, PSOL: -1 },
    just: "PT\u00b7PCdoB\u00b7PV e PSB s\u00e3o o n\u00facleo do governo \u2014 a vice-presid\u00eancia \u00e9 do PSB \u2014 e t\u00eam pouca margem para o confronto p\u00fablico. O PDT reatou com Lula ap\u00f3s crises pr\u00f3prias. O PSOL\u00b7Rede vota com o governo na maioria das pautas e o cobra abertamente pela esquerda."
  },
  {
    eixo: "Or\u00e7amento \u00b7 Prioridade", escopo: "federal",
    texto: "Se for preciso escolher, prefiro que meu deputado vote por ampliar o gasto social mesmo que isso rompa os limites de gasto vigentes.",
    ctx: "As regras fiscais em vigor limitam quanto as despesas federais podem crescer por ano. Furar esse limite exige mudar a regra e costuma provocar rea\u00e7\u00e3o do mercado.",
    pos: { PT: -1, PSB: -1, PDT: 0, PSOL: 2 },
    just: "O n\u00facleo econ\u00f4mico do governo fez do respeito \u00e0 regra fiscal seu piso de credibilidade, e as bancadas de PT\u00b7PCdoB\u00b7PV e PSB o acompanham. O PDT resiste quando o corte atinge aposentadoria e sal\u00e1rio. O PSOL\u00b7Rede vota contra a regra e prop\u00f5e revog\u00e1-la."
  },
  {
    eixo: "Tributa\u00e7\u00e3o \u00b7 Prioridade", escopo: "federal",
    texto: "Diante de um rombo nas contas p\u00fablicas, quero que meu deputado gaste capital pol\u00edtico tentando taxar os mais ricos, em vez de aceitar cortes de despesa.",
    pos: { PT: 1, PSB: 0, PDT: 1, PSOL: 2 },
    just: "\u00c9 a primeira resposta do PSOL\u00b7Rede em qualquer aperto fiscal. PT\u00b7PCdoB\u00b7PV e PDT defendem a tese, mas priorizam o que \u00e9 negoci\u00e1vel na Casa. O PSB \u00e9 o mais atento \u00e0 rea\u00e7\u00e3o do mercado e o menos disposto a comprar essa briga."
  },
  {
    eixo: "M\u00e9todo \u00b7 Negocia\u00e7\u00e3o", escopo: "federal",
    texto: "Aceito que meu deputado negocie cargos e verbas com partidos fisiol\u00f3gicos, se for o pre\u00e7o de aprovar o que interessa.",
    ctx: "Partidos fisiol\u00f3gicos s\u00e3o os que apoiam qualquer governo em troca de cargos e fatias do or\u00e7amento; hoje eles controlam boa parte dos votos no Congresso.",
    pos: { PT: 1, PSB: 1, PDT: 1, PSOL: -2 },
    just: "PT\u00b7PCdoB\u00b7PV, PSB e PDT governam e negociam \u2014 \u00e9 o pre\u00e7o da governabilidade que aceitam pagar. A recusa a esse m\u00e9todo \u00e9 marca de identidade do PSOL\u00b7Rede, e explica boa parte de seu isolamento no Congresso."
  },
  {
    eixo: "M\u00e9todo \u00b7 Emendas", escopo: "ambos",
    texto: "Quero um deputado que traga verbas e obras para a minha regi\u00e3o, mesmo que para isso precise jogar o jogo das emendas parlamentares.",
    ctx: "Emendas s\u00e3o fatias do or\u00e7amento que cada parlamentar direciona; viraram a principal moeda de troca da pol\u00edtica brasileira.",
    pos: { PT: 1, PSB: 1, PDT: 1, PSOL: -2 },
    just: "As m\u00e1quinas territoriais do campo \u2014 sobretudo na Baixada e no interior \u2014 operam nessa l\u00f3gica sem constrangimento. O PSOL\u00b7Rede usa emendas, mas fez da den\u00fancia do or\u00e7amento como moeda de troca uma bandeira permanente."
  },

  /* ============ trabalho, estatais, ambiente ============ */
  {
    eixo: "Trabalho \u00b7 Jornada", escopo: "federal",
    texto: "Mesmo com a redu\u00e7\u00e3o da jornada j\u00e1 aprovada na C\u00e2mara, quero que meu deputado continue pressionando por uma jornada ainda menor e por prazo mais curto de implanta\u00e7\u00e3o.",
    ctx: "Em 2026 a C\u00e2mara aprovou o fim da escala de seis dias de trabalho por um de folga, com jornada de 40 horas em cinco dias e mais de um ano de transi\u00e7\u00e3o.",
    pos: { PT: 0, PSB: -1, PDT: 1, PSOL: 2 },
    just: "A proposta original nasceu de um movimento de trabalhadores encampado por mandatos do PSOL\u00b7Rede, que consideram o texto final t\u00edmido \u2014 o vereador carioca que idealizou a campanha rompeu com o relat\u00f3rio e disputa vaga na C\u00e2mara. O trabalhismo do PDT quer avan\u00e7ar; PT\u00b7PCdoB\u00b7PV e PSB tratam o resultado como vit\u00f3ria a consolidar."
  },
  {
    eixo: "Estatais", escopo: "federal",
    texto: "Quero um deputado que use o mandato para barrar qualquer privatiza\u00e7\u00e3o de empresa p\u00fablica, mesmo que a venda renda dinheiro imediato ao Estado.",
    pos: { PT: 1, PSB: 0, PDT: 2, PSOL: 2 },
    just: "O nacionalismo do PDT \u2014 que levou \u00e0 Justi\u00e7a a privatiza\u00e7\u00e3o do setor el\u00e9trico \u2014 e o estatismo do PSOL\u00b7Rede ocupam o ponto mais alto. PT\u00b7PCdoB\u00b7PV \u00e9 contra privatizar, mas admite arranjos caso a caso. O PSB \u00e9 o mais flex\u00edvel do campo."
  },
  {
    eixo: "Ambiente \u00b7 Petr\u00f3leo", escopo: "federal",
    texto: "Quero um deputado que se oponha publicamente \u00e0 abertura de novas fronteiras de petr\u00f3leo na Amaz\u00f4nia, mesmo que isso signifique enfrentar o pr\u00f3prio governo que ele apoia.",
    ctx: "Em 2025 o governo federal autorizou a pesquisa de petr\u00f3leo perto da foz do rio Amazonas, contrariando \u00f3rg\u00e3os ambientais e parte da pr\u00f3pria base.",
    pos: { PT: 0, PSB: 1, PDT: -1, PSOL: 2 },
    just: "O PSOL\u00b7Rede foi a principal voz contra, \u00e0 esquerda do governo \u2014 a Rede nasceu do ambientalismo. O PSB manteve o discurso clim\u00e1tico. A federa\u00e7\u00e3o do PT est\u00e1 rachada, com o PV puxando para o lado ambiental e a ala desenvolvimentista para o outro. O PDT \u00e9 desenvolvimentista sem constrangimento."
  },

  /* ============ costumes, identidade, religi\u00e3o ============ */
  {
    eixo: "Costumes \u00b7 Custo pol\u00edtico", escopo: "federal",
    texto: "Quero um deputado que defenda publicamente a legaliza\u00e7\u00e3o do aborto, mesmo sabendo que isso custa votos e trava outras negocia\u00e7\u00f5es.",
    ctx: "Hoje o aborto s\u00f3 \u00e9 legal em tr\u00eas situa\u00e7\u00f5es: estupro, risco de vida da gestante e anencefalia do feto.",
    pos: { PT: 0, PSB: -1, PDT: -1, PSOL: 2 },
    just: "O PSOL\u00b7Rede assume a pauta em p\u00fablico, sem c\u00e1lculo eleitoral. Na federa\u00e7\u00e3o do PT h\u00e1 parlamentares que a defendem h\u00e1 d\u00e9cadas, mas a orienta\u00e7\u00e3o pr\u00e1tica \u00e9 n\u00e3o levantar o tema em ano eleitoral. PSB e PDT abrigam alas crist\u00e3s e preferem sil\u00eancio."
  },
  {
    eixo: "Drogas \u00b7 Prioridade", escopo: "federal",
    texto: "Quero um deputado que trate a mudan\u00e7a da pol\u00edtica de drogas \u2014 regulamentar em vez de proibir \u2014 como parte central da agenda de seguran\u00e7a.",
    ctx: "Regulamentar significa o Estado controlar produ\u00e7\u00e3o e venda, como faz com \u00e1lcool e tabaco, retirando o mercado do controle armado.",
    pos: { PT: 0, PSB: 0, PDT: -1, PSOL: 2 },
    just: "Entre os quatro, s\u00f3 o PSOL\u00b7Rede trata isso como pol\u00edtica de seguran\u00e7a, e n\u00e3o como pauta de costumes a evitar. PT\u00b7PCdoB\u00b7PV e PSB t\u00eam defensores individuais sem posi\u00e7\u00e3o de bancada. No PDT, a base ligada \u00e0s pol\u00edcias empurra no sentido oposto."
  },
  {
    eixo: "Religi\u00e3o \u00b7 Estrat\u00e9gia", escopo: "ambos",
    texto: "Quero que meu deputado invista tempo em aproximar a esquerda das igrejas evang\u00e9licas, ainda que para isso evite as pautas de costumes.",
    pos: { PT: 1, PSB: 1, PDT: 1, PSOL: -2 },
    just: "\u00c9 a aposta declarada da maior parte do campo para disputar um eleitorado decisivo, e PSB e PDT t\u00eam quadros crist\u00e3os \u00e0 vontade nesse di\u00e1logo. O PSOL\u00b7Rede tamb\u00e9m dialoga com as periferias evang\u00e9licas \u2014 tem pastor entre seus candidatos \u2014, mas recusa a troca por sil\u00eancio em direitos."
  },
  {
    eixo: "Agenda \u00b7 Classe e identidade", escopo: "ambos",
    texto: "Prefiro que meu deputado dedique o mandato a emprego, sal\u00e1rio e custo de vida, deixando as pautas de ra\u00e7a, g\u00eanero e diversidade em segundo plano.",
    pos: { PT: -1, PSB: 0, PDT: 1, PSOL: -2 },
    just: "A cultura trabalhista do PDT tende a p\u00f4r a agenda de classe na frente. No PSOL\u00b7Rede as duas s\u00e3o indissoci\u00e1veis, e a bancada carioca \u00e9 majoritariamente formada por mandatos identit\u00e1rios. A federa\u00e7\u00e3o do PT incorporou o identit\u00e1rio ao programa cl\u00e1ssico; o PSB fica no meio."
  },
  {
    eixo: "Identidade \u00b7 LGBTQIA+", escopo: "ambos",
    texto: "Quero um deputado que fa\u00e7a da defesa dos direitos LGBTQIA+ \u2014 inclusive de pessoas trans \u2014 uma das bandeiras vis\u00edveis do mandato, e n\u00e3o s\u00f3 um voto discreto no plen\u00e1rio.",
    pos: { PT: 1, PSB: 0, PDT: 0, PSOL: 2 },
    just: "O PSOL\u00b7Rede tem o maior n\u00famero de mandatos LGBTQIA+ do estado e faz disso plataforma p\u00fablica. Na federa\u00e7\u00e3o do PT h\u00e1 protagonismo relevante \u2014 a primeira deputada trans da Alerj foi eleita pelo PCdoB. PSB e PDT acompanham as vota\u00e7\u00f5es sem transformar o tema em marca."
  },
  {
    eixo: "Identidade \u00b7 Cotas", escopo: "ambos",
    texto: "Quero um deputado que trabalhe ativamente para ampliar cotas raciais em universidades e concursos, e n\u00e3o apenas para preserv\u00e1-las como est\u00e3o.",
    ctx: "A lei de cotas nas universidades federais foi revista em 2023 e segue em vigor; a discuss\u00e3o agora \u00e9 sobre estend\u00ea-la a mais \u00e1reas do servi\u00e7o p\u00fablico.",
    pos: { PT: 2, PSB: 1, PDT: 0, PSOL: 2 },
    just: "Cotas s\u00e3o pol\u00edtica de Estado constru\u00edda pelos governos do PT, e a federa\u00e7\u00e3o mant\u00e9m nomes hist\u00f3ricos do movimento negro em posi\u00e7\u00e3o de destaque \u2014 a candidata ao Senado \u00e9 um deles. O PSOL\u00b7Rede est\u00e1 no mesmo patamar de \u00eanfase. O PSB apoia; o PDT apoia sem protagonismo."
  },
  {
    eixo: "Educa\u00e7\u00e3o \u00b7 Ensino m\u00e9dio", escopo: "federal",
    texto: "Quero um deputado que trabalhe para revogar por completo a reforma do ensino m\u00e9dio, e n\u00e3o apenas para corrigir seus defeitos.",
    ctx: "A reforma de 2017 reduziu as disciplinas obrigat\u00f3rias e criou percursos de escolha; em 2024 o Congresso aprovou ajustes, mantendo a estrutura.",
    pos: { PT: 0, PSB: -1, PDT: 0, PSOL: 2 },
    just: "O PSOL\u00b7Rede e as entidades estudantis pediram revoga\u00e7\u00e3o total. O governo do PT preferiu corrigir sem derrubar. No PSB, a parlamentar mais identificada com a \u00e1rea foi defensora p\u00fablica da reforma ajustada. O PDT n\u00e3o tem linha \u00fanica no tema."
  },

  /* ============ estilo de mandato ============ */
  {
    eixo: "Estilo \u00b7 Gest\u00e3o", escopo: "ambos",
    texto: "Prefiro que meu voto eleja quem se dedica a fazer a m\u00e1quina p\u00fablica funcionar a quem se dedica a levantar bandeiras de transforma\u00e7\u00e3o.",
    pos: { PT: 1, PSB: 1, PDT: 2, PSOL: -2 },
    just: "\u00c9 a tese central do PDT fluminense, que exibe uma prefeitura bem avaliada na regi\u00e3o metropolitana como prova de conceito. PT\u00b7PCdoB\u00b7PV e PSB equilibram gest\u00e3o e bandeira. O PSOL\u00b7Rede inverte a ordem: sem disputar o rumo da sociedade, administrar bem seria s\u00f3 gerir o problema."
  },
  {
    eixo: "Estilo \u00b7 Rua e bastidor", escopo: "ambos",
    texto: "Prefiro um deputado que esteja nas ruas com os movimentos e fa\u00e7a barulho p\u00fablico a um que seja discreto e eficaz nos bastidores.",
    pos: { PT: 0, PSB: -1, PDT: 0, PSOL: 2 },
    just: "O mandato-ativista \u00e9 a assinatura do PSOL\u00b7Rede carioca, herdeiro direto da trajet\u00f3ria de Marielle Franco. O PSB cultiva o perfil t\u00e9cnico-institucional. A federa\u00e7\u00e3o do PT e o PDT combinam os dois registros conforme o parlamentar."
  },
  {
    eixo: "Estilo \u00b7 Movimentos", escopo: "ambos",
    texto: "Quero um deputado que apoie abertamente ocupa\u00e7\u00f5es de pr\u00e9dios e terrenos vazios por movimentos de moradia, mesmo quando a Justi\u00e7a manda desocupar.",
    ctx: "O Rio combina milhares de im\u00f3veis ociosos em \u00e1reas centrais com um dos maiores d\u00e9ficits de moradia do pa\u00eds.",
    pos: { PT: 0, PSB: -1, PDT: -1, PSOL: 2 },
    just: "O PSOL\u00b7Rede nasceu junto desses movimentos e comparece \u00e0s ocupa\u00e7\u00f5es. A federa\u00e7\u00e3o do PT \u00e9 aliada hist\u00f3rica, mas modera quando est\u00e1 no governo \u2014 ainda assim leva nomes ligados a movimentos de terra na chapa estadual. PSB e PDT mant\u00eam dist\u00e2ncia institucional."
  },
  {
    eixo: "Renova\u00e7\u00e3o \u00b7 Sobrenomes", escopo: "ambos",
    texto: "Fa\u00e7o quest\u00e3o de que meu voto v\u00e1 para quem construiu trajet\u00f3ria pr\u00f3pria, e n\u00e3o para herdeiros de fam\u00edlias pol\u00edticas ou apadrinhados de caciques.",
    pos: { PT: -1, PSB: -2, PDT: 0, PSOL: 1 },
    just: "A dire\u00e7\u00e3o nacional do PSB \u00e9 exercida por herdeiro de uma das maiores dinastias pol\u00edticas do pa\u00eds. Na federa\u00e7\u00e3o do PT, a distribui\u00e7\u00e3o de n\u00fameros de urna a um filho de cacique gerou nota p\u00fablica de repulsa de outros pr\u00e9-candidatos na v\u00e9spera da conven\u00e7\u00e3o. O PSOL\u00b7Rede tem a maior propor\u00e7\u00e3o de trajet\u00f3rias vindas de movimentos e do trabalho precarizado."
  },

  /* ============ Rio de Janeiro ============ */
  {
    eixo: "Rio \u00b7 Frente ampla", escopo: "estadual",
    texto: "Para derrotar a extrema direita no Rio, aceito que meu partido apoie um candidato a governador de centro, mesmo abrindo m\u00e3o de defender o pr\u00f3prio programa.",
    ctx: "Na disputa estadual de 2026, parte da esquerda se aliou a uma candidatura de centro favorita nas pesquisas, e parte lan\u00e7ou candidatura pr\u00f3pria.",
    pos: { PT: 2, PSB: 2, PDT: 2, PSOL: -2 },
    just: "PT\u00b7PCdoB\u00b7PV, PDT e PSB homologaram em conven\u00e7\u00e3o o apoio a Eduardo Paes (PSD), numa coliga\u00e7\u00e3o que vai do MDB \u00e0 esquerda. O PSOL\u00b7Rede seguiu com chapa pr\u00f3pria \u2014 William Siri ao governo e M\u00f4nica Ben\u00edcio ao Senado \u2014 e \u00e9 hoje a \u00fanica oposi\u00e7\u00e3o de esquerda ao favorito."
  },
  {
    eixo: "Alerj \u00b7 Base ou oposi\u00e7\u00e3o", escopo: "estadual",
    texto: "Prefiro eleger um deputado estadual que integre a base do governador, para ter for\u00e7a de negocia\u00e7\u00e3o e recursos, a um que fique na oposi\u00e7\u00e3o.",
    pos: { PT: 1, PSB: 1, PDT: 2, PSOL: -2 },
    just: "Com o favorito \u00e0 frente, os tr\u00eas partidos aliados disputam vagas j\u00e1 como base do pr\u00f3ximo governo, e o PDT \u00e9 o mais vocacionado a esse papel. O PSOL\u00b7Rede se apresenta como a oposi\u00e7\u00e3o de esquerda na Alerj, com custo assumido em recursos e cargos."
  },
  {
    eixo: "Seguran\u00e7a \u00b7 Opera\u00e7\u00f5es", escopo: "estadual",
    texto: "Quero um deputado que trabalhe para restringir as grandes opera\u00e7\u00f5es policiais em favelas, mesmo que seja acusado de atrapalhar o combate ao crime.",
    ctx: "Uma decis\u00e3o do Supremo imp\u00f5e condi\u00e7\u00f5es a essas opera\u00e7\u00f5es no Rio \u2014 c\u00e2meras, per\u00edcia, restri\u00e7\u00e3o a helic\u00f3pteros \u2014 e \u00e9 objeto de disputa permanente na Alerj.",
    pos: { PT: 1, PSB: 2, PDT: 0, PSOL: 2 },
    just: "A a\u00e7\u00e3o que originou essas regras foi proposta pelo PSB, e o PSOL\u00b7Rede fez do controle da letalidade policial sua raz\u00e3o de exist\u00eancia no estado. A federa\u00e7\u00e3o do PT acompanha por via institucional. O PDT aceita opera\u00e7\u00f5es desde que guiadas por intelig\u00eancia, e evita a bandeira restritiva."
  },
  {
    eixo: "Seguran\u00e7a \u00b7 Pol\u00edcias", escopo: "estadual",
    texto: "Quero um deputado que trate sal\u00e1rio, equipamento e apoio aos policiais como prioridade t\u00e3o urgente quanto a puni\u00e7\u00e3o de abusos.",
    pos: { PT: 1, PSB: 0, PDT: 2, PSOL: -1 },
    just: "\u00c9 a linha do PDT fluminense, que tem entre seus quadros de refer\u00eancia uma ex-chefe da Pol\u00edcia Civil e defende valorizar a carreira e investir em per\u00edcia. O PSOL\u00b7Rede n\u00e3o nega sal\u00e1rios, mas p\u00f5e controle externo e desmilitariza\u00e7\u00e3o antes disso na fila."
  },
  {
    eixo: "Seguran\u00e7a \u00b7 Estrutura", escopo: "estadual",
    texto: "Quero um deputado que trabalhe para acabar com a estrutura militar da PM, transformando-a em carreira policial civil.",
    ctx: "Desmilitarizar n\u00e3o \u00e9 extinguir a pol\u00edcia: \u00e9 mudar a estrutura hoje espelhada no Ex\u00e9rcito, com hierarquia, regulamento e justi\u00e7a pr\u00f3prios.",
    pos: { PT: 1, PSB: 1, PDT: -1, PSOL: 2 },
    just: "Bandeira hist\u00f3rica do PSOL\u00b7Rede. Tem defensores antigos na federa\u00e7\u00e3o do PT \u2014 um dos cabe\u00e7as de chapa \u00e0 C\u00e2mara j\u00e1 apresentou proposta nesse sentido \u2014 sem ser consenso, e o PSB acompanha. No PDT, com sua base policial, a prioridade \u00e9 reformar por dentro."
  },
  {
    eixo: "Educa\u00e7\u00e3o \u00b7 Estado", escopo: "estadual",
    texto: "Quero um deputado que fa\u00e7a da escola estadual de turno integral \u2014 com refei\u00e7\u00f5es, esporte e cultura no mesmo pr\u00e9dio \u2014 a principal prioridade de or\u00e7amento do pr\u00f3ximo governo.",
    pos: { PT: 1, PSB: 0, PDT: 2, PSOL: 1 },
    just: "\u00c9 o patrim\u00f4nio simb\u00f3lico e o projeto de origem do PDT no estado, ainda hoje sua principal proposta educacional. PT\u00b7PCdoB\u00b7PV e PSOL\u00b7Rede apoiam o turno integral por outras vias; o PSB concentra sua \u00eanfase educacional no plano federal."
  },
  {
    eixo: "Servi\u00e7os \u00b7 \u00c1gua e esgoto", escopo: "estadual",
    texto: "Quero um deputado que trabalhe para reverter a entrega da \u00e1gua e do esgoto \u00e0 iniciativa privada, mesmo que a revers\u00e3o custe indeniza\u00e7\u00f5es ao estado.",
    ctx: "Em 2021 o estado leiloou a distribui\u00e7\u00e3o de \u00e1gua e esgoto a empresas privadas, por blocos de munic\u00edpios, com contratos de d\u00e9cadas.",
    pos: { PT: 1, PSB: -1, PDT: 1, PSOL: 2 },
    just: "O PSOL\u00b7Rede foi a oposi\u00e7\u00e3o mais vocal ao leil\u00e3o e defende reverter o modelo. PT e PDT criticaram a concess\u00e3o, mas tratam a revers\u00e3o com pragmatismo contratual. O PSB, o mais aberto a parcerias com o setor privado, n\u00e3o encampa a revers\u00e3o."
  },
  {
    eixo: "Servi\u00e7os \u00b7 Parcerias", escopo: "ambos",
    texto: "Aceito que servi\u00e7os p\u00fablicos sejam tocados por empresas privadas contratadas pelo poder p\u00fablico, desde que funcionem melhor.",
    ctx: "\u00c9 o modelo das parcerias p\u00fablico-privadas: a empresa constr\u00f3i ou opera, e o governo paga ou concede a explora\u00e7\u00e3o por contrato longo.",
    pos: { PT: 0, PSB: 2, PDT: 1, PSOL: -2 },
    just: "O PSB \u00e9 o mais amig\u00e1vel ao setor privado do campo, com uma agenda nacional de parceria com a ind\u00fastria. O PDT usa o instrumento onde governa. A federa\u00e7\u00e3o do PT decide caso a caso. O PSOL\u00b7Rede v\u00ea privatiza\u00e7\u00e3o disfar\u00e7ada e prefere o servi\u00e7o inteiramente p\u00fablico."
  },
  {
    eixo: "Ambiente \u00b7 Alerj", escopo: "estadual",
    texto: "Quero um deputado que barre empreendimentos com impacto ambiental no estado, mesmo quando eles prometem empregos e arrecada\u00e7\u00e3o.",
    pos: { PT: 1, PSB: 2, PDT: 0, PSOL: 2 },
    just: "O PSB leva \u00e0 Alerj o parlamentar mais identificado com a fiscaliza\u00e7\u00e3o ambiental no estado, e o PSOL\u00b7Rede tem na federa\u00e7\u00e3o um partido nascido do ambientalismo. Na federa\u00e7\u00e3o do PT convivem o PV e a ala desenvolvimentista. O PDT tende a priorizar emprego e investimento."
  }
];

/* ------------------------------ estado ---------------------------------- */

const estado = {
  atual: 0,
  respostas: QUESTOES.map(() => null) // null | {tipo:"valor", valor, peso} | {tipo:"branco"}
};

/* ------------------------------ elementos ------------------------------- */

const $ = (id) => document.getElementById(id);

const vistas = {
  inicio: $("view-inicio"),
  quiz: $("view-quiz"),
  resultado: $("view-resultado")
};

const ui = {
  contador: $("urna-contador"),
  eixo: $("urna-eixo"),
  escopo: $("urna-escopo"),
  afirmacao: $("urna-afirmacao"),
  contexto: $("urna-contexto"),
  opcoes: Array.from(document.querySelectorAll(".opcao")),
  peso: $("urna-peso"),
  confirma: $("btn-confirma"),
  corrige: $("btn-corrige"),
  branco: $("btn-branco"),
  barra: $("progresso-barra")
};

let selecaoAtual = null;

/* ------------------------------ navegação ------------------------------- */

function mostrarVista(nome) {
  Object.entries(vistas).forEach(([chave, el]) => {
    el.hidden = chave !== nome;
  });
  window.scrollTo({ top: 0 });
}

function renderQuestao() {
  const i = estado.atual;
  const q = QUESTOES[i];
  const total = QUESTOES.length;

  ui.contador.textContent =
    "Pergunta " + String(i + 1).padStart(2, "0") + "/" + total;
  ui.eixo.textContent = q.eixo;
  ui.escopo.textContent = ESCOPO_ROTULO[q.escopo];
  ui.afirmacao.textContent = q.texto;
  ui.contexto.textContent = q.ctx || "";
  ui.contexto.hidden = !q.ctx;

  const salva = estado.respostas[i];
  selecaoAtual = salva && salva.tipo === "valor" ? salva.valor : null;
  ui.peso.checked = !!(salva && salva.tipo === "valor" && salva.peso === 2);

  ui.opcoes.forEach((btn) => {
    const v = Number(btn.dataset.valor);
    btn.classList.toggle("selecionada", selecaoAtual === v);
  });

  ui.confirma.disabled = selecaoAtual === null;
  ui.corrige.disabled = i === 0;
  ui.barra.style.width = ((i / total) * 100).toFixed(1) + "%";
}

function avancar() {
  if (estado.atual < QUESTOES.length - 1) {
    estado.atual += 1;
    renderQuestao();
  } else {
    renderResultados();
    mostrarVista("resultado");
  }
}

/* ------------------------------ interações ------------------------------ */

ui.opcoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    selecaoAtual = Number(btn.dataset.valor);
    ui.opcoes.forEach((b) => b.classList.toggle("selecionada", b === btn));
    ui.confirma.disabled = false;
  });
});

ui.confirma.addEventListener("click", () => {
  if (selecaoAtual === null) return;
  estado.respostas[estado.atual] = {
    tipo: "valor",
    valor: selecaoAtual,
    peso: ui.peso.checked ? 2 : 1
  };
  avancar();
});

ui.branco.addEventListener("click", () => {
  estado.respostas[estado.atual] = { tipo: "branco" };
  avancar();
});

ui.corrige.addEventListener("click", () => {
  if (estado.atual > 0) {
    estado.atual -= 1;
    renderQuestao();
  }
});

$("btn-comecar").addEventListener("click", () => {
  mostrarVista("quiz");
  renderQuestao();
});

$("btn-refazer").addEventListener("click", () => {
  estado.atual = 0;
  estado.respostas = QUESTOES.map(() => null);
  mostrarVista("quiz");
  renderQuestao();
});

document.addEventListener("keydown", (ev) => {
  if (vistas.quiz.hidden) return;
  const mapa = { "1": 2, "2": 1, "3": 0, "4": -1, "5": -2 };
  if (mapa[ev.key] !== undefined) {
    const alvo = ui.opcoes.find((b) => Number(b.dataset.valor) === mapa[ev.key]);
    if (alvo) alvo.click();
  } else if (ev.key === "Enter" && !ui.confirma.disabled) {
    ev.preventDefault();
    ui.confirma.click();
  } else if (ev.key === "Backspace") {
    ev.preventDefault();
    ui.corrige.click();
  } else if (ev.key.toLowerCase() === "b") {
    ui.branco.click();
  }
});

/* ------------------------------ cálculo --------------------------------- */

function calcularAfinidade(escopos) {
  const somas = { PT: 0, PSB: 0, PDT: 0, PSOL: 0 };
  let pesoTotal = 0;
  let respondidas = 0;

  QUESTOES.forEach((q, i) => {
    if (!escopos.includes(q.escopo)) return;
    const r = estado.respostas[i];
    if (!r || r.tipo !== "valor") return;
    respondidas += 1;
    pesoTotal += r.peso;
    Object.keys(PARTIDOS).forEach((chave) => {
      const prox = (4 - Math.abs(r.valor - q.pos[chave])) / 4;
      somas[chave] += prox * r.peso;
    });
  });

  if (pesoTotal === 0) return { respondidas: 0, ranking: [] };

  const ranking = Object.keys(PARTIDOS)
    .map((chave) => ({ chave, sigla: PARTIDOS[chave].sigla, pct: (somas[chave] / pesoTotal) * 100 }))
    .sort((a, b) => b.pct - a.pct);

  return { respondidas, ranking };
}

/* ------------------------------ resultados ------------------------------ */

function renderRanking(elLista, elN, resultado) {
  elLista.innerHTML = "";
  if (resultado.respondidas === 0) {
    elN.textContent = "";
    const li = document.createElement("li");
    li.textContent =
      "Sem respostas suficientes neste escopo — refaça o teste respondendo ao menos uma afirmação correspondente.";
    li.style.fontSize = "0.9rem";
    elLista.appendChild(li);
    return;
  }
  elN.textContent = "base: " + resultado.respondidas + " respostas";

  resultado.ranking.forEach((item, idx) => {
    const cor = PARTIDOS[item.chave].cor;
    const li = document.createElement("li");
    li.className = "ranking__item";
    li.innerHTML =
      '<div class="ranking__linha">' +
      '  <span class="ranking__nome">' +
      '    <span class="ranking__pos mono">' + (idx + 1) + "º</span>" +
      '    <span class="ranking__sigla">' + item.sigla + "</span>" +
      "  </span>" +
      '  <span class="ranking__pct mono">' + item.pct.toFixed(1) + "%</span>" +
      "</div>" +
      '<div class="ranking__trilho"><div class="ranking__barra barra--' + cor + '"></div></div>';
    elLista.appendChild(li);
    const barra = li.querySelector(".ranking__barra");
    requestAnimationFrame(() => {
      barra.style.width = item.pct.toFixed(1) + "%";
    });
  });
}

function fraseValor(v) {
  return { "2": "concordou totalmente", "1": "concordou em parte", "0": "ficou neutro(a)", "-1": "discordou em parte", "-2": "discordou totalmente" }[String(v)];
}

function codigo(v) {
  return v > 0 ? "+" + v : String(v);
}

function renderDetalhes() {
  const alvo = $("detalhes-lista");
  alvo.innerHTML = "";
  QUESTOES.forEach((q, i) => {
    const r = estado.respostas[i];
    const div = document.createElement("div");
    div.className = "item-detalhe";

    const chips = Object.keys(PARTIDOS)
      .map((chave) =>
        '<span class="posicao posicao--' + PARTIDOS[chave].cor + '">' +
        PARTIDOS[chave].sigla + " " + codigo(q.pos[chave]) + "</span>")
      .join("");

    const resposta =
      r && r.tipo === "valor"
        ? "Você " + fraseValor(r.valor) + ' <span class="mono">(' + codigo(r.valor) + ")</span>" +
          (r.peso === 2 ? " · peso dobrado" : "")
        : "Você pulou esta afirmação — fora do cálculo.";

    div.innerHTML =
      '<p class="item-detalhe__meta">' + String(i + 1).padStart(2, "0") + " · " + q.eixo + " · " + ESCOPO_ROTULO[q.escopo].replace("Vale para: ", "") + "</p>" +
      '<p class="item-detalhe__texto">' + q.texto + "</p>" +
      '<p class="item-detalhe__resposta">' + resposta + "</p>" +
      '<div class="posicoes">' + chips + "</div>" +
      '<p class="item-detalhe__just">' + q.just + "</p>";

    alvo.appendChild(div);
  });
}

let ultimoResumo = "";

function renderResultados() {
  const fed = calcularAfinidade(["federal", "ambos"]);
  const est = calcularAfinidade(["estadual", "ambos"]);

  renderRanking($("ranking-federal"), $("n-federal"), fed);
  renderRanking($("ranking-estadual"), $("n-estadual"), est);

  const leitura = $("leitura-resultado");
  if (fed.respondidas > 0 && est.respondidas > 0) {
    const lf = fed.ranking[0];
    const le = est.ranking[0];
    const iguais = lf.chave === le.chave;
    const margemFed = (lf.pct - fed.ranking[1].pct).toFixed(1);
    leitura.textContent = iguais
      ? "Sua maior afinidade nas duas câmaras é com " + lf.sigla +
        " (margem de " + margemFed + " ponto(s) sobre o segundo colocado no ranking federal). " +
        "Lembre que o voto proporcional é indivisível dentro da federação: ele pode eleger candidato de qualquer sigla federada. " +
        "Entre campos do mesmo lado, margens estreitas são esperadas — nesses casos, compare também os candidatos."
      : "Seus rankings divergem entre as câmaras: " + lf.sigla + " lidera no federal e " +
        le.sigla + " no estadual — plausível, já que as escolhas fluminenses (frente ampla, doutrina de segurança, papel na Alerj) dividem a esquerda de outro jeito que as nacionais. " +
        "Lembre que o voto proporcional é indivisível dentro da federação, e margens estreitas pedem comparação de candidatos.";
  } else {
    leitura.textContent = "";
  }

  renderDetalhes();

  const linha = (r) =>
    r.ranking.map((x, i) => (i + 1) + "º " + x.sigla + " " + x.pct.toFixed(1) + "%").join(" · ");
  ultimoResumo =
    "Teste de afinidade — esquerdas RJ 2026 (PT·PCdoB·PV, PSB, PDT, PSOL·Rede)\n" +
    "Deputado federal:  " + (fed.respondidas ? linha(fed) : "sem respostas") + "\n" +
    "Deputado estadual: " + (est.respondidas ? linha(est) : "sem respostas") + "\n" +
    "Posições codificadas com corte em 03/08/2026. Ferramenta informativa; não é recomendação de voto.";
}

$("btn-copiar").addEventListener("click", async (ev) => {
  const btn = ev.currentTarget;
  const original = btn.firstChild.textContent;
  try {
    await navigator.clipboard.writeText(ultimoResumo);
    btn.firstChild.textContent = "Copiado!";
  } catch (e) {
    window.prompt("Copie o resumo:", ultimoResumo);
  }
  setTimeout(() => { btn.firstChild.textContent = original; }, 1600);
});
