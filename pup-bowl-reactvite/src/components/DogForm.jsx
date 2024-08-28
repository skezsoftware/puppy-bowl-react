
import { useState } from "react";

function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const newDog = { name, breed, image };

    onAddDog(newDog);

    setName("");
    setBreed("");
    setImage("");
};


return (
  <form id="form" onSubmit={handleSubmit}>
    <div>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label>Breed: </label>
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
    </div>
    <div>
      <label>Image URL: </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
    </div>
    <button className="submitDogFormButton" type="submit">Add Dog</button>
  </form>
);
}

export default DogForm;