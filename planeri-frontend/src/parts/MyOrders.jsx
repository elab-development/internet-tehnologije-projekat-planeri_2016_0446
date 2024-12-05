import { useEffect, useState } from "react";
import { useOrdersService } from "../service/useOrdersService";

export default function MyOrders({ user }) {
  const [userOrders, setUserOrders] = useState([]);
  const { getOrdersForUserRequest } = useOrdersService();

  const getOrdersForUserData = async () => {
    await getOrdersForUserRequest(Number(user?.id)).then((result) =>
      setUserOrders(result)
    );
  };

  useEffect(() => {
    getOrdersForUserData();
  }, [user]);

  return (
    <div className="flex flex-col w-full h-full justify-start items-center">
      <div className="flex flex-col w-1/2 h-full justify-center bg-[#FFECA1] p-2">
        <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
          <div className="flex flex-row w-full border pl-2 pr-4">
            <div className="flex w-[10%]">ID</div>
            <div className="flex w-[45%]">Korisnik</div>
            <div className="flex w-[25%]">Cena</div>
            <div className="flex w-[20%]">Status</div>
          </div>
          <div className="flex flex-col w-full h-[350px] overflow-y-scroll">
            {userOrders.map((order) => (
              <div
                className={`flex flex-row w-full border pl-2 cursor-pointer`}
              >
                <div className="flex w-[10%]">{order.id}</div>
                <div className="flex w-[45%]">{order.user.email}</div>
                <div className="flex w-[25%]">{order.price}</div>
                <div className="flex w-[20%]">{order.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
