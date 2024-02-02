import { Card } from "./Components/Card";

const SimpleProps = () =>
{
    return <>
        <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h3" h3="First card's h3"></Card>
        <Card h2="Second card's h3" h3="Second card's h3"></Card>
        <Card h2="Third card's h3" h3="Third card's h3"></Card>
    </>
}

export { SimpleProps };