import React, { useEffect, useState } from "react";

export default function ChildComponent({ getData }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("Child component - getData");
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);

  return (
    <div>
      <p>ChildComponent</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
}
