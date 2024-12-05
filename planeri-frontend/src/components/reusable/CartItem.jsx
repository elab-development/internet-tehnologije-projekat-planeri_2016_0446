import { FaTrash } from "react-icons/fa";

export default function CartItem({ cartItem, removeCartItem }) {
  return (
    <div className="flex flex-row w-full h-fit gap-x-5 justify-between items-center border border-gray-800 p-1">
      <div className="flex w-10 h-10 justify-center items-center border border-gray-800">
        <p>
          {cartItem?.planerType
            ? cartItem?.planerType?.name[0]
            : cartItem?.name[0]}
        </p>
      </div>
      <div className="flex flex-col">
        <p>{cartItem?.planerType ? cartItem.planerType.name : cartItem.name}</p>
        <p>Price: {cartItem.price}</p>
      </div>
      <div
        onClick={() => removeCartItem(cartItem.id)}
        className="flex flex-col w-10 h-10 items-center justify-center text-lg hover:bg-orange-400 hover:rounded-xl cursor-pointer"
      >
        <FaTrash />
      </div>
    </div>
  );
}
