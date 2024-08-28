import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePlayer } from "../API";

export default function SinglePlayerPage() {
  const [player, setPlayer] = useState({});
  const { id } = useParams();
  console.log("ID:", id);
  useEffect(() => {
    (async () => {
      try {
        const newPlayer = await FetchSinglePlayer(id);
        setPlayer(newPlayer);
      } catch (error) {
        console.error("Trouble fetching players!", error);
      }
    })();
  }, [id]);


  return (
    <>
    <div className="moreInfoOnDog">
      <div><img src={player.imageUrl} alt={player.breed} /></div>
      <div><strong>Name: {player.name} </strong></div>
      <div>ID: {id}</div>
      <div>Breed: {player.breed}</div>
      <div>Status: {player.status}</div>
    </div>
    </>
  );
}
