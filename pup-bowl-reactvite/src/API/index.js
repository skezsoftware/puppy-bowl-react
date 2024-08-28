const cohortName = "2407-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function FetchAllPlayers() {

  const response = await fetch(`${API_URL}/players`);
  const data = await response.json();
  return data.data.players;
}

export async function FetchSinglePlayer(id) {

  const response = await fetch(`${API_URL}/players/${id}`);
  const data = await response.json();
  return data.data.player;
}

export async function AddNewPlayer(player) {
  const response = await fetch(`${API_URL}/players`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  });
  const data = await response.json();
  return data.data.player;
}

export async function DeletePlayer(id) {
  const response = await fetch(`${API_URL}/players/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete player');
  }
}
