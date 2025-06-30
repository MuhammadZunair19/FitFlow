"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Check, Info, Timer } from "lucide-react"
import ExerciseSVG from "./exercise-svg"

interface Exercise {
  id: number
  name: string
  sets: number
  reps: string
  rest: string
  instructions: string
  targetMuscles: string[]
  svg: string
}

interface ExerciseCardProps {
  exercise: Exercise
  index: number
}

export default function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  const [isActive, setIsActive] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)
  const [currentSet, setCurrentSet] = useState(1)

  return (
    <Card
      className={`transition-all duration-500 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm ${
        isActive ? "ring-2 ring-primary shadow-2xl scale-[1.02]" : ""
      } ${isCompleted ? "bg-green-50/80 ring-2 ring-green-200" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                      ? "bg-primary text-white animate-pulse"
                      : "bg-primary/10 text-primary"
                }`}
              >
                {isCompleted ? <Check className="h-5 w-5" /> : index + 1}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  {exercise.name}
                  {isActive && (
                    <div className="flex items-center text-sm text-primary">
                      <Timer className="h-4 w-4 mr-1" />
                      Set {currentSet}/{exercise.sets}
                    </div>
                  )}
                </div>
                <CardDescription className="mt-1 text-base">
                  {exercise.sets} sets × {exercise.reps} • Rest: {exercise.rest}
                </CardDescription>
              </div>
            </CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowInstructions(!showInstructions)}
            className="shrink-0 hover:bg-primary/10"
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Exercise Animation */}
          <div className="relative group">
            <div
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 transition-all duration-700 ${
                isActive ? "shadow-xl ring-2 ring-primary/20" : "group-hover:shadow-lg"
              }`}
            >
              <ExerciseSVG type={exercise.svg} isActive={isActive} className="w-full h-48" />

              {/* Status overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 rounded-2xl ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    {isActive ? (
                      <div className="flex items-center animate-pulse">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                        <span className="text-sm font-medium">Active</span>
                      </div>
                    ) : isCompleted ? (
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm font-medium">Completed</span>
                      </div>
                    ) : (
                      <span className="text-sm">Ready to start</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating action button */}
              <Button
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 shadow-xl transition-all duration-300 ${
                  isActive ? "scale-110 animate-pulse" : "scale-0 group-hover:scale-100"
                }`}
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Exercise Details */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg">Target Muscles</h4>
              <div className="flex flex-wrap gap-2">
                {exercise.targetMuscles.map((muscle, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="animate-fade-in px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {muscle}
                  </Badge>
                ))}
              </div>
            </div>

            {showInstructions && (
              <div className="animate-slide-down bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold mb-3 text-lg flex items-center">
                  <Info className="h-5 w-5 mr-2 text-primary" />
                  Instructions
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{exercise.instructions}</p>
              </div>
            )}

            {isActive && (
              <div className="animate-slide-down bg-primary/5 rounded-xl p-4 border border-primary/20">
                <h4 className="font-semibold mb-3 text-lg text-primary">Current Set Progress</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">
                    Set {currentSet} of {exercise.sets}
                  </span>
                  <span className="text-sm text-muted-foreground">{exercise.reps}</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {[...Array(exercise.sets)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                        idx < currentSet - 1
                          ? "bg-green-500"
                          : idx === currentSet - 1
                            ? "bg-primary animate-pulse"
                            : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setCurrentSet(Math.min(currentSet + 1, exercise.sets))}
                  className="w-full"
                  disabled={currentSet >= exercise.sets}
                >
                  Complete Set {currentSet}
                </Button>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                variant={isActive ? "default" : "outline"}
                onClick={() => setIsActive(!isActive)}
                className="flex-1 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isActive ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Pause Exercise
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start Exercise
                  </>
                )}
              </Button>
              <Button
                variant={isCompleted ? "default" : "outline"}
                onClick={() => setIsCompleted(!isCompleted)}
                className={`transition-all duration-300 shadow-md hover:shadow-lg ${
                  isCompleted ? "bg-green-600 hover:bg-green-700 text-white" : ""
                }`}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
