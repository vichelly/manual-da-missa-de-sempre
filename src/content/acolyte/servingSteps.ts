// Liturgical content. Texts are in Portuguese and Latin; edit them here.
import type { ServingStep } from '../types';

/** Serving a Low Mass with one acolyte, step by step. */
export const SERVING_STEPS: ServingStep[] = [
  {
    title: 'Preparação',
    acolyte: 'epistle',
    missal: 'epistle',
    where: 'Na credência, lado da Epístola.',
    actions:
      'Acender as velas, começando pelo lado da Epístola. Conferir na credência as galhetas (vinho e água), a bacia, o manustérgio (toalhinha), o sino e a patena de comunhão.',
  },
  {
    title: 'Entrada',
    acolyte: 'gospel',
    missal: 'epistle',
    where: 'Ao pé do altar, à esquerda do sacerdote.',
    actions:
      'Ir à frente do sacerdote. Receber o barrete e colocá-lo no lugar de costume. Fazer genuflexão com o sacerdote e ajoelhar-se no chão, à esquerda dele.',
  },
  {
    title: 'Orações ao pé do altar',
    acolyte: 'gospel',
    missal: 'epistle',
    where: 'Ajoelhado no chão, lado do Evangelho.',
    actions:
      'Fazer o sinal da cruz com o sacerdote e responder o Salmo 42. No Confiteor, inclinar-se profundamente e bater no peito três vezes no mea culpa. Inclinar-se levemente nos versículos finais.',
    says: 'Ad Deum qui laetificat… · Misereatur tui… · Confiteor · Amen',
  },
  {
    title: 'Intróito e Kyrie',
    acolyte: 'gospel',
    missal: 'epistle',
    where: 'Ajoelhado no degrau inferior, lado do Evangelho.',
    actions:
      'Alternar o Kyrie com o sacerdote: ele diz a 1ª invocação, você a 2ª, e assim por diante até ele dizer a 9ª.',
    says: 'Kyrie, eleison · Christe, eleison · Kyrie, eleison',
  },
  {
    title: 'Coleta',
    acolyte: 'gospel',
    missal: 'epistle',
    where: 'Ajoelhado, lado do Evangelho.',
    actions:
      'Responder ao Dominus vobiscum e Amen no fim da Coleta. Quando há várias orações, responde-se Amen no fim da primeira e no fim da última.',
    says: 'Et cum spiritu tuo · Amen',
  },
  {
    title: 'Epístola e mudança do missal',
    acolyte: 'moving',
    missal: 'epistleToGospel',
    where: 'Do lado do Evangelho para o lado da Epístola.',
    actions:
      'No fim da Epístola, responder Deo gratias. Quando o sacerdote for ao centro (Munda cor meum), subir ao lado da Epístola, pegar o missal com a estante, descer, fazer genuflexão no centro e colocá-lo no lado do Evangelho, voltado em diagonal para o centro. Voltar, com genuflexão no centro, ao lado da Epístola.',
    says: 'Deo gratias',
  },
  {
    title: 'Evangelho',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'De pé, lado da Epístola, voltado para o sacerdote.',
    actions:
      'Ficar de pé durante o Evangelho. No Sequentia, fazer com o polegar os três pequenos sinais da cruz: fronte, lábios e peito. No fim, responder e voltar a ajoelhar-se.',
    says: 'Et cum spiritu tuo · Gloria tibi, Domine · Laus tibi, Christe',
  },
  {
    title: 'Credo e Ofertório',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'Ajoelhado, lado da Epístola.',
    actions:
      'Se houver Credo, inclinar-se no Et incarnatus est. No Ofertório, ir à credência e levar as galhetas. Entregar primeiro o vinho, depois a água. Onde for costume, beijar a galheta antes e depois de entregá-la.',
    says: 'Et cum spiritu tuo',
  },
  {
    title: 'Lavabo',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'De pé, no canto da Epístola.',
    actions:
      'Com a galheta da água e a bacia, derramar água devagar sobre os dedos do sacerdote e oferecer-lhe o manustérgio. Inclinar-se antes e depois.',
  },
  {
    title: 'Orate, fratres e Prefácio',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'Ajoelhado, lado da Epístola.',
    actions: 'Responder o Suscipiat inteiro e as respostas do Prefácio.',
    says: 'Suscipiat Dominus… · Amen · Et cum spiritu tuo · Habemus ad Dominum · Dignum et iustum est',
  },
  {
    title: 'Sanctus',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'Ajoelhado, lado da Epístola.',
    actions: 'Quando o sacerdote começar o Sanctus, tocar o sino três vezes.',
    bell: '3 toques',
  },
  {
    title: 'Hanc igitur',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'Sobe ao degrau mais alto, lado da Epístola.',
    actions:
      'Quando o sacerdote estender as mãos sobre o cálice, tocar o sino uma vez, como aviso. Subir com o sino e ajoelhar-se no degrau mais alto, à direita do sacerdote.',
    bell: '1 toque (costume)',
  },
  {
    title: 'Consagração',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'Ajoelhado no degrau mais alto, à direita do sacerdote.',
    actions:
      'Em cada elevação, levantar levemente a ponta da casula com a mão esquerda e tocar o sino com a direita: na genuflexão, na elevação e na segunda genuflexão. Depois da elevação do Cálice, voltar ao lugar no lado da Epístola.',
    bell: '3 + 3 toques',
  },
  {
    title: 'Pater noster e Pax',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'Ajoelhado, lado da Epístola.',
    actions: 'Responder no fim do Cânon, no fim do Pater noster e ao Pax Domini.',
    says: 'Amen · Sed libera nos a malo · Amen · Et cum spiritu tuo',
  },
  {
    title: 'Comunhão do sacerdote',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'Ajoelhado, lado da Epístola.',
    actions:
      'No Domine, non sum dignus do sacerdote, tocar o sino uma vez a cada vez que ele o diz. Inclinar-se profundamente enquanto ele comunga.',
    bell: '3 toques (costume)',
  },
  {
    title: 'Comunhão dos fiéis',
    acolyte: 'center',
    missal: 'gospel',
    where: 'Junto ao sacerdote, à direita dele.',
    actions:
      'Se há fiéis para comungar, depois que o sacerdote recebe o Preciosíssimo Sangue, rezar o Confiteor, inclinado, e responder Amen ao Misereatur e ao Indulgentiam. Depois, pegar a patena de comunhão e acompanhar o sacerdote, segurando-a sob o queixo de cada comungante.',
    says: 'Confiteor · Amen · Amen',
  },
  {
    title: 'Abluções',
    acolyte: 'epistle',
    missal: 'gospel',
    where: 'De pé, no canto da Epístola.',
    actions:
      'Levar as galhetas: primeiro só vinho no cálice; depois vinho e água sobre os dedos do sacerdote. Devolver as galhetas à credência.',
  },
  {
    title: 'Missal de volta à Epístola',
    acolyte: 'moving',
    missal: 'gospelToEpistle',
    where: 'Do lado da Epístola para o lado do Evangelho.',
    actions:
      'Ir ao lado do Evangelho, pegar o missal, fazer genuflexão no centro e levá-lo ao lado da Epístola. Depois, com genuflexão no centro, ajoelhar-se do lado do Evangelho.',
  },
  {
    title: 'Pós-comunhão, Ite e Bênção',
    acolyte: 'gospel',
    missal: 'epistle',
    where: 'Ajoelhado, lado do Evangelho.',
    actions: 'Responder às orações finais. Na bênção, fazer o sinal da cruz.',
    says: 'Et cum spiritu tuo · Amen · Deo gratias · Amen',
  },
  {
    title: 'Último Evangelho',
    acolyte: 'epistle',
    missal: 'epistle',
    where: 'De pé, lado da Epístola (o sacerdote lê a sacra no lado do Evangelho).',
    actions:
      'Levantar-se e passar ao lado da Epístola. Fazer genuflexão no Et Verbum caro factum est. No fim, responder Deo gratias. Quando o Último Evangelho é próprio (comemoração de domingo, féria maior ou vigília), o missal deve antes ser levado ao lado do Evangelho; confirme com o mestre de cerimônias em que momento fazê-lo.',
    says: 'Et cum spiritu tuo · Gloria tibi, Domine · Deo gratias',
  },
  {
    title: 'Saída',
    acolyte: 'center',
    missal: 'epistle',
    where: 'Ao pé do altar, no centro.',
    actions:
      'Ajoelhar-se ao pé do altar com o sacerdote e responder às orações depois da Missa rezada (três Ave-Marias, Salve Rainha, oração pela Igreja, São Miguel). Depois, entregar o barrete, fazer genuflexão com o sacerdote e ir à frente para a sacristia. Apagar as velas começando pelo lado do Evangelho.',
  },
];
