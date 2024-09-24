import { useState } from "react";
import { sculptureList } from "../data";

interface Sculpture {
  name: string;
  artist: string;
  url: string;
  alt: string;
  description: string;
}

export const GalleryState = () => {
  const [index, setIndex] = useState<number>(0);

  const handleClick = (): void => {
    setIndex((index + 1) % sculptureList.length);
  };

  const sculpture: Sculpture = sculptureList[index];

  return (
    <>
      <article className="profile">
        <button className="btn btn-primary" onClick={handleClick}>
          Next
        </button>
        <h2>
          <i>{sculpture.name}</i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <img
          width="100px"
          height="100px"
          src={sculpture.url}
          alt={sculpture.alt}
        />
        <p>{sculpture.description}</p>
      </article>
    </>
  );
};
