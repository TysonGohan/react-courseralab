import { cloneElement, Children } from "react"
import { RadioGroup, RadioOption } from "./Radio"
import { useState } from "react"

const Row = ({ children, spacing }) =>
{
    const childStyle = {
        marginLeft : `${spacing}px`,
    }

    return (
        <div className="Row">
            {Children.map(children, (child, index) =>
                {
                    return cloneElement(child, {
                        style:{
                            ...child.props.style,
                            ...( index > 0 ? childStyle : {} )
                        }
                    })
                })}
        </div>
    )
}


const CloneElement = () =>
{

    const [selected, setSelected] = useState("");

    return (
        <>
            <h1> This is a sample on how to use cloneElement functionality</h1>
            <h2> This is used by parents to modiy children properties, add to children properties, extend functionality children properties</h2>
            <Row spacing={32}>
                <p>Chole Batura</p>
                <p>2</p>
                <p>150</p>
                <p>18.30</p>
                <p>Tyson</p>
            </Row>

            <div className="App">
                <h2>How did you hear about Little Lemon?</h2>
                <RadioGroup onChange={setSelected} selected={selected}>
                    <RadioOption value="social_media">Social Media</RadioOption>
                    <RadioOption value="friends">Friends</RadioOption>
                    <RadioOption value="advertising">Advertising</RadioOption>
                    <RadioOption value="other">Other</RadioOption>
                </RadioGroup>
                <button disabled={!selected}>Submit</button>`
            </div>
        </>
    )
}

export { CloneElement }