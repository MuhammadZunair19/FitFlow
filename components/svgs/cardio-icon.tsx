interface CardioIconProps {
  className?: string
}

export default function CardioIcon({ className = "w-16 h-16" }: CardioIconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Heart shape */}
      <g className="animate-heartbeat">
        <path
          d="M50 80 C30 65, 10 45, 10 30 C10 20, 20 10, 30 10 C40 10, 50 20, 50 20 C50 20, 60 10, 70 10 C80 10, 90 20, 90 30 C90 45, 70 65, 50 80 Z"
          fill="currentColor"
          opacity="0.9"
        />
      </g>

      {/* Pulse lines */}
      <g className="animate-pulse-line">
        <path
          d="M15 50 L25 50 L30 40 L35 60 L40 30 L45 70 L50 50 L55 30 L60 70 L65 40 L70 60 L75 50 L85 50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />
      </g>

      {/* Energy dots */}
      <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.6" className="animate-ping" />
      <circle
        cx="75"
        cy="25"
        r="2"
        fill="currentColor"
        opacity="0.6"
        className="animate-ping"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="25"
        cy="75"
        r="2"
        fill="currentColor"
        opacity="0.6"
        className="animate-ping"
        style={{ animationDelay: "1s" }}
      />
      <circle
        cx="75"
        cy="75"
        r="2"
        fill="currentColor"
        opacity="0.6"
        className="animate-ping"
        style={{ animationDelay: "1.5s" }}
      />
    </svg>
  )
}
