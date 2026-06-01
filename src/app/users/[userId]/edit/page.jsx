import { updateUserData } from "@/lib/actions";
import { getSingleUserById } from "@/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const UpdateUserPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getSingleUserById(userId);

  const updateUserWrapper = async (formData) => {
    "use server"
    return updateUserData(formData, userId);
  };

  return (
    <div>
      <h2>User Details : Name -- {user.name}</h2>

      <div className="w-1/2 mx-auto my-5">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            name="name"
            type="text"
            defaultValue={user?.name}
            variant="secondary"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            type="email"
            defaultValue={user?.email}
            variant="secondary"
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            type="text"
            defaultValue={user?.role}
            variant="secondary"
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>
          <div className="flex gap-5 items-center justify-center">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserPage;
