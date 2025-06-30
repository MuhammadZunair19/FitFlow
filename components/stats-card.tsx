"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  label: string
  value: string
  icon: LucideIcon
  index: number
}

export default function StatsCard({ label, value, icon: Icon, index }: StatsCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`stats-${index}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [index])

  useEffect(() => {
    if (isVisible) {
      const numericValue = Number.parseInt(value.replace(/[^\d]/g, ""))
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  const formatValue = (num: number) => {
    if (value.includes("K")) return `${(num / 1000).toFixed(0)}K+`
    if (value.includes("M")) return `${(num / 1000000).toFixed(1)}M+`
    if (value.includes(".")) return (num / 10).toFixed(1)
    return num.toString()
  }

  return (
    <Card
      id={`stats-${index}`}
      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <CardContent className="p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {isVisible ? formatValue(count) : "0"}
        </div>
        <p className="text-muted-foreground font-medium">{label}</p>
      </CardContent>
    </Card>
  )
}
