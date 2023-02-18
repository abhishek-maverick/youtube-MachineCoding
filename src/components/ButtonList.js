import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Indian Cuisine",
  "Comedy",
  "News",
  "Cricket",
  "Cooking",
  "Valentine",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
