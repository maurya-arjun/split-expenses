import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplit }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const friendExpenses = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplit(whoIsPaying === "user" ? friendExpenses : -paidByUser);
  }

  return (
    <div className="p-6 max-w-md bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Split a bill with {selectedFriend.name}
        </h2>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            💰 Bill value
          </label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter bill amount"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            🧍 Your expense
          </label>
          <input
            type="number"
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your expense"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            👯 {selectedFriend.name}'s expense
          </label>
          <input
            type="number"
            disabled
            value={friendExpenses}
            className="w-full p-2 border rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            🤑 Who is paying the bill?
          </label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
          >
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>
        </div>

        <Button>Split Bill</Button>
      </form>
    </div>
  );
};

export default FormSplitBill;
