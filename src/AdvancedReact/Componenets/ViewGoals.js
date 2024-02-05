const ViewGoals = (props) =>
{
    return (
        <>
            <h3>These are the list of goals !</h3>

            <ul>
                { props.allGoals.map( (e) => 
                    <li key={e.goal}>
                        <span>My goal is to {e.goal}, by {e.by}</span>
                    </li>
                ) }
            </ul>
        </>
    )
}

export { ViewGoals };