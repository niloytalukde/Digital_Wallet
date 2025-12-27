import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGetReceiverQuery, } from "@/redux/features/Wallet/wallet.api";
import type { IUser } from "@/types";
import toast from "react-hot-toast";
import { useCashInMutation } from "@/redux/features/Agent/api.agent";

export default function CashIn() {
  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const { data: users = [], isFetching } = useGetReceiverQuery(search, {
    skip: search.length < 8 || !!selectedUser,
  });
const [cashIn, { isLoading }] = useCashInMutation();

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedUser) {
      toast.error("Please select a receiver");
      return;
    }

    if (amount <= 0) {
      toast.error("Enter valid amount");
      return;
    }

    const payload = {
      addUserWallet: selectedUser.email || selectedUser.phone,
      amount,
    };

    try {
      await cashIn(payload).unwrap();
      toast.success("Money sent successfully ");

      // reset
      setSearch("");
      setAmount(0);
      setSelectedUser(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data?.message || "Send money failed");
    }
  };

  return (
    <div className="relative max-w-md mx-auto space-y-3">
    <h1 className="text-center text-2xl  font-bold">Cash In To User</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
      
        <Input
          type="text"
          className="py-5"
          placeholder="Enter phone or email"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedUser(null);
          }}
        />

      
        {selectedUser && (
          <div className="text-sm text-muted-foreground">
            Sending to: <b>{selectedUser.name}</b>
          </div>
        )}


        <Input
        className="py-10"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={!selectedUser || amount <= 0 /* || isLoading */}
        >
         
          {isLoading ? "Sending..." : "Send Money"}
        </Button>
      </form>

      {isFetching && (
        <p className="text-xs text-muted-foreground mt-1">
          Searching...
        </p>
      )}

      
      {users.length > 0 && !selectedUser && (
        <Card className="absolute w-full mt-2 z-20 divide-y">
          {users.map((user: IUser) => (
            <div
              key={user._id}
              className="p-3 cursor-pointer hover:bg-muted"
              onClick={() => {
                setSelectedUser(user);
                setSearch(user.phone || user.email || "");
              }}
            >
              <p className="font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">
                {user.phone} · {user.email}
              </p>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
}
