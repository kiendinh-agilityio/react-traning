import { StarIcon } from '@/components/common/Icons';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  // Function to create star rating
  const generateStarsRating = (rating: number) =>
    [...Array(5)].map((_, item) => (
      <li key={item}>
        <StarIcon filled={item < rating} />
      </li>
    ));

  return <ul className="flex gap-0.5 justify-center">{generateStarsRating(rating)}</ul>;
};

export default StarRating;
