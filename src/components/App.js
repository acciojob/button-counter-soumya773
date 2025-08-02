

import './../styles/App.css';
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

   const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <h1>Button clicked {count} times</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
