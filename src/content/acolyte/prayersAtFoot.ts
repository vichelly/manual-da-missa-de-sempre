// Liturgical content. Texts are in Portuguese and Latin; edit them here.
import type { MemoryBlock } from '../types';

/** Prayers at the foot of the altar: the priest's cue and the acolyte's answer. */
export const PRAYERS_AT_FOOT: MemoryBlock[] = [
  {
    cue: 'Introibo ad altare Dei.',
    latin: 'Ad Deum qui lætificat juventutem meam.',
    translation: 'A Deus, que alegra a minha juventude.',
    tip: 'Antes, faça o sinal da cruz com o sacerdote (In nomine Patris…).',
  },
  {
    cue: 'Judica me, Deus, et discerne causam meam de gente non sancta: ab homine iniquo et doloso erue me.',
    latin:
      'Quia tu es, Deus, fortitudo mea: quare me repulisti, et quare tristis incedo, dum affligit me inimicus?',
    translation:
      'Porque Vós, ó Deus, sois a minha fortaleza: por que me repelistes, e por que ando triste, enquanto o inimigo me aflige?',
    tip: 'Duas perguntas com “quare” (por quê): por que me repelistes? por que ando triste?',
  },
  {
    cue: 'Emitte lucem tuam et veritatem tuam: ipsa me deduxerunt, et adduxerunt in montem sanctum tuum, et in tabernacula tua.',
    latin: 'Et introibo ad altare Dei: ad Deum qui lætificat juventutem meam.',
    translation: 'E subirei ao altar de Deus, a Deus que alegra a minha juventude.',
    tip: 'É a primeira resposta com “Et introibo ad altare Dei” na frente.',
  },
  {
    cue: 'Confitebor tibi in cithara, Deus, Deus meus: quare tristis es, anima mea, et quare conturbas me?',
    latin: 'Spera in Deo, quoniam adhuc confitebor illi: salutare vultus mei, et Deus meus.',
    translation:
      'Espera em Deus, porque ainda O louvarei: Ele é a salvação da minha face e o meu Deus.',
    tip: 'A alma triste recebe a resposta: “Spera” (espera). O “confitebor” da pergunta volta na resposta.',
  },
  {
    cue: 'Gloria Patri, et Filio, et Spiritui Sancto.',
    latin: 'Sicut erat in principio, et nunc, et semper: et in sæcula sæculorum. Amen.',
    translation:
      'Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.',
    tip: 'Inclinar a cabeça no Gloria Patri.',
  },
  {
    cue: 'Introibo ad altare Dei.',
    latin: 'Ad Deum qui lætificat juventutem meam.',
    translation: 'A Deus, que alegra a minha juventude.',
    tip: 'O salmo termina como começou.',
  },
  {
    cue: 'Adjutorium nostrum ✠ in nomine Domini.',
    latin: 'Qui fecit cælum et terram.',
    translation: 'Que fez o céu e a terra.',
    tip: 'Sinal da cruz junto com o sacerdote.',
  },
  {
    cue: '(fim do Confiteor do sacerdote) … orare pro me ad Dominum Deum nostrum.',
    latin:
      'Misereatur tui omnipotens Deus, et dimissis peccatis tuis, perducat te ad vitam æternam.',
    translation:
      'Deus todo-poderoso tenha misericórdia de vós, perdoe os vossos pecados e vos conduza à vida eterna.',
    tip: 'Inclinado, voltado um pouco para o sacerdote. Ele responde Amen, e você reza o Confiteor.',
  },
  {
    cue: 'Misereatur vestri omnipotens Deus, et dimissis peccatis vestris, perducat vos ad vitam æternam.',
    latin: 'Amen.',
    translation: 'Amém.',
  },
  {
    cue: 'Indulgentiam, ✠ absolutionem, et remissionem peccatorum nostrorum tribuat nobis omnipotens et misericors Dominus.',
    latin: 'Amen.',
    translation: 'Amém.',
    tip: 'Sinal da cruz.',
  },
  {
    cue: 'Deus, tu conversus vivificabis nos.',
    latin: 'Et plebs tua lætabitur in te.',
    translation: 'E o vosso povo se alegrará em Vós.',
    tip: 'Os versículos finais são ditos com leve inclinação.',
  },
  {
    cue: 'Ostende nobis, Domine, misericordiam tuam.',
    latin: 'Et salutare tuum da nobis.',
    translation: 'E dai-nos a vossa salvação.',
  },
  {
    cue: 'Domine, exaudi orationem meam.',
    latin: 'Et clamor meus ad te veniat.',
    translation: 'E chegue até Vós o meu clamor.',
  },
  {
    cue: 'Dominus vobiscum.',
    latin: 'Et cum spiritu tuo.',
    translation: 'E com o teu espírito.',
    tip: 'O sacerdote diz Oremus e sobe ao altar.',
  },
];
