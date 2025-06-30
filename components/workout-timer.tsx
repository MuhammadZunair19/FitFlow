"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export default function WorkoutTimer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border">
      <div
        className={`text-2xl font-mono font-bold transition-all duration-300 ${
          isRunning ? "text-primary animate-pulse" : "text-muted-foreground"
        }`}
      >
        {formatTime(time)}
      </div>
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTimer}
          className="transition-all duration-200 hover:scale-105 rounded-full w-10 h-10 p-0"
        >
          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetTimer}
          className="transition-all duration-200 hover:scale-105 rounded-full w-10 h-10 p-0"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
