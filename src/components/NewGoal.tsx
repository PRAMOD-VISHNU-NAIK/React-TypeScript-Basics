import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}

function NewGoal({onAddGoal}: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const enteredGoal = goal.current!.value;            // Here ! indicates that the value of goal never be null.
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();  // This is to set the textboxes value empty after pressing the add goal button.

        onAddGoal(enteredGoal, enteredSummary);
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal </label>
            <input type="text" id="goal" ref={goal} />
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal