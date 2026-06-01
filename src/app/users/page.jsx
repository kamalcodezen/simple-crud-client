import { getUsersData } from "@/data/users";
import UsersTable from "../components/UsersTable";

const UsersPage = async () => {
  const users = await getUsersData();
  console.log(users)
  return (
    <div>
      <h2>{users.length}</h2>
      <UsersTable users={users} />
    </div>
  );
};

export default UsersPage;
