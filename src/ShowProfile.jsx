import { useState } from "react";

const ShowProfile = ({ person }) => {
  const [currentColor, setCurrentColor] = useState(person[0]);

  const ShowProfiler = () => {
    const randomIndex = Math.floor(Math.random() * person.length);

    setCurrentColor(person[randomIndex]);
  };

  return (
    <div>
      <div
        onClick={ShowProfile}
        style={{
          backgroundColor: currentColor,
          height: "100px",
          width: "100px",
        }}
      ></div>
    </div>
  );
};

export default ShowProfile;
