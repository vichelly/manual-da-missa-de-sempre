// Liturgical content. Texts are in Portuguese and Latin; edit them here.
import type { RoleStep, ServerRole } from '../types';

/**
 * Duties of the acolyte on the Epistle side when two acolytes serve,
 * following the custom of the chapel, in the order they happen.
 */
export const EPISTLE_SERVER_STEPS: RoleStep[] = [
  {
    title: 'Confiteor do sacerdote',
    actions: ['Inclinar-se voltado para o celebrante.'],
  },
  {
    title: 'Confiteor dos acólitos',
    actions: ['Inclinar-se voltado para o altar.', 'Bater no peito três vezes no mea culpa.'],
    says: 'Confiteor Deo omnipotenti…',
  },
  {
    title: 'Fim das orações ao pé do altar',
    cue: 'Dominus vobiscum · Et cum spiritu tuo · Oremus',
    actions: [
      'Levantar-se e ir ao centro.',
      'Fazer genuflexão.',
      'Ir para o seu lugar e ajoelhar-se.',
    ],
  },
  {
    title: 'Fim da Epístola',
    cue: 'O padre termina a leitura e apoia a mão esquerda sobre o altar.',
    says: 'Deo gratias',
    actions: [
      'Responder Deo gratias.',
      'Buscar o missal e levá-lo para o lado do Evangelho (à esquerda de quem olha o altar), fazendo genuflexão ao passar pelo centro.',
      'Deixar o livro inclinado, virado para o centro do altar.',
    ],
  },
  {
    title: 'Sermão (se houver)',
    cue: 'Depois do Evangelho.',
    actions: [
      'Levantar-se, pegar o barrete e entregá-lo ao padre.',
      'Terminado o sermão, buscar o barrete de volta.',
    ],
  },
  {
    title: 'Credo',
    actions: ['Continuar ajoelhado.'],
  },
  {
    title: 'Ofertório: vinho e água',
    cue: 'Depois do Et cum spiritu tuo do Ofertório.',
    actions: [
      'Ir ao centro, fazer genuflexão e ir à credência.',
      'Pegar a galheta do vinho com a mão direita, beijá-la e entregá-la ao padre.',
      'Receber a galheta de volta com a mão esquerda e guardá-la.',
      'Pegar a água e o pratinho do lavabo e derramar a água sobre os dedos do padre.',
      'Guardar a água e o prato e pegar o sino.',
    ],
    attention: 'Inclinar-se ao padre quando ele chega e quando se retira.',
  },
  {
    title: 'Sanctus',
    bell: '3 toques',
    actions: [
      'Tocar o sino três vezes no Sanctus, Sanctus, Sanctus.',
      'Em seguida, acender a vela da comunhão na sacristia e levá-la ao altar.',
    ],
  },
  {
    title: 'Hanc igitur',
    cue: 'Depois do “Per eundem Christum Dominum nostrum. Amen” da memória dos santos, o padre estende as mãos sobre as oblatas.',
    bell: '1 toque',
    actions: ['Tocar o sino.', 'Ir ao centro e fazer genuflexão.', 'Ajoelhar-se ao lado do padre.'],
  },
  {
    title: 'Consagração',
    bell: '3 toques na Hóstia e 3 no Cálice',
    actions: [
      'Tocar o sino quando o padre faz genuflexão, quando eleva a Hóstia e na genuflexão seguinte.',
      'Fazer o mesmo na consagração do Cálice.',
    ],
  },
  {
    title: 'Volta ao lugar depois da Consagração',
    cue: 'Depois de elevar o Cálice, o padre o pousa no corporal, cobre-o com a pala e faz genuflexão: é o seu último toque de sino. Quando ele se levanta e abre os braços para o Unde et memores, a Consagração terminou.',
    actions: ['Levantar-se, descer ao centro, fazer genuflexão e voltar ao seu lugar.'],
  },
  {
    title: 'Fim do Cânon e Pater noster',
    cue: 'Pequena elevação: o padre ergue juntos a Hóstia e o Cálice no “omnis honor et gloria”.',
    bell: '1 toque',
    actions: ['Tocar o sino na pequena elevação.', 'Permanecer de joelhos durante o Pater noster.'],
  },
  {
    title: 'Comunhão do celebrante',
    cue: 'Domine, non sum dignus (o padre diz três vezes).',
    bell: '1, 2 e 3 toques',
    actions: ['Tocar o sino uma vez na 1ª repetição, duas na 2ª e três na 3ª.'],
  },
  {
    title: 'Comunhão dos fiéis',
    cue: 'Depois que o celebrante comunga.',
    actions: [
      'Se há fiéis para comungar, rezar o Confiteor com o outro acólito, inclinados, e responder Amen ao Misereatur e ao Indulgentiam.',
      'Buscar a patena de comunhão.',
      'Levar o sino de volta à credência.',
      'Acompanhar a comunhão de todos.',
    ],
  },
  {
    title: 'Abluções',
    cue: 'O padre termina de consumir as partículas que restaram.',
    actions: [
      'Ajoelhado, esperar o padre terminar.',
      'Buscar o vinho na credência.',
      'Quando o padre virar o cálice na sua direção, colocar um pouco de vinho.',
      'Quando ele se voltar de novo, derramar vinho sobre os dedos dele.',
    ],
  },
  {
    title: 'Missal de volta à Epístola',
    actions: [
      'Na volta, os acólitos trocam de lado.',
      'Ir ao lado do Evangelho e pegar o missal.',
      'Fazer genuflexão no centro e levar o missal ao lado da Epístola.',
      'Voltar ao seu lugar.',
    ],
  },
];

/**
 * Duties of the acolyte on the Gospel side when two acolytes serve,
 * following the custom of the chapel, in the order they happen.
 */
export const GOSPEL_SERVER_STEPS: RoleStep[] = [
  {
    title: 'Ofertório: véu, água e manutérgio',
    cue: 'No Ofertório, quando o sacerdote descobre o cálice (enquanto o acólito da Epístola cuida do vinho).',
    actions: [
      'Ir até o sacerdote e receber das mãos dele o véu do cálice.',
      'Dobrar o véu conforme o costume e deixá-lo sobre o altar.',
      'Ir à credência e pegar a colherinha com água.',
      'Beijá-la e entregá-la ao sacerdote; ao recebê-la de volta, beijá-la novamente.',
      'Trocá-la pelo manutérgio (toalhinha branca) e oferecê-lo ao sacerdote no Lavabo.',
      'Voltar ao centro do altar, fazer genuflexão e ajoelhar-se no seu lugar.',
    ],
  },
  {
    title: 'Consagração',
    cue: 'O sacerdote vai elevar a Hóstia e, depois, o Cálice.',
    actions: [
      'Aproximar-se do sacerdote e ajoelhar-se junto dele.',
      'Na elevação da Hóstia, levantar levemente a ponta da casula.',
      'Fazer o mesmo na elevação do Cálice.',
    ],
  },
  {
    title: 'Volta ao lugar depois da Consagração',
    cue: 'Depois de elevar o Cálice, o sacerdote o pousa, cobre-o com a pala e faz genuflexão. Quando ele se levanta e abre os braços para o Unde et memores, a Consagração terminou.',
    actions: [
      'Voltar para trás, fazendo genuflexão no centro.',
      'Pegar a patena de comunhão.',
      'Permanecer de joelhos aguardando a Santa Comunhão.',
    ],
  },
  {
    title: 'Comunhão dos fiéis',
    cue: 'Depois que o celebrante comunga.',
    actions: [
      'Se há fiéis para comungar, rezar o Confiteor com o outro acólito, inclinados, e responder Amen ao Misereatur e ao Indulgentiam.',
      'Com a patena, acompanhar o sacerdote na comunhão dos fiéis, segurando-a sob o queixo de cada comungante.',
      'Terminada a comunhão dos fiéis, fazer genuflexão.',
    ],
  },
  {
    title: 'Abluções',
    cue: 'O sacerdote termina de consumir as Hóstias que sobraram.',
    actions: [
      'Ir à credência com o acólito da Epístola.',
      'Pegar a água e derramá-la sobre os dedos do sacerdote (depois do vinho, que é do acólito da Epístola).',
      'Sair da credência e fazer genuflexão no centro do altar.',
    ],
  },
  {
    title: 'Véu e bolsa do cálice',
    actions: [
      'Ir ao altar e pegar o véu.',
      'Fazer genuflexão novamente e levar o véu para o outro lado, deixando-o sobre o altar.',
      'Pegar a bolsa do corporal e aguardar o sacerdote guardar o corporal.',
      'Pegar o véu e entregá-lo ao sacerdote.',
      'Ir ao centro do altar, fazer genuflexão e aguardar.',
    ],
  },
];

export const SERVER_ROLE_STEPS: Record<ServerRole, RoleStep[]> = {
  epistle: EPISTLE_SERVER_STEPS,
  gospel: GOSPEL_SERVER_STEPS,
};

export const SERVER_ROLE_LABEL: Record<ServerRole, string> = {
  epistle: 'Acólito da Epístola',
  gospel: 'Acólito do Evangelho',
};
