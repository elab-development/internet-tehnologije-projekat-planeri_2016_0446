import { useEffect, useState } from "react";
import { usePlanerTypesService } from "../../service/usePlanerTypesService";
import TextField from "../reusable/TextField";
import Button from "../reusable/Button";

export default function ManagePlanerTypes() {
  const [editPlanerType, setEditPlanerType] = useState(null);
  const [planerTypes, setPlanerTypes] = useState([]);

  const {
    getPlanerTypesRequest,
    createPlanerTypeRequest,
    updatePlanerTypeRequest,
    deletePlanerTypeRequest,
  } = usePlanerTypesService();

  const getPlanerTypesData = async () => {
    await getPlanerTypesRequest().then((result) => setPlanerTypes(result));
  };

  const createPlanerType = async () => {
    await createPlanerTypeRequest({
      name: editPlanerType.name,
      price: editPlanerType.price,
    })
      .then(
        alert(
          `Planer type successfully created: ${editPlanerType.name}, ${editPlanerType.price}`
        )
      )
      .then(getPlanerTypesData())
      .finally(setEditPlanerType({}));
  };

  const updatePlanerType = async () => {
    await updatePlanerTypeRequest(
      {
        name: editPlanerType.name,
        price: editPlanerType.price,
      },
      editPlanerType.id
    )
      .then(alert(`Planer type successfully updated: ${editPlanerType.name}`))
      .finally(getPlanerTypesData());
  };

  const deletePlanerType = async () => {
    await deletePlanerTypeRequest(editPlanerType.id)
      .then(alert(`Planer type successfully deleted: ${editPlanerType.name}`))
      .then(getPlanerTypesData())
      .finally(setEditPlanerType({}));
  };

  const selectPlanerType = (planerType) => {
    setEditPlanerType(planerType);
  };

  useEffect(() => {
    getPlanerTypesData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full p-3 gap-y-5">
      <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
        <div className="flex flex-row w-full border pl-2 pr-4">
          <div className="flex w-[10%]">ID</div>
          <div className="flex w-[15%]">Naziv</div>
          <div className="flex w-[15%]">Cena</div>
        </div>
        <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
          {planerTypes.map((planerType) => (
            <div
              onClick={() => selectPlanerType(planerType)}
              className={`flex flex-row w-full border pl-2 cursor-pointer ${
                planerType.id === editPlanerType?.id && "bg-orange-400"
              }`}
            >
              <div className="flex w-[10%]">{planerType.id}</div>
              <div className="flex w-[15%]">{planerType.name}</div>
              <div className="flex w-[15%]">{planerType.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
        <div className="flex flex-row w-2/3 h-full gap-x-5">
          <div className="flex flex-col w-full gap-y-5">
            <TextField
              value={editPlanerType?.name}
              setValue={(value) =>
                setEditPlanerType({
                  ...editPlanerType,
                  name: value,
                })
              }
              placeholder={"Naziv"}
            />
            <TextField
              value={editPlanerType?.price}
              setValue={(value) =>
                setEditPlanerType({
                  ...editPlanerType,
                  price: value,
                })
              }
              placeholder={"Cena"}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full gap-y-5">
          <Button
            text={"Dodaj"}
            handleClick={() => createPlanerType()}
            width={"w-full"}
          />
          <Button
            text={"Izmeni"}
            handleClick={() => updatePlanerType()}
            width={"w-full"}
          />
          <Button
            text={"Obrisi"}
            handleClick={() => deletePlanerType()}
            width={"w-full"}
          />
        </div>
      </div>
    </div>
  );
}
