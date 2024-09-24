import { useState, useLayoutEffect, useRef } from "react";

export const MovingBox = () => {
  const [position, setPosition] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      // Update the position of the box after changing the position value
      boxRef.current.style.transform = `translateX(${position}px)`;
    }
  }, [position]); // Rerun when position changes

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightcoral",
          position: "relative",
          transition: "transform 0.3s",
        }}
      >
        Moving Box
      </div>
      <button
        className="btn btn-primary"
        onClick={() => setPosition(position - 50)}
      >
        Move Left
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setPosition(position + 50)}
      >
        Move Right
      </button>
    </div>
  );
};
