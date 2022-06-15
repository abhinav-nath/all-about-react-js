import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    setName("");
    setGuests([...guests, name]);
  };

  const clear = () => {
    setName("");
    setGuests([]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addGuest}>Add Guest</button>
      <button onClick={clear}>Clear</button>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
