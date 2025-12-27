import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApprovedAgentMutation,} from "@/redux/features/User/api.user";
import { useForm } from "react-hook-form";

type AgentStatus = "pending" | "approved" | "rejected";

type StatusFormValues = {
  status: AgentStatus;
};

type Props = {
  data: {
    _id: string;
    status: AgentStatus;
  };
};

export function ApprovedAgent({ data }: Props) {
  const { handleSubmit, setValue } = useForm<StatusFormValues>({
    defaultValues: {
      status: data.status,
    },
  });

  const [updateStatus, { isLoading }] = useApprovedAgentMutation();

  const onSubmit = async (formData: StatusFormValues) => {
    console.log(formData.status);
    try {
      await updateStatus({
        id: data._id,
        agentStatus: formData.status
      }).unwrap();

      console.log("Agent status updated successfully");
    } catch (error) {
      console.error("Agent status update failed", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-5">Update Agent Status</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Update Agent Status</DialogTitle>
            <DialogDescription>
              Approve, reject or keep agent pending
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Status</Label>

              <Select
                defaultValue={data.status}
                onValueChange={(value) =>
                  setValue("status", value as AgentStatus)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
