export function HexPatternDefs({ patternId }: { patternId: string }) {
  return (
    <defs>
      <pattern
        id={patternId}
        width={56}
        height={52}
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M28 6 44 17.5 44 40.5 28 52 11 40.5 11 17.5 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.7}
          opacity={0.35}
          vectorEffect="non-scaling-stroke"
        />
      </pattern>
    </defs>
  )
}
