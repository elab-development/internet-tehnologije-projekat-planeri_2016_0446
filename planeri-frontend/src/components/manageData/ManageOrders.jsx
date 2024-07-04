import { useEffect, useState } from "react";
import { useUsersService } from "../../service/useUsersService";
import { useAuthService } from "../../service/useAuthService";
import { useOrdersService } from "../../service/useOrdersService";

export default function ManageOrders() {
  const [editOrder, setEditOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [statuses, setStatuses] = useState([
    "Pending",
    "In Progress",
    "Completed",
  ]);

  const { getOrdersRequest, updateOrderRequest, deleteOrderRequest } =
    useOrdersService();

  const getOrdersData = async () => {
    await getOrdersRequest().then((result) => console.log("orders", orders));
  };

  const updateOrder = async () => {
    await updateOrderRequest(
      {
        price: editOrder.price,
        status: editOrder.status,
      },
      editOrder.id
    )
      .then(alert(`Order successfully updated: ${editOrder.name}`))
      .finally(getOrdersData());
  };

  const deleteOrder = async () => {
    await deleteOrderRequest(editOrder.id)
      .then(alert(`Order successfully deleted: ${editOrder.name}`))
      .then(getOrdersData())
      .finally(setEditOrder({}));
  };

  const selectOrder = (order) => {
    setEditOrder(order);
  };

  useEffect(() => {
    getOrdersData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full p-3 gap-y-5">
      <div className="flex flex-col w-full h-full bg-cyan-600">
        <div className="flex flex-row w-full border pl-2 pr-4">
          <div className="flex w-[10%]">ID</div>
          <div className="flex w-[15%]">User</div>
          <div className="flex w-[15%]">Price</div>
          <div className="flex w-[15%]">Status</div>
        </div>
        <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
          {orders.map((order) => (
            <div
              onClick={() => selectOrder(order)}
              className={`flex flex-row w-full border pl-2 cursor-pointer ${
                order.id === selectOrder?.id ? "bg-orange-400" : ""
              }`}
            >
              <div className="flex w-[10%]">{order.id}</div>
              <div className="flex w-[15%]">{order.user}</div>
              <div className="flex w-[15%]">{order.price}</div>
              <div className="flex w-[15%]">{order.status}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
        <div className="flex flex-row w-2/3 h-full gap-x-5">
          <div className="flex flex-col w-full gap-y-5">
            <div className="flex flex-col justify-start items-start">
              <p>Price</p>
              <input
                onChange={(event) => {
                  setEditOrder({
                    ...editOrder,
                    price: event.target.value,
                  });
                }}
                value={editOrder?.price}
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Status</p>
              <select
                onChange={(event) => {
                  setEditOrder({
                    ...editOrder,
                    status: event.target.value,
                  });
                }}
                value={editOrder?.status}
                className="w-full"
              >
                {statuses.map((stat) => (
                  <option>{stat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full gap-y-5">
          <div
            onClick={() => updateOrder()}
            className="flex w-full h-10 justify-center items-center bg-blue-600 rounded-lg font-bold text-lg"
          >
            Edit
          </div>
          <div
            onClick={() => deleteOrder()}
            className="flex w-full h-10 justify-center items-center bg-red-600 rounded-lg font-bold text-lg"
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}
