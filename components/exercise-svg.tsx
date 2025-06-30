interface ExerciseSVGProps {
  type: string
  isActive?: boolean
  className?: string
}

export default function ExerciseSVG({ type, isActive = false, className = "w-32 h-32" }: ExerciseSVGProps) {
  const getExerciseSVG = () => {
    switch (type) {
      case "squat":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-squat" : ""}>
              {/* Head */}
              <circle cx="100" cy="40" r="15" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="80" rx="12" ry="25" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="80" cy="75" rx="6" ry="20" fill="#FFA726" transform="rotate(-20 80 75)" />
              <ellipse cx="120" cy="75" rx="6" ry="20" fill="#FFA726" transform="rotate(20 120 75)" />
              {/* Thighs */}
              <ellipse cx="90" cy="120" rx="8" ry="25" fill="#FFA726" />
              <ellipse cx="110" cy="120" rx="8" ry="25" fill="#FFA726" />
              {/* Calves */}
              <ellipse cx="90" cy="160" rx="6" ry="20" fill="#FFA726" />
              <ellipse cx="110" cy="160" rx="6" ry="20" fill="#FFA726" />
            </g>
            {/* Motion lines */}
            {isActive && (
              <g className="animate-pulse">
                <path d="M70 140 Q75 135 80 140" stroke="#42A5F5" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M120 140 Q125 135 130 140" stroke="#42A5F5" strokeWidth="2" fill="none" opacity="0.6" />
              </g>
            )}
          </svg>
        )

      case "deadlift":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-deadlift" : ""}>
              {/* Head */}
              <circle cx="100" cy="50" r="15" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="12" ry="30" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="85" cy="85" rx="6" ry="25" fill="#FFA726" transform="rotate(-10 85 85)" />
              <ellipse cx="115" cy="85" rx="6" ry="25" fill="#FFA726" transform="rotate(10 115 85)" />
              {/* Legs */}
              <ellipse cx="90" cy="140" rx="8" ry="30" fill="#FFA726" />
              <ellipse cx="110" cy="140" rx="8" ry="30" fill="#FFA726" />
              {/* Barbell */}
              <rect x="70" y="120" width="60" height="4" rx="2" fill="#424242" />
              <rect x="65" y="115" width="8" height="14" rx="2" fill="#424242" />
              <rect x="127" y="115" width="8" height="14" rx="2" fill="#424242" />
            </g>
          </svg>
        )

      case "bench":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Bench */}
            <rect x="50" y="120" width="100" height="15" rx="5" fill="#8D6E63" />
            <rect x="60" y="135" width="10" height="20" fill="#8D6E63" />
            <rect x="130" y="135" width="10" height="20" fill="#8D6E63" />

            <g className={isActive ? "animate-bench-press" : ""}>
              {/* Head */}
              <circle cx="80" cy="100" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="120" rx="25" ry="10" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="90" cy="105" rx="6" ry="15" fill="#FFA726" transform="rotate(-45 90 105)" />
              <ellipse cx="110" cy="105" rx="6" ry="15" fill="#FFA726" transform="rotate(45 110 105)" />
              {/* Barbell */}
              <rect x="70" y="85" width="60" height="4" rx="2" fill="#424242" />
              <rect x="65" y="80" width="8" height="14" rx="2" fill="#424242" />
              <rect x="127" y="80" width="8" height="14" rx="2" fill="#424242" />
            </g>
          </svg>
        )

      case "pullup":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Pull-up bar */}
            <rect x="50" y="30" width="100" height="6" rx="3" fill="#424242" />

            <g className={isActive ? "animate-pullup" : ""}>
              {/* Head */}
              <circle cx="100" cy="60" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="100" rx="10" ry="25" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="85" cy="70" rx="5" ry="20" fill="#FFA726" transform="rotate(-15 85 70)" />
              <ellipse cx="115" cy="70" rx="5" ry="20" fill="#FFA726" transform="rotate(15 115 70)" />
              {/* Legs */}
              <ellipse cx="95" cy="140" rx="6" ry="25" fill="#FFA726" />
              <ellipse cx="105" cy="140" rx="6" ry="25" fill="#FFA726" />
            </g>
          </svg>
        )

      case "burpee":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-burpee" : ""}>
              {/* Head */}
              <circle cx="100" cy="50" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="10" ry="25" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="80" cy="85" rx="5" ry="20" fill="#FFA726" transform="rotate(-30 80 85)" />
              <ellipse cx="120" cy="85" rx="5" ry="20" fill="#FFA726" transform="rotate(30 120 85)" />
              {/* Legs */}
              <ellipse cx="90" cy="130" rx="6" ry="25" fill="#FFA726" />
              <ellipse cx="110" cy="130" rx="6" ry="25" fill="#FFA726" />
            </g>
            {/* Motion blur effect */}
            {isActive && (
              <g className="animate-pulse" opacity="0.5">
                <ellipse cx="100" cy="90" rx="12" ry="27" fill="#42A5F5" />
              </g>
            )}
          </svg>
        )

      case "mountain-climber":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-mountain-climber" : ""}>
              {/* Head */}
              <circle cx="60" cy="80" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="25" ry="8" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="50" cy="95" rx="5" ry="15" fill="#FFA726" />
              <ellipse cx="70" cy="95" rx="5" ry="15" fill="#FFA726" />
              {/* Legs */}
              <ellipse cx="120" cy="85" rx="6" ry="20" fill="#FFA726" transform="rotate(-30 120 85)" />
              <ellipse cx="140" cy="100" rx="6" ry="20" fill="#FFA726" transform="rotate(30 140 100)" />
            </g>
          </svg>
        )

      case "jump-squat":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-jump-squat" : ""}>
              {/* Head */}
              <circle cx="100" cy="40" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="75" rx="10" ry="20" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="85" cy="70" rx="5" ry="18" fill="#FFA726" transform="rotate(-20 85 70)" />
              <ellipse cx="115" cy="70" rx="5" ry="18" fill="#FFA726" transform="rotate(20 115 70)" />
              {/* Legs */}
              <ellipse cx="90" cy="110" rx="6" ry="20" fill="#FFA726" />
              <ellipse cx="110" cy="110" rx="6" ry="20" fill="#FFA726" />
            </g>
            {/* Jump effect */}
            {isActive && (
              <g className="animate-bounce">
                <path d="M80 140 Q85 135 90 140" stroke="#42A5F5" strokeWidth="2" fill="none" />
                <path d="M110 140 Q115 135 120 140" stroke="#42A5F5" strokeWidth="2" fill="none" />
              </g>
            )}
          </svg>
        )

      case "pushup":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-pushup" : ""}>
              {/* Head */}
              <circle cx="50" cy="80" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="30" ry="8" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="40" cy="95" rx="5" ry="15" fill="#FFA726" />
              <ellipse cx="60" cy="95" rx="5" ry="15" fill="#FFA726" />
              {/* Legs */}
              <ellipse cx="130" cy="90" rx="6" ry="15" fill="#FFA726" />
              <ellipse cx="150" cy="90" rx="6" ry="15" fill="#FFA726" />
            </g>
            {/* Ground line */}
            <line x1="20" y1="110" x2="180" y2="110" stroke="#E0E0E0" strokeWidth="2" />
          </svg>
        )

      case "bodyweight-squat":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-squat" : ""}>
              {/* Head */}
              <circle cx="100" cy="45" r="15" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="85" rx="12" ry="25" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="80" cy="80" rx="6" ry="20" fill="#FFA726" transform="rotate(-30 80 80)" />
              <ellipse cx="120" cy="80" rx="6" ry="20" fill="#FFA726" transform="rotate(30 120 80)" />
              {/* Legs */}
              <ellipse cx="90" cy="125" rx="8" ry="25" fill="#FFA726" />
              <ellipse cx="110" cy="125" rx="8" ry="25" fill="#FFA726" />
            </g>
          </svg>
        )

      case "plank":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-plank-hold" : ""}>
              {/* Head */}
              <circle cx="50" cy="85" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="95" rx="35" ry="8" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="40" cy="100" rx="5" ry="12" fill="#FFA726" />
              <ellipse cx="60" cy="100" rx="5" ry="12" fill="#FFA726" />
              {/* Legs */}
              <ellipse cx="140" cy="95" rx="6" ry="12" fill="#FFA726" />
              <ellipse cx="160" cy="95" rx="6" ry="12" fill="#FFA726" />
            </g>
            {/* Stability lines */}
            {isActive && (
              <g className="animate-pulse" opacity="0.6">
                <line x1="100" y1="85" x2="100" y2="105" stroke="#42A5F5" strokeWidth="1" />
              </g>
            )}
          </svg>
        )

      case "downward-dog":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-yoga-flow" : ""}>
              {/* Head */}
              <circle cx="70" cy="120" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="100" rx="20" ry="8" fill="#66BB6A" transform="rotate(-30 100 100)" />
              {/* Arms */}
              <ellipse cx="60" cy="130" rx="5" ry="20" fill="#FFA726" transform="rotate(-45 60 130)" />
              <ellipse cx="80" cy="130" rx="5" ry="20" fill="#FFA726" transform="rotate(-45 80 130)" />
              {/* Legs */}
              <ellipse cx="120" cy="80" rx="6" ry="25" fill="#FFA726" transform="rotate(-60 120 80)" />
              <ellipse cx="140" cy="70" rx="6" ry="25" fill="#FFA726" transform="rotate(-60 140 70)" />
            </g>
          </svg>
        )

      case "warrior":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-warrior-flow" : ""}>
              {/* Head */}
              <circle cx="100" cy="50" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="10" ry="25" fill="#66BB6A" />
              {/* Arms raised */}
              <ellipse cx="85" cy="70" rx="5" ry="20" fill="#FFA726" transform="rotate(-45 85 70)" />
              <ellipse cx="115" cy="70" rx="5" ry="20" fill="#FFA726" transform="rotate(45 115 70)" />
              {/* Legs in lunge */}
              <ellipse cx="90" cy="130" rx="6" ry="25" fill="#FFA726" />
              <ellipse cx="120" cy="140" rx="6" ry="20" fill="#FFA726" transform="rotate(30 120 140)" />
            </g>
          </svg>
        )

      case "tree-pose":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-balance-sway" : ""}>
              {/* Head */}
              <circle cx="100" cy="50" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="10" ry="25" fill="#66BB6A" />
              {/* Arms in prayer */}
              <ellipse cx="90" cy="75" rx="4" ry="15" fill="#FFA726" transform="rotate(-10 90 75)" />
              <ellipse cx="110" cy="75" rx="4" ry="15" fill="#FFA726" transform="rotate(10 110 75)" />
              {/* Standing leg */}
              <ellipse cx="100" cy="140" rx="6" ry="30" fill="#FFA726" />
              {/* Bent leg */}
              <ellipse cx="85" cy="120" rx="5" ry="15" fill="#FFA726" transform="rotate(-45 85 120)" />
            </g>
            {/* Balance indicator */}
            {isActive && <circle cx="100" cy="170" r="3" fill="#66BB6A" opacity="0.6" className="animate-pulse" />}
          </svg>
        )

      case "dips":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Parallel bars */}
            <rect x="60" y="80" width="80" height="6" rx="3" fill="#8D6E63" />
            <rect x="60" y="80" width="6" height="40" fill="#8D6E63" />
            <rect x="134" y="80" width="6" height="40" fill="#8D6E63" />

            <g className={isActive ? "animate-dips" : ""}>
              {/* Head */}
              <circle cx="100" cy="60" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="10" ry="20" fill="#42A5F5" />
              {/* Arms on bars */}
              <ellipse cx="80" cy="85" rx="5" ry="12" fill="#FFA726" />
              <ellipse cx="120" cy="85" rx="5" ry="12" fill="#FFA726" />
              {/* Legs */}
              <ellipse cx="95" cy="125" rx="6" ry="20" fill="#FFA726" />
              <ellipse cx="105" cy="125" rx="6" ry="20" fill="#FFA726" />
            </g>
          </svg>
        )

      case "pistol-squat":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-pistol-squat" : ""}>
              {/* Head */}
              <circle cx="100" cy="50" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="85" rx="10" ry="20" fill="#42A5F5" />
              {/* Arms for balance */}
              <ellipse cx="80" cy="80" rx="5" ry="18" fill="#FFA726" transform="rotate(-30 80 80)" />
              <ellipse cx="120" cy="80" rx="5" ry="18" fill="#FFA726" transform="rotate(30 120 80)" />
              {/* Standing leg */}
              <ellipse cx="100" cy="130" rx="8" ry="25" fill="#FFA726" />
              {/* Extended leg */}
              <ellipse cx="130" cy="100" rx="6" ry="20" fill="#FFA726" transform="rotate(45 130 100)" />
            </g>
            {/* Balance indicator */}
            {isActive && <circle cx="100" cy="170" r="3" fill="#42A5F5" opacity="0.6" className="animate-pulse" />}
          </svg>
        )

      case "handstand-pushup":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Wall */}
            <rect x="20" y="20" width="6" height="160" fill="#E0E0E0" />

            <g className={isActive ? "animate-handstand-pushup" : ""}>
              {/* Head */}
              <circle cx="50" cy="160" r="12" fill="#FFA726" />
              {/* Body inverted */}
              <ellipse cx="70" cy="120" rx="10" ry="25" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="45" cy="175" rx="5" ry="15" fill="#FFA726" />
              <ellipse cx="65" cy="175" rx="5" ry="15" fill="#FFA726" />
              {/* Legs up */}
              <ellipse cx="85" cy="80" rx="6" ry="20" fill="#FFA726" />
              <ellipse cx="95" cy="80" rx="6" ry="20" fill="#FFA726" />
            </g>
          </svg>
        )

      case "muscle-up":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Pull-up bar */}
            <rect x="50" y="40" width="100" height="6" rx="3" fill="#424242" />

            <g className={isActive ? "animate-muscle-up" : ""}>
              {/* Head */}
              <circle cx="100" cy="70" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="100" rx="10" ry="20" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="85" cy="80" rx="5" ry="18" fill="#FFA726" transform="rotate(-20 85 80)" />
              <ellipse cx="115" cy="80" rx="5" ry="18" fill="#FFA726" transform="rotate(20 115 80)" />
              {/* Legs */}
              <ellipse cx="95" cy="135" rx="6" ry="20" fill="#FFA726" />
              <ellipse cx="105" cy="135" rx="6" ry="20" fill="#FFA726" />
            </g>
            {/* Explosive motion lines */}
            {isActive && (
              <g className="animate-pulse">
                <path d="M70 60 L80 50" stroke="#42A5F5" strokeWidth="2" opacity="0.6" />
                <path d="M130 60 L120 50" stroke="#42A5F5" strokeWidth="2" opacity="0.6" />
              </g>
            )}
          </svg>
        )

      case "l-sit":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Parallel bars or ground */}
            <rect x="60" y="120" width="80" height="4" rx="2" fill="#8D6E63" />

            <g className={isActive ? "animate-l-sit" : ""}>
              {/* Head */}
              <circle cx="100" cy="80" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="105" rx="10" ry="15" fill="#42A5F5" />
              {/* Arms supporting */}
              <ellipse cx="85" cy="115" rx="5" ry="12" fill="#FFA726" />
              <ellipse cx="115" cy="115" rx="5" ry="12" fill="#FFA726" />
              {/* Legs extended horizontally */}
              <ellipse cx="130" cy="110" rx="20" ry="6" fill="#FFA726" />
            </g>
            {/* Core strength indicator */}
            {isActive && (
              <g className="animate-pulse">
                <circle cx="100" cy="105" r="15" stroke="#42A5F5" strokeWidth="1" fill="none" opacity="0.4" />
              </g>
            )}
          </svg>
        )

      case "archer-pushup":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-archer-pushup" : ""}>
              {/* Head */}
              <circle cx="70" cy="90" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="100" rx="25" ry="8" fill="#42A5F5" />
              {/* Bent arm */}
              <ellipse cx="60" cy="105" rx="5" ry="12" fill="#FFA726" />
              {/* Straight arm */}
              <ellipse cx="140" cy="100" rx="5" ry="20" fill="#FFA726" transform="rotate(15 140 100)" />
              {/* Legs */}
              <ellipse cx="120" cy="100" rx="6" ry="15" fill="#FFA726" />
              <ellipse cx="135" cy="100" rx="6" ry="15" fill="#FFA726" />
            </g>
            {/* Asymmetric strength lines */}
            {isActive && (
              <g className="animate-pulse">
                <path d="M50 80 L60 70" stroke="#42A5F5" strokeWidth="2" opacity="0.6" />
                <path d="M150 90 L160 80" stroke="#42A5F5" strokeWidth="1" opacity="0.4" />
              </g>
            )}
          </svg>
        )

      case "human-flag":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Vertical pole */}
            <rect x="40" y="20" width="6" height="160" rx="3" fill="#424242" />

            <g className={isActive ? "animate-human-flag" : ""}>
              {/* Head */}
              <circle cx="70" cy="80" r="10" fill="#FFA726" />
              {/* Body horizontal */}
              <ellipse cx="100" cy="85" rx="20" ry="6" fill="#42A5F5" />
              {/* Arms gripping pole */}
              <ellipse cx="50" cy="70" rx="4" ry="10" fill="#FFA726" />
              <ellipse cx="50" cy="95" rx="4" ry="10" fill="#FFA726" />
              {/* Legs horizontal */}
              <ellipse cx="130" cy="82" rx="4" ry="12" fill="#FFA726" />
              <ellipse cx="130" cy="88" rx="4" ry="12" fill="#FFA726" />
            </g>
            {/* Strength aura */}
            {isActive && (
              <g className="animate-pulse">
                <ellipse cx="100" cy="85" rx="25" ry="10" stroke="#42A5F5" strokeWidth="1" fill="none" opacity="0.3" />
                <ellipse cx="100" cy="85" rx="30" ry="12" stroke="#42A5F5" strokeWidth="1" fill="none" opacity="0.2" />
              </g>
            )}
          </svg>
        )

      case "front-lever":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Pull-up bar */}
            <rect x="50" y="40" width="100" height="6" rx="3" fill="#424242" />

            <g className={isActive ? "animate-front-lever" : ""}>
              {/* Head */}
              <circle cx="130" cy="80" r="10" fill="#FFA726" />
              {/* Body horizontal */}
              <ellipse cx="100" cy="85" rx="20" ry="6" fill="#42A5F5" />
              {/* Arms gripping bar */}
              <ellipse cx="80" cy="55" rx="4" ry="15" fill="#FFA726" />
              <ellipse cx="95" cy="55" rx="4" ry="15" fill="#FFA726" />
              {/* Legs horizontal */}
              <ellipse cx="125" cy="82" rx="4" ry="12" fill="#FFA726" />
              <ellipse cx="125" cy="88" rx="4" ry="12" fill="#FFA726" />
            </g>
            {/* Control lines */}
            {isActive && (
              <g className="animate-pulse">
                <line x1="87" y1="46" x2="100" y2="79" stroke="#42A5F5" strokeWidth="1" opacity="0.4" />
                <line x1="87" y1="46" x2="125" y2="85" stroke="#42A5F5" strokeWidth="1" opacity="0.4" />
              </g>
            )}
          </svg>
        )

      case "planche":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-planche" : ""}>
              {/* Head */}
              <circle cx="70" cy="80" r="10" fill="#FFA726" />
              {/* Body horizontal */}
              <ellipse cx="100" cy="85" rx="20" ry="6" fill="#42A5F5" />
              {/* Arms supporting */}
              <ellipse cx="75" cy="95" rx="4" ry="12" fill="#FFA726" />
              <ellipse cx="85" cy="95" rx="4" ry="12" fill="#FFA726" />
              {/* Legs horizontal */}
              <ellipse cx="125" cy="82" rx="4" ry="12" fill="#FFA726" />
              <ellipse cx="125" cy="88" rx="4" ry="12" fill="#FFA726" />
            </g>
            {/* Ground reference */}
            <line x1="50" y1="110" x2="150" y2="110" stroke="#E0E0E0" strokeWidth="2" />
            {/* Balance point */}
            {isActive && <circle cx="80" cy="107" r="2" fill="#42A5F5" opacity="0.6" className="animate-pulse" />}
          </svg>
        )

      case "dragon-flag":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Bench */}
            <rect x="40" y="60" width="80" height="12" rx="6" fill="#8D6E63" />

            <g className={isActive ? "animate-dragon-flag" : ""}>
              {/* Head at bench */}
              <circle cx="60" cy="50" r="8" fill="#FFA726" />
              {/* Body angled up */}
              <ellipse cx="90" cy="80" rx="6" ry="25" fill="#42A5F5" transform="rotate(45 90 80)" />
              {/* Arms gripping bench */}
              <ellipse cx="50" cy="65" rx="4" ry="8" fill="#FFA726" />
              <ellipse cx="70" cy="65" rx="4" ry="8" fill="#FFA726" />
              {/* Legs extended */}
              <ellipse cx="110" cy="100" rx="5" ry="20" fill="#FFA726" transform="rotate(45 110 100)" />
              <ellipse cx="120" cy="110" rx="5" ry="20" fill="#FFA726" transform="rotate(45 120 110)" />
            </g>
            {/* Core power lines */}
            {isActive && (
              <g className="animate-pulse">
                <path d="M60 55 Q90 70 120 100" stroke="#42A5F5" strokeWidth="2" fill="none" opacity="0.5" />
              </g>
            )}
          </svg>
        )

      case "hanging-leg-raise":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Pull-up bar */}
            <rect x="50" y="30" width="100" height="6" rx="3" fill="#424242" />

            <g className={isActive ? "animate-hanging-leg-raise" : ""}>
              {/* Head */}
              <circle cx="100" cy="60" r="10" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="8" ry="20" fill="#42A5F5" />
              {/* Arms hanging */}
              <ellipse cx="90" cy="50" rx="4" ry="15" fill="#FFA726" />
              <ellipse cx="110" cy="50" rx="4" ry="15" fill="#FFA726" />
              {/* Legs raising */}
              <ellipse cx="95" cy="130" rx="5" ry="18" fill="#FFA726" transform="rotate(-30 95 130)" />
              <ellipse cx="105" cy="130" rx="5" ry="18" fill="#FFA726" transform="rotate(-30 105 130)" />
            </g>
          </svg>
        )

      case "pike-pushup":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-pike-pushup" : ""}>
              {/* Head */}
              <circle cx="80" cy="120" r="10" fill="#FFA726" />
              {/* Body in pike position */}
              <ellipse cx="100" cy="100" rx="8" ry="20" fill="#42A5F5" transform="rotate(-45 100 100)" />
              {/* Arms */}
              <ellipse cx="70" cy="130" rx="4" ry="12" fill="#FFA726" />
              <ellipse cx="90" cy="130" rx="4" ry="12" fill="#FFA726" />
              {/* Legs angled */}
              <ellipse cx="120" cy="80" rx="5" ry="20" fill="#FFA726" transform="rotate(-60 120 80)" />
              <ellipse cx="130" cy="70" rx="5" ry="20" fill="#FFA726" transform="rotate(-60 130 70)" />
            </g>
            {/* Ground line */}
            <line x1="50" y1="140" x2="150" y2="140" stroke="#E0E0E0" strokeWidth="2" />
          </svg>
        )

      case "calf-raise":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <g className={isActive ? "animate-calf-raise" : ""}>
              {/* Head */}
              <circle cx="100" cy="50" r="12" fill="#FFA726" />
              {/* Body */}
              <ellipse cx="100" cy="90" rx="10" ry="25" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="85" cy="85" rx="5" ry="18" fill="#FFA726" />
              <ellipse cx="115" cy="85" rx="5" ry="18" fill="#FFA726" />
              {/* Legs on toes */}
              <ellipse cx="95" cy="130" rx="6" ry="20" fill="#FFA726" />
              <ellipse cx="105" cy="130" rx="6" ry="20" fill="#FFA726" />
              {/* Feet on toes */}
              <ellipse cx="95" cy="155" rx="3" ry="8" fill="#FFA726" />
              <ellipse cx="105" cy="155" rx="3" ry="8" fill="#FFA726" />
            </g>
            {/* Ground line */}
            <line x1="70" y1="165" x2="130" y2="165" stroke="#E0E0E0" strokeWidth="2" />
            {/* Elevation indicator */}
            {isActive && (
              <g className="animate-bounce">
                <path d="M90 170 L95 165 L100 170" stroke="#42A5F5" strokeWidth="2" fill="none" />
                <path d="M100 170 L105 165 L110 170" stroke="#42A5F5" strokeWidth="2" fill="none" />
              </g>
            )}
          </svg>
        )

      case "wall-handstand":
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Wall */}
            <rect x="20" y="20" width="8" height="160" fill="#E0E0E0" />

            <g className={isActive ? "animate-wall-handstand" : ""}>
              {/* Head */}
              <circle cx="55" cy="160" r="12" fill="#FFA726" />
              {/* Body inverted */}
              <ellipse cx="75" cy="120" rx="10" ry="25" fill="#42A5F5" />
              {/* Arms */}
              <ellipse cx="50" cy="175" rx="5" ry="15" fill="#FFA726" />
              <ellipse cx="70" cy="175" rx="5" ry="15" fill="#FFA726" />
              {/* Legs against wall */}
              <ellipse cx="90" cy="80" rx="6" ry="20" fill="#FFA726" />
              <ellipse cx="100" cy="80" rx="6" ry="20" fill="#FFA726" />
            </g>
            {/* Balance lines */}
            {isActive && (
              <g className="animate-pulse">
                <line x1="60" y1="175" x2="75" y2="120" stroke="#42A5F5" strokeWidth="1" opacity="0.4" />
                <line x1="75" y1="120" x2="95" y2="80" stroke="#42A5F5" strokeWidth="1" opacity="0.4" />
              </g>
            )}
          </svg>
        )

      default:
        return (
          <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="50" fill="#E0E0E0" />
            <text x="100" y="105" textAnchor="middle" fill="#757575" fontSize="12">
              Exercise
            </text>
          </svg>
        )
    }
  }

  return getExerciseSVG()
}
