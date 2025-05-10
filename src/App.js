import { useState } from "react";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";
import FriendAddForm from "./Components/FriendAddForm";
import Friends from "./Components/Friends";

function App() {
  const [showFriendAddForm, setShowFriendAddForm] = useState(false);
  const [friendList, setFriendList] = useState(initialFriend);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriendFrom() {
    setShowFriendAddForm((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriendList((friends) => [...friends, friend]);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowFriendAddForm(false);
  }

  function handleSplit(value) {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="App" style={{ margin: "10px" }}>
      <Friends
        friendList={friendList}
        onSelection={handleSelection}
        selectedFriend={selectedFriend}
      />

      {showFriendAddForm && (
        <FriendAddForm friendList={friendList} onAddFriend={handleAddFriend} />
      )}

      <Button onClick={handleShowAddFriendFrom}>
        {" "}
        {showFriendAddForm ? "Close" : "Add Friend"}{" "}
      </Button>

      {selectedFriend && (
        <FormSplitBill selectedFriend={selectedFriend} onSplit={handleSplit} />
      )}
    </div>
  );
}

const initialFriend = [
  {
    id: 1,
    name: "Amit Sharma",
    image: "https://i.pravatar.cc/50/1231",
    balance: 50.0,
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "https://i.pravatar.cc/50/1253",
    balance: -25.75,
  },
  {
    id: 3,
    name: "Rahul Verma",
    image: "https://i.pravatar.cc/50/1543",
    balance: 0.0,
  },
  /* {
    id: 4,
    name: "Sneha Gupta",
    image: "https://picsum.photos/50",
    balance: 100.5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    image: "https://picsum.photos/50",
    balance: -10.25,
  }, */
];

export default App;
