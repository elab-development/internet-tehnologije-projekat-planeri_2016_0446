export default function TextField({ value, setValue, placeholder }) {
  return (
    <div className="flex flex-col justify-start items-start">
      <p>{placeholder}</p>
      <input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        className="w-full"
      />
    </div>
  );
}
