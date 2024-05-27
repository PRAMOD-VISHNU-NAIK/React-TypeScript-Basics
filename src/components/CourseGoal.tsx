import { type ReactNode } from "react";

type CourseGoalPros1 = {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

// type CourseGoalPros2 = PropsWithChildren<{title: string}>

function CourseGoal({title, children, id, onDelete}: CourseGoalPros1) {
  return (
    <div>
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    </div>
  )
}

export default CourseGoal