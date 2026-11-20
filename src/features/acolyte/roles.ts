import type { ServerRole } from '@/content/types';
import { SERVER_ROLE_LABEL } from '@/content/acolyte/twoServers';

/** "single": Low Mass with one acolyte; otherwise one of the two acolytes. */
export type Role = 'single' | ServerRole;

export const ROLE_OPTIONS: { value: Role; label: string }[] = [
  { value: 'single', label: 'Um acólito' },
  { value: 'epistle', label: SERVER_ROLE_LABEL.epistle },
  { value: 'gospel', label: SERVER_ROLE_LABEL.gospel },
];

export const ROLE_STORAGE_KEY = 'acolyte-role';
