import { useState } from "react";

const ControlledComps = () =>
{
    const [inputText, setInputText] = useState("");
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const PasswordErrorMessage = () => {
        return (
          <p className="FieldError">Password should have at least 8 characters</p>
        );
      };

    function handleSubmit(e)
    {
        e.preventDefault();
        alert("Form Submitted for " + inputText );
    }

    function handleFeedback(e)
    {
        e.preventDefault();
        alert("Feedback Submitted !" );
    }

    function validateEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return firstName && email && validateEmail(email) && password.isTouched && password.value.length >=8 && ( role === "individual" || role === "business" )
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({ 
            value: "", 
            isTouched: false, 
          });
        setRole("role");
    };

    const handleAccountSubmit = () => {
        alert("Account created!");
        clearForm();
    };

    return <>

        <h2>  Controlled Componenets   </h2>

        <h3> Hello, { inputText } </h3> 

        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={inputText} onChange={ e=> setInputText(e.target.value)} placeholder="Name"/><br/>
                <button disabled={!inputText} type="submit">Submit</button>
            </fieldset>
        </form>


        <h3> Feedback Form</h3>

        <form onSubmit={handleFeedback}>
            <fieldset>
                <h2> My Feedback Form</h2>
                <label htmlFor="score"> Score : {score} </label>
                <input type="range" value={score} onChange={e=>setScore(e.target.value)} id="score" min="1" max="10"/>
                <textarea value={comment} onChange={e=>setComment(e.target.value)}/>
                <button type="submit">Submit Feedback !</button>
            </fieldset>
        </form>

        <h3> Courseera Lab</h3>
        <div className="App">
            <form onSubmit={handleAccountSubmit}>
                <fieldset>
                <h2>Sign Up</h2>
                <div className="Field">
                    <label>
                    First name <sup>*</sup>
                    </label>
                    <input placeholder="First name" value={firstName} onChange={e=> setFirstName(e.target.value)} />
                </div>
                <div className="Field">
                    <label>Last name</label>
                    <input placeholder="Last name" value={lastName} onChange={e=> setLastName(e.target.value)}  />
                </div>
                <div className="Field">
                    <label>
                    Email address <sup>*</sup>
                    </label>
                    <input placeholder="Email address" value={email} onChange={e=> setEmail(e.target.value)}  />
                </div>
                <div className="Field">
                    <label>
                    Password <sup>*</sup>
                    </label>
                    <input placeholder="Password" value={password.value} onBlur={() => { setPassword({ ...password, isTouched: true }); }}   onChange={e => setPassword({ ...password, value: e.target.value })} />
                    { password.isTouched && password.value.length < 8 ? <PasswordErrorMessage/> : null }
                </div>
                <div className="Field">
                    <label>
                    Role <sup>*</sup>
                    </label>
                    <select value={role} onChange={e=> setRole(e.target.value)}>
                    <option value="role">Role</option>
                    <option value="individual">Individual</option>
                    <option value="business">Business</option>
                    </select>
                </div>
                <button type="submit" disabled={!getIsFormValid()}>
                    Create account
                </button>
                </fieldset>
            </form>
        </div>
    </>
}

export { ControlledComps };