export default function Button({ text, handleClick, width }) {
  return (
    <div
      onClick={handleClick}
      className={`flex ${width} h-10 justify-center items-center bg-orange-400 rounded-lg text-white cursor-pointer`}
    >
      {text}
    </div>
  );
}
