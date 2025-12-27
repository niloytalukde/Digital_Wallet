/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMyTransactionQuery } from "@/redux/features/transaction/transaction.api";



const MyTransaction = () => {

    const {data}=useMyTransactionQuery(undefined);
    console.log(data);
    return (
        <div className="space-y-4 p-4">
            <h1 className="text-3xl flex justify-center">My Transactions</h1>

            {data?.map((transaction:any)=>(
                  <div className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 border">
      
      {/* Left - From */}
      <div className="flex-1">
        <p className="text-xs text-gray-500">From</p>
        <p className="font-medium text-gray-800">
          {transaction.from?.ownerEmail}
        </p>
      </div>

      {/* Center - Amount */}
      <div className="flex-1 text-center">
        <p className="text-xs text-gray-500">Amount</p>
        <p className="text-lg font-bold text-green-600">
          ৳ {transaction.amount}
        </p>
      </div>

      {/* Right - To */}
      <div className="flex-1 text-right">
        <p className="text-xs text-gray-500">To</p>
        <p className="font-medium text-gray-800">
          {transaction.to?.ownerEmail}
        </p>
      </div>

    </div>
            ))}
        </div>
    );
};

export default MyTransaction;