import Button from "./Button";

export default function FriendList({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className="flex items-start gap-4 p-4 border rounded-lg shadow-sm my-2">
      <img
        src={friend.image}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold"> {friend.name} </h3>

        {friend.balance < 0 && (
          <p className="text-sm text-red-500">
            You owe {friend.name} ${Math.abs(friend.balance)}{" "}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-sm text-green-500">
            {friend.name} owes you ${Math.abs(friend.balance)}{" "}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}

        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
}
