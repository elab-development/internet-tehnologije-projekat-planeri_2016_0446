export default function SelectField({ value, setValue, placeholder, options }) {
  return (
    <div className="flex flex-col justify-start items-start">
      <p>{placeholder}</p>
      <select
        onChange={(event) => setValue(event.target.value)}
        value={value}
        className="w-full"
      >
        {options.map((opt) => (
          <option>{opt?.name ? opt.name : opt}</option>
        ))}
      </select>
    </div>
  );
}
