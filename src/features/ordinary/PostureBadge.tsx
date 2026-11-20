import { POSTURE_LABEL } from '@/content/labels';
import type { Posture } from '@/content/types';
import { Badge } from '@/ui';

export function PostureBadge({ posture }: { posture: Posture }) {
  return <Badge tone={posture}>{POSTURE_LABEL[posture]}</Badge>;
}
