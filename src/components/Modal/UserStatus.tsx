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
import { useUpdateUserStatusMutation } from "@/redux/features/User/api.user";
import { useForm } from "react-hook-form";

type StatusFormValues = {
  status: "active" | "blocked" | "unblocked";
};

type Props = {
  data: {
    _id: string;
    status: "active" | "blocked" | "unblocked";
  };
};

export function UserStatus({ data }: Props) {
  const { handleSubmit, setValue } = useForm<StatusFormValues>({
    defaultValues: {
      status: data.status,
    },
  });

  const [update, { isLoading }] = useUpdateUserStatusMutation();

  const onSubmit = async (formData: StatusFormValues) => {
    try {
      await update({
        id: data._id,
        data: { status: formData.status }, // ✅ FIXED
      }).unwrap();

      console.log("Status updated successfully");
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-5">Update Status</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Update User Status</DialogTitle>
            <DialogDescription>
              Change user account status
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Status</Label>

              <Select
                defaultValue={data.status}
                onValueChange={(value) =>
                  setValue(
                    "status",
                    value as "active" | "blocked" | "unblocked"
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                  <SelectItem value="unblocked">Unblocked</SelectItem>
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
