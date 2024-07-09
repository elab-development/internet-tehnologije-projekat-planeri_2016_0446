import { useEffect, useState } from "react";
import { useUsersService } from "../../service/useUsersService";
import { useAuthService } from "../../service/useAuthService";

export default function ManageUsers() {
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const {
    getUsersRequest,
    updateUserRequest,
    deleteUserRequest,
    getRolesRequest,
  } = useUsersService();

  const { registerRequest } = useAuthService();

  const getUsersData = async () => {
    await getUsersRequest().then((result) => setUsers(result));
  };

  const getRolesData = async () => {
    await getRolesRequest().then((result) => setRoles(result));
  };

  const createUser = async () => {
    await registerRequest({
      name: editUser.name,
      email: editUser.email,
      password: editUser.password,
    })
      .then(alert(`User successfully created: ${editUser.name}`))
      .then(getUsersData())
      .finally(setEditUser({}));
  };

  const updateUser = async () => {
    await updateUserRequest(
      {
        name: editUser.name,
        email: editUser.email,
      },
      editUser.id
    )
      .then(alert(`User successfully updated: ${editUser.name}`))
      .finally(getUsersData());
  };

  const deleteUser = async () => {
    await deleteUserRequest(editUser.id)
      .then(alert(`User successfully deleted: ${editUser.name}`))
      .then(getUsersData())
      .finally(setEditUser({}));
  };

  const selectUser = (user) => {
    setEditUser(user);
  };

  useEffect(() => {
    getUsersData();
    getRolesData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full p-3 gap-y-5">
      <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
        <div className="flex flex-row w-full border pl-2 pr-4">
          <div className="flex w-[10%]">ID</div>
          <div className="flex w-[15%]">Ime</div>
          <div className="flex w-[15%]">Email</div>
        </div>
        <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
          {users.map((user) => (
            <div
              onClick={() => selectUser(user)}
              className={`flex flex-row w-full border pl-2 cursor-pointer ${
                user.id === editUser?.id && "bg-orange-400"
              }`}
            >
              <div className="flex w-[10%]">{user.id}</div>
              <div className="flex w-[15%]">{user.name}</div>
              <div className="flex w-[15%]">{user.email}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
        <div className="flex flex-row w-2/3 h-full gap-x-5">
          <div className="flex flex-col w-full gap-y-5">
            <div className="flex flex-col justify-start items-start">
              <p>Ime</p>
              <input
                onChange={(event) => {
                  setEditUser({
                    ...editUser,
                    name: event.target.value,
                  });
                }}
                value={editUser?.name}
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Email</p>
              <input
                onChange={(event) => {
                  setEditUser({
                    ...editUser,
                    email: event.target.value,
                  });
                }}
                value={editUser?.email}
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Lozinka</p>
              <input
                onChange={(event) => {
                  setEditUser({
                    ...editUser,
                    password: event.target.value,
                  });
                }}
                value={editUser?.password}
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Uloga</p>
              <select
                onChange={(event) => {
                  setEditUser({
                    ...editUser,
                    role: event.target.value,
                  });
                }}
                value={editUser?.role?.name}
                className="w-full"
              >
                {roles.map((role) => (
                  <option>{role.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full gap-y-5">
          <div
            onClick={() => createUser()}
            className="flex w-full h-10 justify-center items-center bg-orange-400 rounded-lg font-bold text-lg cursor-pointer"
          >
            Dodaj
          </div>
          <div
            onClick={() => updateUser()}
            className="flex w-full h-10 justify-center items-center bg-blue-600 rounded-lg font-bold text-lg"
          >
            Izmeni
          </div>
          <div
            onClick={() => deleteUser()}
            className="flex w-full h-10 justify-center items-center bg-red-600 rounded-lg font-bold text-lg"
          >
            Obrisi
          </div>
        </div>
      </div>
    </div>
  );
}
