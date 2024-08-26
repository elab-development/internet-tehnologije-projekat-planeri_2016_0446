import { useEffect, useState } from "react";
import { useUsersService } from "../../service/useUsersService";
import { useAuthService } from "../../service/useAuthService";
import TextField from "../reusable/TextField";
import SelectField from "../reusable/SelectField";
import Button from "../reusable/Button";
import { toast } from "react-toastify";

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
    if (
      editUser === null ||
      editUser?.name === "" ||
      editUser?.email === "" ||
      editUser?.password === ""
    ) {
      toast("Popunite sva polja!");
      return;
    }

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
    if (editUser === null || editUser?.name === "" || editUser?.email === "") {
      toast("Popunite sva polja!");
      return;
    }
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
          <div className="flex w-[25%]">Email</div>
          <div className="flex w-[15%]">Role</div>
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
              <div className="flex w-[25%]">{user.email}</div>
              <div className="flex w-[15%]">{user?.role.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
        <div className="flex flex-row w-2/3 h-full gap-x-5">
          <div className="flex flex-col w-full gap-y-5">
            <TextField
              value={editUser?.name}
              setValue={(value) =>
                setEditUser({
                  ...editUser,
                  name: value,
                })
              }
              placeholder={"Ime"}
            />
            <TextField
              value={editUser?.email}
              setValue={(value) =>
                setEditUser({
                  ...editUser,
                  email: value,
                })
              }
              placeholder={"Email"}
            />
            <TextField
              value={editUser?.password}
              setValue={(value) =>
                setEditUser({
                  ...editUser,
                  password: value,
                })
              }
              placeholder={"Lozinka"}
            />
            <SelectField
              value={editUser?.role?.name}
              setValue={(value) =>
                setEditUser({
                  ...editUser,
                  role: value,
                })
              }
              placeholder={"Uloga"}
              options={roles}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full gap-y-5">
          <Button
            text={"Dodaj"}
            handleClick={() => createUser()}
            width={"w-full"}
          />
          <Button
            text={"Izmeni"}
            handleClick={() => updateUser()}
            width={"w-full"}
          />
          <Button
            text={"Obrisi"}
            handleClick={() => deleteUser()}
            width={"w-full"}
          />
        </div>
      </div>
    </div>
  );
}
