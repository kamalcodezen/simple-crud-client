import { getSingleUserById } from "@/lib/data";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const singleUser = await getSingleUserById(userId);

  console.log(singleUser, "single");

  return (
    <div>
      <h2>User Name {singleUser.name}</h2>
    </div>
  );
};

export default UserDetailsPage;
