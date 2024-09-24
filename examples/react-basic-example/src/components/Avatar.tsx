import { Person, getImageUrl } from '../utils';

interface AvatarProps {
  person: Person;
  size: number;
}

export const Avatar = ({ person, size }: AvatarProps) => {
  return (
    <img
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};
