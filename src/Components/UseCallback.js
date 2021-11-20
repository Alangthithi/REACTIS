import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function UseCallback() {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };
  return (
    <>
      <p>data</p>
      <button onClick={handleClick}>GET DATA USER - DATA CHA</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
}
