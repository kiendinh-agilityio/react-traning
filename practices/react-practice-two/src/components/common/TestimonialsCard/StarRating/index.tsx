import { StarIcon } from '@/components/common/Icons';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => (
  <ul className="flex gap-0.5 justify-center">
    {[...Array(5)].map((_, index) => (
      <li>
        <StarIcon key={index} filled={index < rating} />
      </li>
    ))}
  </ul>
);

export default StarRating;
