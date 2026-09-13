type StampIconProps = {
  code: string;
  label: string;
  rotation?: number;
  size?: number;
  className?: string;
};

export default function StampIcon({
  code,
  label,
  rotation = 0,
  size = 96,
  className = "",
}: StampIconProps) {
  const id = `stamp-${code}-${Math.round(rotation)}`;

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label={`Carimbo de passaporte: ${label}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      className={className}
    >
      <defs>
        <path
          id={id}
          d="M 60 14 A 46 46 0 1 1 59.9 14"
          fill="none"
        />
      </defs>
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        strokeDasharray="3 4"
        opacity="0.7"
      />
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
      />
      <text fontSize="10" fontWeight="600" letterSpacing="2" fill="var(--color-gold)">
        <textPath href={`#${id}`} startOffset="2%">
          {label.toUpperCase()} • {label.toUpperCase()} •
        </textPath>
      </text>
      <text
        x="60"
        y="56"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fill="var(--color-gold)"
        fontFamily="var(--font-display)"
      >
        {code}
      </text>
      <line x1="34" y1="70" x2="86" y2="70" stroke="var(--color-gold)" strokeWidth="2" />
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fontSize="9"
        fontWeight="600"
        letterSpacing="1"
        fill="var(--color-gold)"
      >
        CAMPO
      </text>
    </svg>
  );
}
