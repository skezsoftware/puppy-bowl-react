import { useEffect, useState } from "react";
import SinglePlayer from "./SinglePlayer";
import { FetchAllPlayers, AddNewPlayer, DeletePlayer } from "../API";
import DogForm from "./DogForm";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const newPlayers = await FetchAllPlayers();
        setPlayers(newPlayers);
      } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
      }
    })();
  }, [refreshTrigger]);

  const handleAddDog = async (newDog) => {
    try {
      await AddNewPlayer(newDog);
      setRefreshTrigger(!refreshTrigger);
    } catch (error) {
      console.error("Failed to add new dog!", error);
    }
  };

  const handleDeleteDog = async (id) => {
    try {
      await DeletePlayer(id);
      setPlayers(players.filter((player) => player.id !== id));
    } catch (error) {
      console.error("Failed to delete dog!", error);
    }
  };
  const playersToDisplay = () => {
    return(
    searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : players
    )
    }
  return (
    <>
    <div className="searchBarAllPlayers"> 
      <label>
        Search:{" "}
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
        />
      </label>
      </div>
     

      <DogForm onAddDog={handleAddDog} />
      <div className="container">
        {playersToDisplay().map((player) => (
          <SinglePlayer
            player={player}
            key={player.id}
            onDelete={handleDeleteDog}
          />
        ))}
      </div>
    </>
  );
}
