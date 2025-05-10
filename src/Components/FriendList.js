import Button from "./Button";

export default function FriendList({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  //   const isSelected = false;
  return (
    <li
      style={{
        margin: "10px",
        backgroundColor: `${isSelected ? "gray" : ""}`,
      }}
    >
      <img
        src={friend.image}
        alt={friend.name}
        style={{ borderRadius: "100%" }}
      />
      <h3> {friend.name} </h3>

      {friend.balance < 0 && (
        <p style={{ color: "red" }}>
          You owe {friend.name} ${Math.abs(friend.balance)}{" "}
        </p>
      )}
      {friend.balance > 0 && (
        <p style={{ color: "green" }}>
          {friend.name} owes you ${Math.abs(friend.balance)}{" "}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
