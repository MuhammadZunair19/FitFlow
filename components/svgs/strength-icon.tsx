interface StrengthIconProps {
  className?: string
}

export default function StrengthIcon({ className = "w-16 h-16" }: StrengthIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Barbell */}
      <g className="animate-pulse">
        {/* Bar */}
        <rect x="20" y="48" width="60" height="4" rx="2" fill="currentColor" />

        {/* Left weights */}
        <rect x="15" y="40" width="8" height="20" rx="2" fill="currentColor" opacity="0.8" />
        <rect x="12" y="42" width="6" height="16" rx="1" fill="currentColor" opacity="0.6" />

        {/* Right weights */}
        <rect x="77" y="40" width="8" height="20" rx="2" fill="currentColor" opacity="0.8" />
        <rect x="82" y="42" width="6" height="16" rx="1" fill="currentColor" opacity="0.6" />

        {/* Center grip */}
        <rect x="45" y="46" width="10" height="8" rx="1" fill="currentColor" opacity="0.9" />
      </g>

      {/* Strength lines */}
      <g className="animate-bounce" style={{ animationDelay: "0.5s" }}>
        <path d="M30 30 L35 25 M35 35 L30 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M70 30 L65 25 M65 35 L70 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M30 70 L35 75 M35 65 L30 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M70 70 L65 75 M65 65 L70 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      </g>
    </svg>
  )
}
