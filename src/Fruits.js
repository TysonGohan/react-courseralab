import { useFruitsContext } from "./FruitsApp";

function Fruits() {
  const { fruits } = useFruitsContext();

  return (
    <div>
      {fruits.map((f) => (
        <p key={f.id}>{f.fruitName}</p>
      ))}
    </div>
  );
}

export default Fruits;
