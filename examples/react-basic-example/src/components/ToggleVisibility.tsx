import { useState, useEffect } from "react";

// ToggleVisibility component to show/hide content based on button click
export const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // **Mounting Effect**
  useEffect(() => {
    console.log(
      "ToggleVisibility component mounted, initial visibility:",
      isVisible,
    );

    // **Unmounting Effect**: Cleans up when the component unmounts
    return () => {
      console.log("ToggleVisibility component unmounted");
    };
  }, []);

  // **Updating Effect**: Runs whenever `isVisible` changes
  useEffect(() => {
    console.log("Visibility updated:", isVisible);
  }, [isVisible]); // Dependency array containing isVisible, runs when `isVisible` changes

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="border">
      <button className="btn btn-primary" onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && <p>This is some content!</p>}
    </div>
  );
};
