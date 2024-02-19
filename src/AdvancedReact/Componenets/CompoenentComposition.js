
const Button = ({ children, backgroundColor}) =>
{
    return <button type="button" style= {{ backgroundColor }}>{children}</button>
}

const Alert = ({children}) =>
{
    return (
        <>
            <div className="Overlay"/>
            <div className="Alert">{children}</div>
        </>
    )
}


const ComponenetComposition = () =>
{
    return (
        <div className="App">
            <header> Little Lemon </header>
            <Alert>
                Are you sure, you want to delete the account
                <Button backgroundColor="red">Delete</Button>
            </Alert>
        </div>
    )
}

export { ComponenetComposition }