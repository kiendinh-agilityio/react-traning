import { getImageUrl } from "../utils";
import { people } from "../data";
import React, { useState, useMemo } from "react";

export const List = () => {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img
        width="80px"
        height="80px"
        src={getImageUrl(person)}
        alt={person.name}
      />
      <li>
        <p>Name: {person.name}</p>
        <p>Profession: {person.profession}</p>
        <p>Accomplishment: {person.accomplishment}</p>
      </li>
    </li>
  ));

  return <ul>{listItems}</ul>;
};

interface Person {
  id: number;
  name: string;
}

export const PersonList: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  const [newPerson, setNewPerson] = useState<string>("");

  const addPerson = () => {
    setPeople([...people, { id: people.length + 1, name: newPerson }]);
    setNewPerson("");
  };

  const peopleCount = useMemo(() => {
    console.log("Calculate the number of people...");
    return people.length;
  }, [people]);

  return (
    <div>
      <h3>Number of people on the list: {peopleCount}</h3>
      <input
        className="input"
        value={newPerson}
        onChange={(e) => setNewPerson(e.target.value)}
        placeholder="New name"
      />
      <button className="btn btn-primary" onClick={addPerson}>
        Add person
      </button>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
