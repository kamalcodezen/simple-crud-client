import { getUsersData } from "@/lib/data";
import UsersTable from "../components/UsersTable";
import { addUserdata, deleteUserData } from "@/lib/actions";
import AddUserModal from "../components/AddUserModal";

const UsersPage = async () => {
  const users = await getUsersData();
  console.log(users);
  return (
    <div className="w-10/12 mx-auto space-y-4 py-5">
      <div className="flex justify-between items-center">
        <h2>{users.length}</h2>
        <AddUserModal actionAddUser={addUserdata} />
      </div>
      <UsersTable users={users} deleteUserAction={deleteUserData} />
    </div>
  );
};

export default UsersPage;
