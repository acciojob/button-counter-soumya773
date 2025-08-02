

import './../styles/App.css';
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

   const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
