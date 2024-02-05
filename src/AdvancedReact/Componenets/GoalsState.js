import { useState } from "react";
import { GoalForm } from "./GoalForm";
import { ViewGoals } from "./ViewGoals";

const GoalsState = () =>
{

    const [ allGoals, setAllGoals] = useState([]);

    function addGoal(goal)
    {
        setAllGoals([...allGoals, goal]);
    }


    return (
        <div style={{padding: '40px'}}>
            <h1> This is a complex way or another way of using state and change handler </h1>

            <h2> My Little Lemon goals</h2>
            <GoalForm addNewGoal={addGoal}/>
            <ViewGoals allGoals={allGoals}/>
        </div>
    )
}

export { GoalsState };