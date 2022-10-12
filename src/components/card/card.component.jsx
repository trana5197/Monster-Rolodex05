import "./card.styles.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`${name} monster`}
      />
      <div className="monster-desc">
        <h2 className="secondary-heading">{name}</h2>
        <p className="email">{email}</p>
      </div>
    </div>
  );
};

export default Card;
