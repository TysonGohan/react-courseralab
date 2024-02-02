const RandomGen = () =>
{
    function randomGen() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt("type a number");
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
    }

    return <button onClick={randomGen}> Guess a number between 1 and 3</button>;
}

export { RandomGen };