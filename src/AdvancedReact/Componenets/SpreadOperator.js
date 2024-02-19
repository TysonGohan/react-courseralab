const Button = ({type, children, ...buttonProps}) =>
{

    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";

    return (
        <button className={ `Button ${className}`} {...buttonProps}>{children}</button>
    )
}

const LoginButton = ({type, children, ...buttonProps}) =>
{
    return (
        <Button type="secondary"
            {...buttonProps}
            onClick = { () => alert("Logging in !")}>{children}</Button>
    )
}


const SpreadOperator = () =>
{
    return (
        <div className="App">
            <Button type="primary" onClick = { () => alert("Sigining in !")}>Sign in </Button>
            <LoginButton type="secondary" onClick = { () => alert("Sigining in !")}>Login in </LoginButton>
        </div>
    )
}

export { SpreadOperator }