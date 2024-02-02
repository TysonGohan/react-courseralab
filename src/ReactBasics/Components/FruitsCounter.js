import { useFruitsContext } from "./FruitsApp";

function FruitsCounter() {
  const { fruits } = useFruitsContext();

  return <h2>Total fruits: {fruits.length}</h2>;
}

export default FruitsCounter;
