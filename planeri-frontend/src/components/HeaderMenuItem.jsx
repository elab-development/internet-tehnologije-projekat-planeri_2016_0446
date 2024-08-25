export default function HeaderMenuItem({
  text,
  selectedMenuItemStyle,
  handleClick,
}) {
  return (
    <p
      className={`cursor-pointer hover:bg-orange-400 ${selectedMenuItemStyle} p-1 rounded-lg`}
      onClick={() => handleClick()}
    >
      {text}
    </p>
  );
}
