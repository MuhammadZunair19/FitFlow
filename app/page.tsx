import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Clock, Target, Users, ArrowRight, Play, Star, Zap, Heart } from "lucide-react"
import Link from "next/link"
import HeroIllustration from "@/components/svgs/hero-illustration"
import StrengthIcon from "@/components/svgs/strength-icon"
import CardioIcon from "@/components/svgs/cardio-icon"
import YogaIcon from "@/components/svgs/yoga-icon"
import BodyweightIcon from "@/components/svgs/bodyweight-icon"
import StatsCard from "@/components/stats-card"
import CalisthenicsIcon from "@/components/svgs/calisthenics-icon"

export default function HomePage() {
  const workoutPlans = [
    {
      id: "strength",
      title: "Strength Training",
      description: "Build muscle and increase power with compound movements",
      duration: "45-60 min",
      difficulty: "Intermediate",
      exercises: 8,
      icon: StrengthIcon,
      color: "bg-gradient-to-br from-red-500 to-red-600",
      stats: { calories: 450, difficulty: 7 },
    },
    {
      id: "cardio",
      title: "HIIT Cardio",
      description: "High-intensity interval training for maximum fat burn",
      duration: "20-30 min",
      difficulty: "Advanced",
      exercises: 6,
      icon: CardioIcon,
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      stats: { calories: 380, difficulty: 9 },
    },
    {
      id: "calisthenics",
      title: "Calisthenics",
      description: "Master bodyweight movements and build functional strength",
      duration: "40-50 min",
      difficulty: "Progressive",
      exercises: 15,
      icon: CalisthenicsIcon,
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      stats: { calories: 400, difficulty: 8 },
    },
    {
      id: "yoga",
      title: "Yoga Flow",
      description: "Improve flexibility and mindfulness with flowing movements",
      duration: "30-45 min",
      difficulty: "Beginner",
      exercises: 12,
      icon: YogaIcon,
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      stats: { calories: 200, difficulty: 4 },
    },
    {
      id: "bodyweight",
      title: "Bodyweight Circuit",
      description: "No equipment needed - use your body as resistance",
      duration: "25-35 min",
      difficulty: "Beginner",
      exercises: 10,
      icon: BodyweightIcon,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      stats: { calories: 320, difficulty: 5 },
    },
  ]

  const features = [
    {
      icon: Target,
      title: "AI-Powered Plans",
      description: "Personalized workouts that adapt to your progress and goals",
      color: "text-purple-600",
    },
    {
      icon: Zap,
      title: "Real-time Tracking",
      description: "Monitor your performance with live metrics and feedback",
      color: "text-yellow-600",
    },
    {
      icon: Heart,
      title: "Health Integration",
      description: "Sync with your favorite fitness apps and wearables",
      color: "text-red-600",
    },
  ]

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Workouts Completed", value: "2M+", icon: Dumbbell },
    { label: "Average Rating", value: "4.9", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Dumbbell className="h-8 w-8 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              FitFlow
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#workouts" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Workouts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Button size="sm" className="shadow-lg hover:shadow-xl transition-shadow">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Fitness Journey
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Experience the future of fitness with AI-powered workouts, real-time form correction, and personalized
                training plans that evolve with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group bg-transparent">
                  Watch Demo
                  <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Why Choose FitFlow?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets personalized fitness to deliver results that matter
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-white to-gray-50 shadow-lg`}
                >
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Plans */}
      <section id="workouts" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Choose Your Path</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expertly crafted workout programs designed to challenge and inspire
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workoutPlans.map((plan, index) => (
              <Card
                key={plan.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className={`h-48 ${plan.color} relative flex items-center justify-center`}>
                    <plan.icon className="w-24 h-24 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="h-4 w-4 text-yellow-300 fill-current" />
                        <span className="text-white text-sm font-medium">{plan.stats.difficulty}/10</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-center text-white/90 text-sm">
                        <span className="flex items-center">
                          <Zap className="h-4 w-4 mr-1" />
                          {plan.stats.calories} cal
                        </span>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {plan.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{plan.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-6">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {plan.duration}
                    </span>
                    <span>{plan.exercises} exercises</span>
                  </div>
                  <Link href={`/workout/${plan.id}`}>
                    <Button className="w-full group-hover:shadow-lg transition-all duration-300">
                      Start Workout
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative">
          <h3 className="text-5xl font-bold mb-6">Ready to Transform?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their lives with FitFlow's revolutionary approach to
            fitness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">FitFlow</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transform your fitness journey with AI-powered workouts and personalized training.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Workouts</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Strength Training
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    HIIT Cardio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Yoga Flow
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bodyweight
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    AI Coaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Progress Tracking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Nutrition Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 FitFlow. All rights reserved. Built with ❤️ for fitness enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
