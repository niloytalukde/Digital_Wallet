
import { ApprovedAgent } from "@/components/Modal/ApprovedAgent";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {useGetAllAgentQuery } from "@/redux/features/User/api.user";

import type { IUser } from "@/types";

function AllAgents() {
  const { data, isLoading } = useGetAllAgentQuery(undefined);
  const users: IUser[] = data

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="flex justify-center text-4xl text-primary mb-6">
        All Agent 
      </h1>

      <Table>
        <TableCaption>All registered Agent</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Agent Approval</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user: IUser) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.isApproved}</TableCell>
              <TableCell className="text-right">
             <ApprovedAgent data={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              Total Users: {users.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default AllAgents;
