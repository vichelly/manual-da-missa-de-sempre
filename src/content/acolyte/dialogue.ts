// Liturgical content. Texts are in Portuguese and Latin; edit them here.
import type { DialogueItem } from '../types';

/** Every answer the acolyte gives at Low Mass, in order. */
export const ACOLYTE_DIALOGUE: DialogueItem[] = [
  {
    phase: 'Ao pé do altar',
    prompt: 'In nomine Patris, et Filii, et Spiritus Sancti. Amen. Introibo ad altare Dei.',
    promptTranslation:
      'Em nome do Pai, do Filho e do Espírito Santo. Amém. Subirei ao altar de Deus.',
    answer: 'Ad Deum qui lætificat juventutem meam.',
    answerTranslation: 'A Deus, que alegra a minha juventude.',
  },
  {
    phase: 'Ao pé do altar',
    prompt:
      'Judica me, Deus, et discerne causam meam de gente non sancta: ab homine iniquo et doloso erue me.',
    promptTranslation:
      'Julgai-me, ó Deus, e separai a minha causa da gente não santa: livrai-me do homem iníquo e enganador.',
    answer:
      'Quia tu es, Deus, fortitudo mea: quare me repulisti, et quare tristis incedo, dum affligit me inimicus?',
    answerTranslation:
      'Porque Vós, ó Deus, sois a minha fortaleza: por que me repelistes, e por que ando triste, enquanto o inimigo me aflige?',
  },
  {
    phase: 'Ao pé do altar',
    prompt:
      'Emitte lucem tuam et veritatem tuam: ipsa me deduxerunt, et adduxerunt in montem sanctum tuum, et in tabernacula tua.',
    promptTranslation:
      'Enviai a vossa luz e a vossa verdade: elas me guiaram e me conduziram ao vosso monte santo e aos vossos tabernáculos.',
    answer: 'Et introibo ad altare Dei: ad Deum qui lætificat juventutem meam.',
    answerTranslation: 'E subirei ao altar de Deus, a Deus que alegra a minha juventude.',
  },
  {
    phase: 'Ao pé do altar',
    prompt:
      'Confitebor tibi in cithara, Deus, Deus meus: quare tristis es, anima mea, et quare conturbas me?',
    promptTranslation:
      'Louvar-Vos-ei com a cítara, ó Deus, meu Deus: por que estás triste, minha alma, e por que me perturbas?',
    answer: 'Spera in Deo, quoniam adhuc confitebor illi: salutare vultus mei, et Deus meus.',
    answerTranslation:
      'Espera em Deus, porque ainda O louvarei: Ele é a salvação da minha face e o meu Deus.',
  },
  {
    phase: 'Ao pé do altar',
    prompt: 'Gloria Patri, et Filio, et Spiritui Sancto.',
    promptTranslation: 'Glória ao Pai, ao Filho e ao Espírito Santo.',
    answer: 'Sicut erat in principio, et nunc, et semper: et in sæcula sæculorum. Amen.',
    answerTranslation:
      'Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.',
    note: 'Inclinar a cabeça no Gloria Patri.',
  },
  {
    phase: 'Ao pé do altar',
    prompt: 'Introibo ad altare Dei. (2ª vez)',
    promptTranslation: 'Subirei ao altar de Deus.',
    answer: 'Ad Deum qui lætificat juventutem meam.',
    answerTranslation: 'A Deus, que alegra a minha juventude.',
  },
  {
    phase: 'Ao pé do altar',
    prompt: 'Adjutorium nostrum in nomine Domini.',
    promptTranslation: 'O nosso auxílio está no nome do Senhor.',
    answer: 'Qui fecit cælum et terram.',
    answerTranslation: 'Que fez o céu e a terra.',
    note: 'Fazer o sinal da cruz junto com o sacerdote.',
  },
  {
    phase: 'Ao pé do altar',
    prompt:
      '… et vos, fratres, orare pro me ad Dominum Deum nostrum. (fim do Confiteor do sacerdote)',
    promptTranslation: '… e a vós, irmãos, que rogueis por mim ao Senhor, nosso Deus.',
    answer:
      'Misereatur tui omnipotens Deus, et dimissis peccatis tuis, perducat te ad vitam æternam.',
    answerTranslation:
      'Deus todo-poderoso tenha misericórdia de vós, perdoe os vossos pecados e vos conduza à vida eterna.',
    note: 'O sacerdote responde Amen, e em seguida você reza o Confiteor (veja a aba Confiteor).',
  },
  {
    phase: 'Ao pé do altar',
    prompt:
      'Misereatur vestri omnipotens Deus, et dimissis peccatis vestris, perducat vos ad vitam æternam.',
    promptTranslation:
      'Deus todo-poderoso tenha misericórdia de vós, perdoe os vossos pecados e vos conduza à vida eterna.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
    note: 'É o que o sacerdote diz depois do seu Confiteor.',
  },
  {
    phase: 'Ao pé do altar',
    prompt:
      'Indulgentiam, absolutionem, et remissionem peccatorum nostrorum tribuat nobis omnipotens et misericors Dominus.',
    promptTranslation:
      'O Senhor todo-poderoso e misericordioso nos conceda o perdão, a absolvição e a remissão dos nossos pecados.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
    note: 'Fazer o sinal da cruz.',
  },
  {
    phase: 'Ao pé do altar',
    prompt: 'Deus, tu conversus vivificabis nos.',
    promptTranslation: 'Ó Deus, voltando-Vos para nós, nos dareis a vida.',
    answer: 'Et plebs tua lætabitur in te.',
    answerTranslation: 'E o vosso povo se alegrará em Vós.',
  },
  {
    phase: 'Ao pé do altar',
    prompt: 'Ostende nobis, Domine, misericordiam tuam.',
    promptTranslation: 'Mostrai-nos, Senhor, a vossa misericórdia.',
    answer: 'Et salutare tuum da nobis.',
    answerTranslation: 'E dai-nos a vossa salvação.',
  },
  {
    phase: 'Ao pé do altar',
    prompt: 'Domine, exaudi orationem meam.',
    promptTranslation: 'Senhor, ouvi a minha oração.',
    answer: 'Et clamor meus ad te veniat.',
    answerTranslation: 'E chegue até Vós o meu clamor.',
  },
  {
    phase: 'Ao pé do altar',
    prompt: 'Dominus vobiscum.',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Kyrie e Coleta',
    prompt: 'Kyrie, eleison. (1ª invocação)',
    promptTranslation: 'Senhor, tende piedade.',
    answer: 'Kyrie, eleison.',
    answerTranslation: 'Senhor, tende piedade.',
    note: 'O Kyrie é alternado: o sacerdote diz a 1ª, você a 2ª, e assim até ele dizer a 9ª.',
  },
  {
    phase: 'Kyrie e Coleta',
    prompt: 'Kyrie, eleison. (3ª invocação)',
    promptTranslation: 'Senhor, tende piedade.',
    answer: 'Christe, eleison.',
    answerTranslation: 'Cristo, tende piedade.',
    note: 'Depois de três Kyrie, você começa os Christe.',
  },
  {
    phase: 'Kyrie e Coleta',
    prompt: 'Christe, eleison. (5ª invocação)',
    promptTranslation: 'Cristo, tende piedade.',
    answer: 'Christe, eleison.',
    answerTranslation: 'Cristo, tende piedade.',
    note: 'Depois de três Christe, você começa os últimos Kyrie.',
  },
  {
    phase: 'Kyrie e Coleta',
    prompt: 'Kyrie, eleison. (7ª invocação)',
    promptTranslation: 'Senhor, tende piedade.',
    answer: 'Kyrie, eleison.',
    answerTranslation: 'Senhor, tende piedade.',
    note: 'O sacerdote diz o 9º e último Kyrie.',
  },
  {
    phase: 'Kyrie e Coleta',
    prompt: 'Dominus vobiscum. (antes da Coleta)',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Kyrie e Coleta',
    prompt: '… Per omnia sæcula sæculorum. (fim da Coleta)',
    promptTranslation: 'Por todos os séculos dos séculos.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
    note: 'Quando há várias orações, responde-se Amen no fim da primeira e no fim da última.',
  },
  {
    phase: 'Epístola e Evangelho',
    prompt: '(O sacerdote termina a leitura da Epístola.)',
    answer: 'Deo gratias.',
    answerTranslation: 'Graças a Deus.',
    note: 'Depois, leve o missal ao lado do Evangelho quando o sacerdote for ao centro.',
    isRubric: true,
  },
  {
    phase: 'Epístola e Evangelho',
    prompt: 'Dominus vobiscum. (antes do Evangelho)',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Epístola e Evangelho',
    prompt: 'Sequentia sancti Evangelii secundum Matthæum.',
    promptTranslation: 'Continuação do santo Evangelho segundo Mateus.',
    answer: 'Gloria tibi, Domine.',
    answerTranslation: 'Glória a Vós, Senhor.',
    note: 'De pé, faça com o polegar os três pequenos sinais da cruz: fronte, lábios e peito.',
  },
  {
    phase: 'Epístola e Evangelho',
    prompt: '(O sacerdote termina o Evangelho.)',
    answer: 'Laus tibi, Christe.',
    answerTranslation: 'Louvor a Vós, ó Cristo.',
    isRubric: true,
  },
  {
    phase: 'Ofertório e Prefácio',
    prompt: 'Dominus vobiscum. (Ofertório)',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Ofertório e Prefácio',
    prompt:
      'Orate, fratres: ut meum ac vestrum sacrificium acceptabile fiat apud Deum Patrem omnipotentem.',
    promptTranslation:
      'Orai, irmãos, para que o meu e o vosso sacrifício seja aceito por Deus Pai todo-poderoso.',
    answer:
      'Suscipiat Dominus sacrificium de manibus tuis, ad laudem et gloriam nominis sui, ad utilitatem quoque nostram, totiusque Ecclesiæ suæ sanctæ.',
    answerTranslation:
      'Receba o Senhor de tuas mãos este sacrifício, para louvor e glória do seu nome, para nosso proveito e de toda a sua santa Igreja.',
    note: 'O sacerdote responde Amen em voz baixa.',
  },
  {
    phase: 'Ofertório e Prefácio',
    prompt: '… Per omnia sæcula sæculorum. (fim da Secreta)',
    promptTranslation: 'Por todos os séculos dos séculos.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
  },
  {
    phase: 'Ofertório e Prefácio',
    prompt: 'Dominus vobiscum. (Prefácio)',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Ofertório e Prefácio',
    prompt: 'Sursum corda.',
    promptTranslation: 'Corações ao alto.',
    answer: 'Habemus ad Dominum.',
    answerTranslation: 'Já os temos no Senhor.',
  },
  {
    phase: 'Ofertório e Prefácio',
    prompt: 'Gratias agamus Domino Deo nostro.',
    promptTranslation: 'Demos graças ao Senhor, nosso Deus.',
    answer: 'Dignum et justum est.',
    answerTranslation: 'É digno e justo.',
  },
  {
    phase: 'Pater noster e Comunhão',
    prompt: '… Per omnia sæcula sæculorum. (fim do Cânon, antes do Pater noster)',
    promptTranslation: 'Por todos os séculos dos séculos.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
  },
  {
    phase: 'Pater noster e Comunhão',
    prompt: '… Et ne nos inducas in tentationem.',
    promptTranslation: '… E não nos deixeis cair em tentação.',
    answer: 'Sed libera nos a malo.',
    answerTranslation: 'Mas livrai-nos do mal.',
  },
  {
    phase: 'Pater noster e Comunhão',
    prompt: '… Per omnia sæcula sæculorum. (depois do Libera nos)',
    promptTranslation: 'Por todos os séculos dos séculos.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
  },
  {
    phase: 'Pater noster e Comunhão',
    prompt: 'Pax Domini sit semper vobiscum.',
    promptTranslation: 'A paz do Senhor esteja sempre convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Pater noster e Comunhão',
    prompt:
      'Misereatur vestri omnipotens Deus, et dimissis peccatis vestris, perducat vos ad vitam æternam. (comunhão dos fiéis)',
    promptTranslation:
      'Deus todo-poderoso tenha misericórdia de vós, perdoe os vossos pecados e vos conduza à vida eterna.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
    note: 'Antes, se há fiéis para comungar, o acólito reza o Confiteor (o mesmo do pé do altar).',
  },
  {
    phase: 'Pater noster e Comunhão',
    prompt:
      'Indulgentiam, absolutionem, et remissionem peccatorum vestrorum tribuat vobis omnipotens et misericors Dominus. (comunhão dos fiéis)',
    promptTranslation:
      'O Senhor todo-poderoso e misericordioso vos conceda o perdão, a absolvição e a remissão dos vossos pecados.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
  },
  {
    phase: 'Conclusão',
    prompt: 'Dominus vobiscum. (Pós-comunhão)',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Conclusão',
    prompt: '… Per omnia sæcula sæculorum. (fim da Pós-comunhão)',
    promptTranslation: 'Por todos os séculos dos séculos.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
    note: 'Como na Coleta: Amen no fim da primeira e da última oração.',
  },
  {
    phase: 'Conclusão',
    prompt: 'Dominus vobiscum. (antes do Ite)',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Conclusão',
    prompt: 'Ite, missa est.',
    promptTranslation: 'Ide, a Missa terminou.',
    answer: 'Deo gratias.',
    answerTranslation: 'Graças a Deus.',
    note: 'Nas Missas sem Gloria o sacerdote diz Benedicamus Domino, e a resposta também é Deo gratias. Na Missa de Réquiem: Requiescant in pace → Amen.',
  },
  {
    phase: 'Conclusão',
    prompt: 'Benedicat vos omnipotens Deus, Pater, et Filius, et Spiritus Sanctus.',
    promptTranslation: 'Abençoe-vos Deus todo-poderoso, Pai, Filho e Espírito Santo.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
    note: 'Ajoelhado, fazer o sinal da cruz.',
  },
  {
    phase: 'Conclusão',
    prompt: 'Dominus vobiscum. (Último Evangelho)',
    promptTranslation: 'O Senhor esteja convosco.',
    answer: 'Et cum spiritu tuo.',
    answerTranslation: 'E com o teu espírito.',
  },
  {
    phase: 'Conclusão',
    prompt: 'Initium sancti Evangelii secundum Joannem.',
    promptTranslation: 'Início do santo Evangelho segundo João.',
    answer: 'Gloria tibi, Domine.',
    answerTranslation: 'Glória a Vós, Senhor.',
    note: 'Se o Último Evangelho for próprio, o sacerdote diz “Sequentia sancti Evangelii…”, e a resposta é a mesma.',
  },
  {
    phase: 'Conclusão',
    prompt: '… plenum gratiæ et veritatis. (fim do Último Evangelho)',
    promptTranslation: '… cheio de graça e de verdade.',
    answer: 'Deo gratias.',
    answerTranslation: 'Graças a Deus.',
    note: 'Atenção: no Último Evangelho a resposta final é Deo gratias, e não Laus tibi, Christe. Genuflexão no Et Verbum caro factum est.',
  },
  {
    phase: 'Orações depois da Missa',
    prompt: 'Ave Maria, gratia plena, Dominus tecum… benedictus fructus ventris tui, Jesus.',
    promptTranslation: 'Ave Maria, cheia de graça… bendito é o fruto do vosso ventre, Jesus.',
    answer:
      'Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostræ. Amen.',
    answerTranslation:
      'Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.',
    note: 'Três vezes. Depois, todos rezam juntos a Salve Rainha. Podem ser rezadas em português.',
  },
  {
    phase: 'Orações depois da Missa',
    prompt: 'Ora pro nobis, sancta Dei Genetrix.',
    promptTranslation: 'Rogai por nós, santa Mãe de Deus.',
    answer: 'Ut digni efficiamur promissionibus Christi.',
    answerTranslation: 'Para que sejamos dignos das promessas de Cristo.',
  },
  {
    phase: 'Orações depois da Missa',
    prompt: 'Oremus. Deus, refugium nostrum et virtus… Per eundem Christum Dominum nostrum.',
    promptTranslation:
      'Oremos. Ó Deus, nosso refúgio e nossa força… Pelo mesmo Cristo, nosso Senhor.',
    answer: 'Amen.',
    answerTranslation: 'Amém.',
    note: 'Segue-se a oração a São Miguel Arcanjo, também respondida com Amen.',
  },
  {
    phase: 'Orações depois da Missa',
    prompt: 'Cor Jesu sacratissimum,',
    promptTranslation: 'Sacratíssimo Coração de Jesus,',
    answer: 'Miserere nobis.',
    answerTranslation: 'Tende piedade de nós.',
    note: 'Três vezes.',
  },
];
