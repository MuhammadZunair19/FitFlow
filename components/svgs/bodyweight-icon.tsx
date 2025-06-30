interface BodyweightIconProps {
  className?: string
}

export default function BodyweightIcon({ className = "w-16 h-16" }: BodyweightIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Push-up figure */}
      <g className="animate-pushup">
        {/* Head */}
        <circle cx="20" cy="30" r="6" fill="currentColor" opacity="0.9" />

        {/* Body */}
        <ellipse cx="45" cy="35" rx="20" ry="4" fill="currentColor" opacity="0.8" />

        {/* Arms */}
        <ellipse cx="15" cy="40" rx="3" ry="8" fill="currentColor" opacity="0.7" />
        <ellipse cx="25" cy="40" rx="3" ry="8" fill="currentColor" opacity="0.7" />

        {/* Legs */}
        <ellipse cx="65" cy="35" rx="3" ry="8" fill="currentColor" opacity="0.7" />
        <ellipse cx="75" cy="35" rx="3" ry="8" fill="currentColor" opacity="0.7" />
      </g>

      {/* Ground line */}
      <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* Movement arrows */}
      <g className="animate-bounce-arrows">
        <path
          d="M20 60 L20 55 M17 58 L20 55 L23 58"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M20 70 L20 75 M17 72 L20 75 L23 72"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Strength indicators */}
      <g className="animate-strength-pulse">
        <circle cx="85" cy="20" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="85" cy="20" r="6" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="85" cy="20" r="9" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
      </g>

      {/* Body strength lines */}
      <g className="animate-pulse" style={{ animationDelay: "0.3s" }}>
        <path d="M35 25 L35 20 M32 23 L35 20 L38 23" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M55 25 L55 20 M52 23 L55 20 L58 23" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
    </svg>
  )
}
