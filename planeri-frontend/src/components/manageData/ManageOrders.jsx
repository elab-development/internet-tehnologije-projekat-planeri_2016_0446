import { useEffect, useState } from "react";
import { useOrdersService } from "../../service/useOrdersService";
import PreviewOrderItems from "./PreviewOrderItems";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "../reusable/TextField";
import SelectField from "../reusable/SelectField";
import Button from "../reusable/Button";

export default function ManageOrders() {
  const [editOrder, setEditOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [showOrderItems, setShowOrderItems] = useState(false);
  const [statuses, setStatuses] = useState([
    { name: "Pending" },
    { name: "In Progress" },
    { name: "Completed" },
  ]);

  const { getOrdersRequest, updateOrderRequest, deleteOrderRequest } =
    useOrdersService();

  const getOrdersData = async () => {
    await getOrdersRequest().then((result) => setOrders(result));
  };

  const updateOrder = async () => {
    await updateOrderRequest(
      {
        price: editOrder.price,
        status: editOrder.status,
      },
      editOrder.id
    )
      .then(alert(`Order successfully updated!`))
      .finally(getOrdersData());
  };

  const deleteOrder = async () => {
    await deleteOrderRequest(editOrder.id)
      .then(alert(`Order successfully deleted!`))
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
      {!showOrderItems ? (
        <>
          <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
            <div className="flex flex-row w-full border pl-2 pr-4">
              <div className="flex w-[10%]">ID</div>
              <div className="flex w-[25%]">Korisnik</div>
              <div className="flex w-[15%]">Cena</div>
              <div className="flex w-[15%]">Status</div>
            </div>
            <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
              {orders?.map((order) => (
                <div
                  onClick={() => selectOrder(order)}
                  className={`flex flex-row w-full border pl-2 cursor-pointer ${
                    order.id === editOrder?.id ? "bg-orange-400" : ""
                  }`}
                >
                  <div className="flex w-[10%]">{order.id}</div>
                  <div className="flex w-[25%]">{order?.user?.email}</div>
                  <div className="flex w-[15%]">{order.price}</div>
                  <div className="flex w-[15%]">{order.status}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
            <div className="flex flex-row w-2/3 h-full gap-x-5">
              <div className="flex flex-col w-full gap-y-5">
                <TextField
                  value={editOrder?.price}
                  setValue={(value) =>
                    setEditOrder({
                      ...editOrder,
                      price: value,
                    })
                  }
                  placeholder={"Price"}
                />
                <SelectField
                  value={editOrder?.status}
                  setValue={(value) =>
                    setEditOrder({
                      ...editOrder,
                      status: value,
                    })
                  }
                  placeholder={"Status"}
                  options={statuses}
                />
              </div>
            </div>
            <div className="flex flex-col w-1/3 h-full gap-y-5">
              <Button
                text={"Pregled"}
                handleClick={() =>
                  editOrder !== null
                    ? setShowOrderItems(!showOrderItems)
                    : toast(`Odaberite neku porudzbinu za pregled!`)
                }
                width={"w-full"}
              />
              <Button
                text={"Izmeni"}
                handleClick={() => updateOrder()}
                width={"w-full"}
              />
              <Button
                text={"Obrisi"}
                handleClick={() => deleteOrder()}
                width={"w-full"}
              />
            </div>
          </div>
        </>
      ) : (
        <PreviewOrderItems
          order={editOrder}
          setShowOrderItems={setShowOrderItems}
        ></PreviewOrderItems>
      )}
    </div>
  );
}
