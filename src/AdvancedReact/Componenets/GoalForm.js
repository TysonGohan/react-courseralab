import { useState } from "react";

const GoalForm = (props) =>
{

    const [formData, setFormData] = useState({ goal: "", by: "" });

    function onChangeHandler(e)
    {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function setNewGoal(e)
    {
        e.preventDefault();
        props.addNewGoal(formData);
        setFormData({goal: "", by: ""});
    }

    return (
        <>
            <form onSubmit={setNewGoal}>
                <fieldset>
                    <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={onChangeHandler}/>
                    <input type="text" name="by" placeholder="by" value={formData.by} onChange={onChangeHandler}/>
                    <button type="submit">Add Goal !</button>
                </fieldset>
            </form>
        </>
    )
}

export { GoalForm };