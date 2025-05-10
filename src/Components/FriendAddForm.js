import React, { useState } from "react";
import Button from "./Button";

const FriendAddForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/50");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      balance: 0,
      image: `${image}?=${id}`,
    };
    onAddFriend(newFriend);

    setName("");
    setimage("https://i.pravatar.cc/50");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>👯‍♂️ Friend Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>🌅 Image Url</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
};

export default FriendAddForm;
