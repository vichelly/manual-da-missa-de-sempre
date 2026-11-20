// Liturgical content. Texts are in Portuguese and Latin; edit them here.
import type { MemoryBlock } from '../types';

/** The acolyte's Confiteor ("tibi, pater"), split into memorization blocks. */
export const CONFITEOR_BLOCKS: MemoryBlock[] = [
  {
    title: 'Confesso a Deus e a Maria',
    latin: 'Confiteor Deo omnipotenti, beatae Mariae semper Virgini,',
    translation: 'Eu confesso a Deus todo-poderoso, à bem-aventurada sempre Virgem Maria,',
    tip: 'Começa por Deus e por Nossa Senhora.',
  },
  {
    title: 'Miguel e João Batista',
    latin: 'beato Michaeli Archangelo, beato Ioanni Baptistae,',
    translation: 'ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista,',
    tip: 'Dois “beato”: Miguel e João.',
  },
  {
    title: 'Apóstolos, Santos e o padre',
    latin: 'sanctis Apostolis Petro et Paulo, omnibus Sanctis, et tibi, pater:',
    translation: 'aos santos Apóstolos Pedro e Paulo, a todos os Santos e a vós, padre:',
    tip: 'Volte-se um pouco para o sacerdote no “et tibi, pater”.',
  },
  {
    title: 'Que pequei',
    latin: 'quia peccavi nimis cogitatione, verbo et opere:',
    translation: 'que pequei muitas vezes por pensamentos, palavras e obras:',
    tip: 'Três coisas: pensei, falei, fiz. Conte nos dedos.',
  },
  {
    title: 'Mea culpa',
    latin: 'mea culpa, mea culpa, mea maxima culpa.',
    translation: 'por minha culpa, minha culpa, minha máxima culpa.',
    tip: 'Bater no peito três vezes.',
  },
  {
    title: 'Por isso peço (a mesma lista)',
    latin:
      'Ideo precor beatam Mariam semper Virginem, beatum Michaelem Archangelum, beatum Ioannem Baptistam, sanctos Apostolos Petrum et Paulum, omnes Sanctos,',
    translation:
      'Por isso, peço à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos Apóstolos Pedro e Paulo, a todos os Santos,',
    tip: 'É a mesma lista dos blocos 1 a 3, sem Deus, com terminações em -am, -em, -um, -os.',
  },
  {
    title: 'Que rogueis por mim',
    latin: 'et te, pater, orare pro me ad Dominum Deum nostrum.',
    translation: 'e a vós, padre, que rogueis por mim ao Senhor, nosso Deus.',
    tip: '“tibi, pater” agora vira “te, pater”.',
  },
];

export const CONFITEOR_TEXT = CONFITEOR_BLOCKS.map((block) => block.latin).join(' ');

/**
 * The Confiteor is a list that repeats. Showing its skeleton is the first memorization aid:
 * the second list is the first one without God, in the accusative.
 */
export const CONFITEOR_STRUCTURE: { lead: string; items: string[]; result?: string }[] = [
  {
    lead: 'Confiteor',
    items: [
      'Deus',
      'Maria',
      'Miguel',
      'João Batista',
      'Pedro e Paulo',
      'todos os Santos',
      'tibi, pater',
    ],
  },
  { lead: 'quia peccavi', items: ['cogitatione', 'verbo', 'opere'], result: 'mea culpa ×3' },
  {
    lead: 'Ideo precor',
    items: ['Maria', 'Miguel', 'João Batista', 'Pedro e Paulo', 'todos os Santos', 'te, pater'],
    result: 'orare pro me',
  },
];

/** Case endings that change between the first and the second list. */
export const CONFITEOR_ENDING_SHIFTS: [string, string][] = [
  ['Mariae', 'Mariam'],
  ['Michaeli', 'Michaelem'],
  ['Ioanni', 'Ioannem'],
  ['Apostolis', 'Apostolos'],
  ['omnibus Sanctis', 'omnes Sanctos'],
  ['tibi', 'te'],
];
