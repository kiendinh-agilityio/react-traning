import { getImageUrl } from "../utils";
import { people } from "../data";

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
