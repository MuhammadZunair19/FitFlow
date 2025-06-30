"use client"

interface DifficultyMeterProps {
  difficulty: number // 1-10 scale
}

export default function DifficultyMeter({ difficulty }: DifficultyMeterProps) {
  const getDifficultyColor = (level: number) => {
    if (level <= 3) return "text-green-500"
    if (level <= 6) return "text-yellow-500"
    if (level <= 8) return "text-orange-500"
    return "text-red-500"
  }

  const getDifficultyLabel = (level: number) => {
    if (level <= 3) return "Beginner"
    if (level <= 6) return "Intermediate"
    if (level <= 8) return "Advanced"
    return "Expert"
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className={`font-semibold ${getDifficultyColor(difficulty)}`}>{getDifficultyLabel(difficulty)}</span>
        <span className="text-sm text-muted-foreground">{difficulty}/10</span>
      </div>

      <div className="relative">
        <div className="flex space-x-1">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`h-3 flex-1 rounded-full transition-all duration-500 ${
                index < difficulty
                  ? difficulty <= 3
                    ? "bg-green-500"
                    : difficulty <= 6
                      ? "bg-yellow-500"
                      : difficulty <= 8
                        ? "bg-orange-500"
                        : "bg-red-500"
                  : "bg-slate-200"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Easy</span>
        <span>Moderate</span>
        <span>Hard</span>
        <span>Extreme</span>
      </div>
    </div>
  )
}
