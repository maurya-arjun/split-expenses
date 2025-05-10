import React from "react";
import FriendList from "./FriendList";

const Friends = ({ friendList, onSelection, selectedFriend }) => {
  const friends = friendList;

  return (
    <ul>
      {friends.map((friend) => (
        <FriendList
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default Friends;
