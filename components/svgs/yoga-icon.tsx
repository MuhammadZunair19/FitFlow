interface YogaIconProps {
  className?: string
}

export default function YogaIcon({ className = "w-16 h-16" }: YogaIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Yoga pose figure */}
      <g className="animate-gentle-sway">
        {/* Head */}
        <circle cx="50" cy="25" r="8" fill="currentColor" opacity="0.9" />

        {/* Body */}
        <ellipse cx="50" cy="45" rx="6" ry="15" fill="currentColor" opacity="0.8" />

        {/* Arms in meditation pose */}
        <ellipse cx="35" cy="40" rx="3" ry="12" fill="currentColor" opacity="0.7" transform="rotate(-30 35 40)" />
        <ellipse cx="65" cy="40" rx="3" ry="12" fill="currentColor" opacity="0.7" transform="rotate(30 65 40)" />

        {/* Legs in lotus position */}
        <ellipse cx="40" cy="65" rx="4" ry="15" fill="currentColor" opacity="0.7" transform="rotate(-45 40 65)" />
        <ellipse cx="60" cy="65" rx="4" ry="15" fill="currentColor" opacity="0.7" transform="rotate(45 60 65)" />
      </g>

      {/* Meditation aura */}
      <g className="animate-spin-slow">
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          strokeDasharray="5,5"
        />
      </g>

      {/* Energy points */}
      <circle cx="50" cy="25" r="1.5" fill="currentColor" opacity="0.8" className="animate-pulse" />
      <circle
        cx="50"
        cy="35"
        r="1"
        fill="currentColor"
        opacity="0.6"
        className="animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="50"
        cy="45"
        r="1"
        fill="currentColor"
        opacity="0.6"
        className="animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <circle
        cx="50"
        cy="55"
        r="1"
        fill="currentColor"
        opacity="0.6"
        className="animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Lotus petals */}
      <g className="animate-gentle-rotate">
        <path d="M50 80 Q45 75 50 70 Q55 75 50 80" fill="currentColor" opacity="0.4" />
        <path d="M50 80 Q45 75 50 70 Q55 75 50 80" fill="currentColor" opacity="0.4" transform="rotate(60 50 75)" />
        <path d="M50 80 Q45 75 50 70 Q55 75 50 80" fill="currentColor" opacity="0.4" transform="rotate(120 50 75)" />
        <path d="M50 80 Q45 75 50 70 Q55 75 50 80" fill="currentColor" opacity="0.4" transform="rotate(180 50 75)" />
        <path d="M50 80 Q45 75 50 70 Q55 75 50 80" fill="currentColor" opacity="0.4" transform="rotate(240 50 75)" />
        <path d="M50 80 Q45 75 50 70 Q55 75 50 80" fill="currentColor" opacity="0.4" transform="rotate(300 50 75)" />
      </g>
    </svg>
  )
}
