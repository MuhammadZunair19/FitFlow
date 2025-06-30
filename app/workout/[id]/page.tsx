import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Play, Clock, Target, Zap } from "lucide-react"
import Link from "next/link"
import ExerciseCard from "@/components/exercise-card"
import WorkoutTimer from "@/components/workout-timer"
import DifficultyMeter from "@/components/difficulty-meter"

interface WorkoutPageProps {
  params: {
    id: string
  }
}

export default function WorkoutPage({ params }: WorkoutPageProps) {
  const workoutData = {
    strength: {
      title: "Strength Training",
      description: "Build muscle and increase power with compound movements",
      duration: "45-60 min",
      difficulty: 7,
      calories: 450,
      exercises: [
        {
          id: 1,
          name: "Barbell Squat",
          sets: 4,
          reps: "8-10",
          rest: "2-3 min",
          instructions:
            "Keep your core tight and descend until thighs are parallel to the floor. Drive through your heels to return to starting position.",
          targetMuscles: ["Quadriceps", "Glutes", "Core"],
          svg: "squat",
        },
        {
          id: 2,
          name: "Deadlift",
          sets: 4,
          reps: "6-8",
          rest: "3 min",
          instructions:
            "Keep the bar close to your body and drive through your heels. Maintain a neutral spine throughout the movement.",
          targetMuscles: ["Hamstrings", "Glutes", "Back"],
          svg: "deadlift",
        },
        {
          id: 3,
          name: "Bench Press",
          sets: 4,
          reps: "8-10",
          rest: "2-3 min",
          instructions:
            "Lower the bar to your chest with control and press up explosively. Keep your feet planted on the ground.",
          targetMuscles: ["Chest", "Shoulders", "Triceps"],
          svg: "bench",
        },
        {
          id: 4,
          name: "Pull-ups",
          sets: 3,
          reps: "6-12",
          rest: "2 min",
          instructions: "Pull your chin over the bar with control. Focus on engaging your lats and avoid swinging.",
          targetMuscles: ["Lats", "Biceps", "Rhomboids"],
          svg: "pullup",
        },
      ],
    },
    cardio: {
      title: "HIIT Cardio",
      description: "High-intensity interval training for maximum fat burn",
      duration: "20-30 min",
      difficulty: 9,
      calories: 380,
      exercises: [
        {
          id: 1,
          name: "Burpees",
          sets: 4,
          reps: "30 sec",
          rest: "30 sec",
          instructions:
            "Jump down to plank, do a push-up, jump back up with arms overhead. Maintain proper form throughout.",
          targetMuscles: ["Full Body", "Cardio"],
          svg: "burpee",
        },
        {
          id: 2,
          name: "Mountain Climbers",
          sets: 4,
          reps: "30 sec",
          rest: "30 sec",
          instructions:
            "Keep your core tight and alternate bringing knees to chest. Maintain plank position throughout.",
          targetMuscles: ["Core", "Shoulders", "Cardio"],
          svg: "mountain-climber",
        },
        {
          id: 3,
          name: "Jump Squats",
          sets: 4,
          reps: "30 sec",
          rest: "30 sec",
          instructions: "Squat down and explode up into a jump. Land softly and immediately go into the next rep.",
          targetMuscles: ["Legs", "Glutes", "Cardio"],
          svg: "jump-squat",
        },
      ],
    },
    yoga: {
      title: "Yoga Flow",
      description: "Improve flexibility and mindfulness with flowing movements",
      duration: "30-45 min",
      difficulty: 4,
      calories: 200,
      exercises: [
        {
          id: 1,
          name: "Downward Dog",
          sets: 1,
          reps: "Hold 60 sec",
          rest: "15 sec",
          instructions:
            "Form an inverted V-shape with your body. Keep your hands shoulder-width apart and feet hip-width apart.",
          targetMuscles: ["Shoulders", "Hamstrings", "Calves"],
          svg: "downward-dog",
        },
        {
          id: 2,
          name: "Warrior I",
          sets: 2,
          reps: "Hold 45 sec each side",
          rest: "15 sec",
          instructions:
            "Step one foot forward into a lunge, raise arms overhead. Keep your front knee over your ankle.",
          targetMuscles: ["Legs", "Core", "Shoulders"],
          svg: "warrior",
        },
        {
          id: 3,
          name: "Tree Pose",
          sets: 2,
          reps: "Hold 30 sec each side",
          rest: "10 sec",
          instructions:
            "Balance on one foot, place the other foot on your inner thigh. Bring hands to prayer position.",
          targetMuscles: ["Core", "Legs", "Balance"],
          svg: "tree-pose",
        },
      ],
    },
    bodyweight: {
      title: "Bodyweight Circuit",
      description: "No equipment needed - use your body as resistance",
      duration: "25-35 min",
      difficulty: 5,
      calories: 320,
      exercises: [
        {
          id: 1,
          name: "Push-ups",
          sets: 3,
          reps: "10-15",
          rest: "60 sec",
          instructions:
            "Keep your body in a straight line from head to heels. Lower your chest to the ground and push back up.",
          targetMuscles: ["Chest", "Shoulders", "Triceps"],
          svg: "pushup",
        },
        {
          id: 2,
          name: "Bodyweight Squats",
          sets: 3,
          reps: "15-20",
          rest: "60 sec",
          instructions:
            "Lower your hips back and down as if sitting in a chair. Keep your chest up and knees behind toes.",
          targetMuscles: ["Quadriceps", "Glutes", "Core"],
          svg: "bodyweight-squat",
        },
        {
          id: 3,
          name: "Plank",
          sets: 3,
          reps: "Hold 30-60 sec",
          rest: "60 sec",
          instructions: "Hold a straight line from head to heels. Keep your core engaged and avoid sagging hips.",
          targetMuscles: ["Core", "Shoulders", "Back"],
          svg: "plank",
        },
      ],
    },
    calisthenics: {
      title: "Calisthenics Mastery",
      description: "Master bodyweight movements and build functional strength",
      duration: "40-50 min",
      difficulty: 8,
      calories: 400,
      exercises: [
        {
          id: 1,
          name: "Pull-ups",
          sets: 4,
          reps: "6-12",
          rest: "2 min",
          instructions:
            "Hang from the bar with arms fully extended. Pull your body up until your chin clears the bar. Lower with control.",
          targetMuscles: ["Lats", "Biceps", "Rhomboids", "Rear Delts"],
          svg: "pullup",
        },
        {
          id: 2,
          name: "Dips",
          sets: 4,
          reps: "8-15",
          rest: "90 sec",
          instructions:
            "Support your body on parallel bars. Lower your body by bending your arms, then push back up to starting position.",
          targetMuscles: ["Triceps", "Chest", "Front Delts"],
          svg: "dips",
        },
        {
          id: 3,
          name: "Pistol Squats",
          sets: 3,
          reps: "5-10 each leg",
          rest: "2 min",
          instructions:
            "Stand on one leg, extend the other leg forward. Lower your body into a squat on one leg, then return to standing.",
          targetMuscles: ["Quadriceps", "Glutes", "Core", "Balance"],
          svg: "pistol-squat",
        },
        {
          id: 4,
          name: "Handstand Push-ups",
          sets: 3,
          reps: "3-8",
          rest: "2-3 min",
          instructions:
            "Kick up into a handstand against a wall. Lower your head toward the ground, then press back up.",
          targetMuscles: ["Shoulders", "Triceps", "Core"],
          svg: "handstand-pushup",
        },
        {
          id: 5,
          name: "Muscle-ups",
          sets: 3,
          reps: "3-6",
          rest: "3 min",
          instructions:
            "Hang from the bar, pull up explosively and transition over the bar. Lower with control back to hanging position.",
          targetMuscles: ["Lats", "Biceps", "Triceps", "Core"],
          svg: "muscle-up",
        },
        {
          id: 6,
          name: "L-Sits",
          sets: 4,
          reps: "Hold 15-30 sec",
          rest: "90 sec",
          instructions:
            "Support your body on parallel bars or floor. Lift your legs straight out in front to form an 'L' shape.",
          targetMuscles: ["Core", "Hip Flexors", "Shoulders"],
          svg: "l-sit",
        },
        {
          id: 7,
          name: "Archer Push-ups",
          sets: 3,
          reps: "5-8 each side",
          rest: "2 min",
          instructions: "Start in push-up position with arms wide. Lower to one side, keeping the other arm straight.",
          targetMuscles: ["Chest", "Triceps", "Shoulders", "Core"],
          svg: "archer-pushup",
        },
        {
          id: 8,
          name: "Human Flag",
          sets: 3,
          reps: "Hold 5-15 sec",
          rest: "2-3 min",
          instructions:
            "Grip a vertical pole with both hands. Lift your body horizontally, keeping it straight and parallel to the ground.",
          targetMuscles: ["Core", "Lats", "Shoulders", "Obliques"],
          svg: "human-flag",
        },
        {
          id: 9,
          name: "Front Lever",
          sets: 3,
          reps: "Hold 5-20 sec",
          rest: "2-3 min",
          instructions:
            "Hang from the bar and lift your body to horizontal position, keeping your body straight and parallel to the ground.",
          targetMuscles: ["Lats", "Core", "Rear Delts", "Biceps"],
          svg: "front-lever",
        },
        {
          id: 10,
          name: "Planche",
          sets: 3,
          reps: "Hold 5-15 sec",
          rest: "2-3 min",
          instructions:
            "Support your body on your hands with arms straight. Keep your body horizontal and parallel to the ground.",
          targetMuscles: ["Shoulders", "Core", "Triceps", "Wrists"],
          svg: "planche",
        },
        {
          id: 11,
          name: "Dragon Flag",
          sets: 3,
          reps: "5-10",
          rest: "2 min",
          instructions:
            "Lie on bench, grip behind your head. Lift your entire body up, keeping it straight, then lower with control.",
          targetMuscles: ["Core", "Hip Flexors", "Lats"],
          svg: "dragon-flag",
        },
        {
          id: 12,
          name: "Hanging Leg Raises",
          sets: 4,
          reps: "10-15",
          rest: "90 sec",
          instructions:
            "Hang from the bar with arms extended. Raise your legs up to 90 degrees, then lower with control.",
          targetMuscles: ["Core", "Hip Flexors", "Forearms"],
          svg: "hanging-leg-raise",
        },
        {
          id: 13,
          name: "Pike Push-ups",
          sets: 4,
          reps: "8-12",
          rest: "90 sec",
          instructions: "Start in downward dog position. Lower your head toward the ground, then press back up.",
          targetMuscles: ["Shoulders", "Triceps", "Upper Chest"],
          svg: "pike-pushup",
        },
        {
          id: 14,
          name: "Calf Raises",
          sets: 4,
          reps: "15-25",
          rest: "60 sec",
          instructions: "Stand on your toes, raise your heels as high as possible, then lower slowly back down.",
          targetMuscles: ["Calves", "Ankles"],
          svg: "calf-raise",
        },
        {
          id: 15,
          name: "Wall Handstand",
          sets: 3,
          reps: "Hold 30-60 sec",
          rest: "2 min",
          instructions: "Kick up into a handstand against the wall. Keep your body straight and hold the position.",
          targetMuscles: ["Shoulders", "Core", "Forearms", "Balance"],
          svg: "wall-handstand",
        },
      ],
    },
  }

  const workout = workoutData[params.id as keyof typeof workoutData] || workoutData.strength

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity group">
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Workouts</span>
          </Link>
          <WorkoutTimer />
        </div>
      </header>

      {/* Workout Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-white via-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {workout.title}
              </h1>
              <p className="text-muted-foreground text-xl mb-6 leading-relaxed">{workout.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="flex items-center px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  {workout.duration}
                </Badge>
                <Badge variant="outline" className="flex items-center px-4 py-2 text-sm">
                  <Target className="h-4 w-4 mr-2" />
                  {workout.exercises.length} exercises
                </Badge>
                <Badge variant="outline" className="flex items-center px-4 py-2 text-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  {workout.calories} calories
                </Badge>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm mb-3">
                  <span className="font-medium">Workout Progress</span>
                  <span className="text-muted-foreground">0/{workout.exercises.length} completed</span>
                </div>
                <Progress value={0} className="h-3 bg-slate-200" />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-0">
                <h3 className="font-semibold mb-4">Difficulty Level</h3>
                <DifficultyMeter difficulty={workout.difficulty} />

                <Button size="lg" className="w-full mt-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Workout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Exercise Routine</h2>
          <div className="space-y-8">
            {workout.exercises.map((exercise, index) => (
              <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
