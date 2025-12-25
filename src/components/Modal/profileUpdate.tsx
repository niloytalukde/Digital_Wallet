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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateUserMutation } from "@/redux/features/User/api.user";
import type { IUser } from "@/types";

import { useForm } from "react-hook-form";

type ProfileFormValues = {
  name: string;
  email: string;
  phone: string;
};

export function ProfileUpdateModal({ data }: { data: IUser }) {
  const {
    register,
    handleSubmit,
  } = useForm<ProfileFormValues>({
    defaultValues: {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,

    },
  });

  const [update] = useUpdateUserMutation();

const onSubmit = async(formData: ProfileFormValues) => {
  console.log(formData);
  const updateUser = await update({ id: data?._id, data: formData });
console.log(updateUser);
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-5">Update Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Name */}
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input {...register("name", { required: true })} defaultValue={data?.name} />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input {...register("email", { required: true })} defaultValue={data?.email} />
            </div>

            {/* Phone */}
            <div className="grid gap-2">
              <Label>Phone</Label>
              <Input {...register("phone", { required: true })}
              defaultValue={data?.phone}
              
              
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
