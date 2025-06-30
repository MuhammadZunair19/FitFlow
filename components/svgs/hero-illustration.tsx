export default function HeroIllustration() {
  return (
    <div className="relative w-full h-96 animate-float">
      <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background circles */}
        <circle cx="100" cy="80" r="40" fill="url(#gradient1)" opacity="0.3" className="animate-pulse" />
        <circle
          cx="320"
          cy="200"
          r="30"
          fill="url(#gradient2)"
          opacity="0.4"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="50"
          cy="220"
          r="25"
          fill="url(#gradient3)"
          opacity="0.3"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Main figure */}
        <g className="animate-bounce-gentle">
          {/* Body */}
          <ellipse cx="200" cy="180" rx="25" ry="40" fill="url(#bodyGradient)" />

          {/* Head */}
          <circle cx="200" cy="120" r="20" fill="url(#skinGradient)" />

          {/* Arms */}
          <ellipse cx="170" cy="160" rx="8" ry="25" fill="url(#skinGradient)" transform="rotate(-20 170 160)" />
          <ellipse cx="230" cy="160" rx="8" ry="25" fill="url(#skinGradient)" transform="rotate(20 230 160)" />

          {/* Legs */}
          <ellipse cx="185" cy="230" rx="8" ry="30" fill="url(#skinGradient)" />
          <ellipse cx="215" cy="230" rx="8" ry="30" fill="url(#skinGradient)" />

          {/* Dumbbells */}
          <g className="animate-lift">
            <rect x="145" y="145" width="20" height="6" rx="3" fill="#4F46E5" />
            <circle cx="145" cy="148" r="4" fill="#6366F1" />
            <circle cx="165" cy="148" r="4" fill="#6366F1" />
          </g>

          <g className="animate-lift" style={{ animationDelay: "0.5s" }}>
            <rect x="235" y="145" width="20" height="6" rx="3" fill="#4F46E5" />
            <circle cx="235" cy="148" r="4" fill="#6366F1" />
            <circle cx="255" cy="148" r="4" fill="#6366F1" />
          </g>
        </g>

        {/* Floating elements */}
        <g className="animate-float-slow">
          <path d="M350 50 L360 60 L350 70 L340 60 Z" fill="url(#gradient4)" opacity="0.6" />
        </g>

        <g className="animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <path d="M30 100 L40 110 L30 120 L20 110 Z" fill="url(#gradient5)" opacity="0.6" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#3730A3" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
