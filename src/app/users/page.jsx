import { getUsersData } from "@/lib/data";
import UsersTable from "../components/UsersTable";
import { deleteUserData } from "@/lib/actions";


const UsersPage = async () => {
  const users = await getUsersData();
  console.log(users);
  return (
    <div>
      <h2>{users.length}</h2>
      <UsersTable users={users} deleteUserAction={deleteUserData} />
    </div>
  );
};

export default UsersPage;
