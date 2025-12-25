import { useMyTransactionQuery } from "@/redux/features/transaction/transaction.api";



const MyTransaction = () => {

    const {data}=useMyTransactionQuery(undefined);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default MyTransaction;