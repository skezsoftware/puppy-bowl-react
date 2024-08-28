import { Link } from "react-router-dom";

export default function SinglePlayer({ player, onDelete }) {
  return (
    <div className="player">
      <h1>{player.name}</h1>
      <h2>ID: {player.id}</h2>
      <img src={player.imageUrl} alt={player.breed} />

      <div className="playerCardButtonsContainer">
        <div className="playerCardButtons">
          <Link to={`/singleplayers/${player.id}`}>
            <button className="dogFormButton">See details</button>
          </Link>
          <button className="dogFormButton" onClick={() => onDelete(player.id)}>
            Remove player
          </button>
        </div>
      </div>
    </div>
  );
}
