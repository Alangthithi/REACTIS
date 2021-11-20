import React, { useState, useMemo } from "react";

const expensiveFunction = (number) => {
  console.log("ket thuc ms");

  return number * number;
};

export default function UseMemo() {
  console.log("CONPONENT CHA");
  const [count, setCount] = useState(0);

  const number = useMemo(() => expensiveFunction(10), []);

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>number {number}</p>
    </div>
  );
}
