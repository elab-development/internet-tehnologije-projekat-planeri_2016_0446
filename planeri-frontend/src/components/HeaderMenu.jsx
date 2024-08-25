import { useNavigate } from "react-router";
import HeaderMenuItem from "./HeaderMenuItem";

export default function HeaderMenu({
  selectedMenuItem,
  setSelectedMenuItem,
  isAdmin,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full h-8 bg-[#FFECA1] justify-center items-center gap-x-40 text-black">
      <HeaderMenuItem
        text={"Planeri"}
        selectedMenuItemStyle={
          selectedMenuItem === "Planers" && "bg-orange-400"
        }
        handleClick={() => {
          setSelectedMenuItem("Planers");
          navigate("/planers");
        }}
      />
      <HeaderMenuItem
        text={"Personalizuj"}
        selectedMenuItemStyle={
          selectedMenuItem === "Personalize" && "bg-orange-400"
        }
        handleClick={() => {
          setSelectedMenuItem("Personalize");
          navigate("/personalize");
        }}
      />
      <HeaderMenuItem
        text={"O planerima"}
        selectedMenuItemStyle={selectedMenuItem === "About" && "bg-orange-400"}
        handleClick={() => {
          setSelectedMenuItem("About");
          navigate("/aboutPlanners");
        }}
      />
      {isAdmin && (
        <HeaderMenuItem
          text={"Upravljanje podacima"}
          selectedMenuItemStyle={
            selectedMenuItem === "Manage" && "bg-orange-400"
          }
          handleClick={() => {
            setSelectedMenuItem("Manage");
            navigate("/manage");
          }}
        />
      )}
      <HeaderMenuItem
        text={"Kontakt"}
        selectedMenuItemStyle={
          selectedMenuItem === "Contact" && "bg-orange-400"
        }
        handleClick={() => {
          setSelectedMenuItem("Contact");
          navigate("/contact");
        }}
      />
    </div>
  );
}
