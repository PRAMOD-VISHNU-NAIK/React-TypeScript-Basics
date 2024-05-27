// import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from './components/NewGoal';

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoalType[]>([])

  function handleAddGoal(goal: string, summary: string){
      setGoals( (prevGoal) => {
        const newGoal : CourseGoalType = {
          id: Math.random(),
          title: goal,
          description: summary
        }
        return [...prevGoal, newGoal]
      })
  }

  function handleDeleteGoal(id: number){
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }
  return (
  <main>
    <Header image={{src: goalsImage, alt: 'A List of Goals'}}> <h1>Your Course GOals</h1></Header>
    
    <NewGoal onAddGoal={handleAddGoal}/>
    
    <CourseGoalList goals = {goals} onDeleteGoal={handleDeleteGoal}/>
  </main>
  )
}
