/** Sides of the altar, as seen by someone facing it. */
export type AltarSide = 'epistle' | 'gospel';

/** Where the acolyte is during a given moment of the Mass. */
export type AcolytePosition = AltarSide | 'moving' | 'center';

/** Where the missal is, or where it is being carried. */
export type MissalPosition = AltarSide | 'epistleToGospel' | 'gospelToEpistle';

/** Posture of the faithful. */
export type Posture = 'standing' | 'kneeling' | 'sitting';

/** One exchange of the dialogue: what the priest says and the expected answer. */
export interface DialogueItem {
  phase: string;
  prompt: string;
  promptTranslation?: string;
  answer: string;
  answerTranslation?: string;
  note?: string;
  /** The prompt is a rubric (a description of an action), not spoken Latin. */
  isRubric?: boolean;
}

/** A unit of text to memorize, optionally preceded by the priest's cue. */
export interface MemoryBlock {
  title?: string;
  cue?: string;
  latin: string;
  translation?: string;
  tip?: string;
}

/** One step of serving a Low Mass. */
export interface ServingStep {
  title: string;
  acolyte: AcolytePosition;
  missal: MissalPosition;
  where: string;
  actions: string;
  says?: string;
  bell?: string;
}

export interface BellCue {
  moment: string;
  rings: string;
}

export type OrdoLine =
  | { kind: 'priest' | 'server'; latin: string; translation: string; emphasis?: boolean }
  | { kind: 'rubric' | 'proper'; text: string };

export interface OrdoSection {
  title: string;
  posture: Posture;
  postureNote?: string;
  lines: OrdoLine[];
}

export interface ExaminationSection {
  title: string;
  questions: string[];
}
