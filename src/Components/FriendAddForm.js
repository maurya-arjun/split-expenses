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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            👯‍♂️ Friend Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter friend name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            🌅 Image Url
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter image URL"
          />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
};

export default FriendAddForm;
