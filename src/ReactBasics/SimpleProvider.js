import { MealsProvider } from "./Components/MealsProvider";
import { MealsList } from "./Components/MealsList";
import { Counter } from "./Components/Counter";

const SimpleProvider = () =>
{
    return <>
        <MealsProvider>
            <MealsList />
            <Counter />
        </MealsProvider>
    </>
}

export { SimpleProvider };