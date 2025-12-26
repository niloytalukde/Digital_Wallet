import { Button } from "@/components/ui/button";
import { Link } from "react-router";



const Approval = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4"> 
            <h1 className="text-green-600 text-6xl">Wait For Admin Approval </h1>
            <Link to="/">
            <Button className="">Go to Home</Button>
            </Link>
        </div>
    );
};

export default Approval;