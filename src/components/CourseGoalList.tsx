import CourseGoal from "./CourseGoal";
import {type CourseGoalType} from '../App'
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalList = {
    goals : CourseGoalType[];
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalList) {

  if (goals.length === 0){
    return (
      <InfoBox mode="hint" >You have no course goals! Start adding some.</InfoBox>
    )
  }

  let warningBox: ReactNode;

  if ( goals.length >= 4){
    warningBox = <InfoBox mode="warning" >You're reached the Limit!</InfoBox>
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title = {goal.title} id={goal.id} onDelete = {onDeleteGoal}>{goal.description}</CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}
