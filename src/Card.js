const Card = (props) => {
  return (
    <div>
      <h2 className="card">{props.h2}</h2>
      <h3 className="card">{props.h3}</h3>
    </div>
  );
};

export { Card };
