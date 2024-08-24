import Button from "./Button";

export default function PlanerCard({ product, text, handleClick }) {
  return (
    <div className="flex flex-col justify-around items-center float-left bg-[#FFECA1] w-[20%] h-[350px] rounded-xl">
      <div className="flex flex-col w-28 h-28 border border-black justify-center items-center">
        {product.name[0] + product.name[product.name.length - 1]}
      </div>
      <p>{product.name}</p>
      <div className="flex flex-col w-full justify-center">
        <p>{product.size}</p>
        <p>{product.price}</p>
      </div>
      <Button
        text={text}
        handleClick={() => handleClick(product)}
        width={"w-4/5"}
      />
    </div>
  );
}
