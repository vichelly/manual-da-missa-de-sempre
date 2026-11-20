const EPISTLE = '#3d5a80';
const GOSPEL = '#7a3e1d';
const MUTED = '#76664f';

/** Plan of the altar seen from the nave, naming the two sides. */
export function AltarDiagram() {
  return (
    <svg
      viewBox="0 0 520 215"
      width="100%"
      role="img"
      aria-label="Planta do altar: lado do Evangelho à esquerda, lado da Epístola à direita"
    >
      <rect x="120" y="38" width="280" height="46" rx="4" fill="#efe4c8" stroke="#9a7429" />
      <text x="260" y="67" textAnchor="middle" fontSize="16" fill="#2a2118">
        ALTAR
      </text>
      <line x1="260" y1="12" x2="260" y2="36" stroke="#9b1c1c" strokeWidth="3" />
      <line x1="251" y1="20" x2="269" y2="20" stroke="#9b1c1c" strokeWidth="3" />
      <rect x="120" y="90" width="280" height="10" fill="none" stroke="#c9b892" />
      <rect x="105" y="104" width="310" height="10" fill="none" stroke="#c9b892" />
      <text x="60" y="58" textAnchor="middle" fontSize="15" fill={GOSPEL} fontWeight="600">
        EVANGELHO
      </text>
      <text x="60" y="76" textAnchor="middle" fontSize="12" fill={GOSPEL}>
        (norte)
      </text>
      <text x="460" y="58" textAnchor="middle" fontSize="15" fill={EPISTLE} fontWeight="600">
        EPÍSTOLA
      </text>
      <text x="460" y="76" textAnchor="middle" fontSize="12" fill={EPISTLE}>
        (sul)
      </text>
      <rect x="432" y="100" width="62" height="28" rx="3" fill="none" stroke={EPISTLE} />
      <text x="463" y="119" textAnchor="middle" fontSize="12" fill={EPISTLE}>
        credência
      </text>
      <text x="260" y="150" textAnchor="middle" fontSize="22" fill={MUTED}>
        ↑
      </text>
      <text x="260" y="172" textAnchor="middle" fontSize="14" fill={MUTED}>
        os fiéis olham para o altar daqui
      </text>
      <text x="260" y="195" textAnchor="middle" fontSize="14" fill="#2a2118">
        olhando o altar: Evangelho à esquerda · Epístola à direita
      </text>
    </svg>
  );
}
