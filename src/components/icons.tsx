import type { SVGProps } from 'react'

const base = 'block shrink-0' as const

/** Instagram — silueta tipo cámara */
export function IconInstagram({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={`${base} ${className ?? ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
    </svg>
  )
}

export function DecorativeCacaoOutline({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      fill="none"
      aria-hidden
    >
      <path
        d="M58 14c22-12 54 4 54 42 0 28-26 76-62 74-44-4-62-94-36-118 14-13 46-29 76-52"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M54 62c18-28 52-38 72-44M48 92c26-52 74-74 114-104"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="68" cy="46" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="84" cy="58" r="2.8" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function DecorativeSugarcaneOutline({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 140"
      fill="none"
      aria-hidden
    >
      <path
        d="M50 138V18M50 138c28-54 58-132-8-154M50 138C22 94-8 32 34 4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M30 118l14-58M74 116L58 72" opacity="0.7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function DecorativeCloudOutline({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 96"
      fill="none"
      aria-hidden
    >
      <path
        d="M28 74c-12 0-22-11-21-26 2-39 74-53 116-44 18 23 44 62-8 70H28z"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
