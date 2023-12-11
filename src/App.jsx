import { useState } from "react";
import Profile from "./Profile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShowProfile Profile={person} />
    </>
  );
}

export default App;
