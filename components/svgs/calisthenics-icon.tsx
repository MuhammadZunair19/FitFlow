interface CalisthenicsIconProps {
  className?: string
}

export default function CalisthenicsIcon({ className = "w-16 h-16" }: CalisthenicsIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Human flag figure */}
      <g className="animate-human-flag">
        {/* Vertical bar */}
        <rect x="15" y="10" width="4" height="80" rx="2" fill="currentColor" opacity="0.8" />

        {/* Head */}
        <circle cx="35" cy="35" r="6" fill="currentColor" opacity="0.9" />

        {/* Body horizontal */}
        <ellipse cx="50" cy="40" rx="15" ry="4" fill="currentColor" opacity="0.8" />

        {/* Arms gripping bar */}
        <ellipse cx="25" cy="30" rx="3" ry="8" fill="currentColor" opacity="0.7" />
        <ellipse cx="25" cy="45" rx="3" ry="8" fill="currentColor" opacity="0.7" />

        {/* Legs horizontal */}
        <ellipse cx="65" cy="38" rx="3" ry="10" fill="currentColor" opacity="0.7" />
        <ellipse cx="65" cy="42" rx="3" ry="10" fill="currentColor" opacity="0.7" />
      </g>

      {/* Strength indicators */}
      <g className="animate-strength-rings">
        <circle cx="80" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="80" cy="20" r="12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="80" cy="20" r="16" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
      </g>

      {/* Movement lines */}
      <g className="animate-calisthenics-flow">
        <path d="M70 60 Q75 55 80 60 Q85 65 90 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M70 70 Q75 65 80 70 Q85 75 90 70" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M70 80 Q75 75 80 80 Q85 85 90 80" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
      </g>

      {/* Power dots */}
      <circle cx="25" cy="15" r="1.5" fill="currentColor" opacity="0.6" className="animate-ping" />
      <circle
        cx="35"
        cy="15"
        r="1.5"
        fill="currentColor"
        opacity="0.6"
        className="animate-ping"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="45"
        cy="15"
        r="1.5"
        fill="currentColor"
        opacity="0.6"
        className="animate-ping"
        style={{ animationDelay: "1s" }}
      />
    </svg>
  )
}
