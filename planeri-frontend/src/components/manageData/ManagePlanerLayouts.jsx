import { useEffect, useState } from "react";
import { usePlanerLayoutsService } from "../../service/usePlanerLayoutsService";
import { usePlanerTypesService } from "../../service/usePlanerTypesService";
import TextField from "../reusable/TextField";
import SelectField from "../reusable/SelectField";
import Button from "../reusable/Button";

export default function ManagePlanerLayouts() {
  const [editPlanerLayout, setEditPlanerLayout] = useState(null);
  const [planerLayouts, setPlanerLayouts] = useState([]);
  const [planerTypes, setPlanerTypes] = useState([]);

  const {
    getPlanerLayoutsRequest,
    createPlanerLayoutRequest,
    updatePlanerLayoutRequest,
    deletePlanerLayoutRequest,
  } = usePlanerLayoutsService();

  const { getPlanerTypesRequest } = usePlanerTypesService();

  const getPlanerLayoutsData = async () => {
    await getPlanerLayoutsRequest().then((result) => setPlanerLayouts(result));
  };

  const getPlanerTypesData = async () => {
    await getPlanerTypesRequest().then((result) => setPlanerTypes(result));
  };

  const createPlanerLayout = async () => {
    await createPlanerLayoutRequest({
      name: editPlanerLayout?.name,
      image: editPlanerLayout?.name,
      price: editPlanerLayout?.price,
      planer_type_id: parseInt(editPlanerLayout.planer_type_id),
    })
      .then(
        alert(
          `Planer layout successfully created: ${editPlanerLayout.name}, ${editPlanerLayout.price}`
        )
      )
      .then(getPlanerLayoutsData())
      .finally(setEditPlanerLayout({}));
  };

  const updatePlanerLayout = async () => {
    await updatePlanerLayoutRequest(
      {
        name: editPlanerLayout.name,
        price: editPlanerLayout.price,
        planer_type_id: editPlanerLayout.planer_type.id,
      },
      editPlanerLayout.id
    )
      .then(
        alert(`Planer layout successfully updated: ${editPlanerLayout.name}`)
      )
      .finally(getPlanerLayoutsData());
  };

  const deletePlanerLayout = async () => {
    await deletePlanerLayoutRequest(editPlanerLayout.id)
      .then(
        alert(`Planer layout successfully deleted: ${editPlanerLayout.name}`)
      )
      .then(getPlanerLayoutsData())
      .finally(setEditPlanerLayout({}));
  };

  const selectPlanerLayout = (planerLayout) => {
    setEditPlanerLayout(planerLayout);
  };

  useEffect(() => {
    getPlanerLayoutsData();
    getPlanerTypesData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full p-3 gap-y-5">
      <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
        <div className="flex flex-row w-full border pl-2 pr-4">
          <div className="flex w-[10%]">ID</div>
          <div className="flex w-[20%]">Naziv</div>
          <div className="flex w-[15%]">Cena</div>
          <div className="flex w-[15%]">Tip planera</div>
        </div>
        <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
          {planerLayouts.map((planerLayout) => (
            <div
              onClick={() => selectPlanerLayout(planerLayout)}
              className={`flex flex-row w-full border pl-2 cursor-pointer ${
                planerLayout.id === editPlanerLayout?.id && "bg-orange-400"
              }`}
            >
              <div className="flex w-[10%]">{planerLayout.id}</div>
              <div className="flex w-[20%]">{planerLayout.name}</div>
              <div className="flex w-[15%]">{planerLayout.price}</div>
              <div className="flex w-[15%]">
                {planerLayout.planer_type.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
        <div className="flex flex-row w-2/3 h-full gap-x-5">
          <div className="flex flex-col w-full gap-y-5">
            <TextField
              value={editPlanerLayout?.name}
              setValue={(value) =>
                setEditPlanerLayout({
                  ...editPlanerLayout,
                  name: value,
                })
              }
              placeholder={"Naziv"}
            />
            <TextField
              value={editPlanerLayout?.price}
              setValue={(value) =>
                setEditPlanerLayout({
                  ...editPlanerLayout,
                  price: value,
                })
              }
              placeholder={"Cena"}
            />
            <div className="flex flex-col justify-start items-start">
              <p>Tip planera</p>
              <select
                onChange={(event) => {
                  setEditPlanerLayout({
                    ...editPlanerLayout,
                    planer_type_id: event.target.value,
                  });
                }}
                value={editPlanerLayout?.planer_type}
                className="w-full"
              >
                {planerTypes.map((planerType) => (
                  <option value={planerType.id}>{planerType.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full gap-y-5">
          <Button
            text={"Dodaj"}
            handleClick={() => createPlanerLayout()}
            width={"w-full"}
          />
          <Button
            text={"Izmeni"}
            handleClick={() => updatePlanerLayout()}
            width={"w-full"}
          />
          <Button
            text={"Obrisi"}
            handleClick={() => deletePlanerLayout()}
            width={"w-full"}
          />
        </div>
      </div>
    </div>
  );
}
