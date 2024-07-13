import { useEffect, useState } from "react";
import { usePlanerLayoutsService } from "../../service/usePlanerLayoutsService";
import { usePlanerTypesService } from "../../service/usePlanerTypesService";

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
      price: editPlanerLayout?.price,
      planer_type_id: parseInt(editPlanerLayout.planer_type?.id),
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
            <div className="flex flex-col justify-start items-start">
              <p>Naziv</p>
              <input
                onChange={(event) => {
                  setEditPlanerLayout({
                    ...editPlanerLayout,
                    name: event.target.value,
                  });
                }}
                value={editPlanerLayout?.name}
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Cena</p>
              <input
                onChange={(event) => {
                  setEditPlanerLayout({
                    ...editPlanerLayout,
                    price: event.target.value,
                  });
                }}
                value={editPlanerLayout?.price}
                className="w-full"
              />
            </div>
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
          <div
            onClick={() => createPlanerLayout()}
            className="flex w-full h-10 justify-center items-center bg-orange-400 rounded-lg font-bold text-lg cursor-pointer"
          >
            Dodaj
          </div>
          <div
            onClick={() => updatePlanerLayout()}
            className="flex w-full h-10 justify-center items-center bg-blue-600 rounded-lg font-bold text-lg"
          >
            Izmeni
          </div>
          <div
            onClick={() => deletePlanerLayout()}
            className="flex w-full h-10 justify-center items-center bg-red-600 rounded-lg font-bold text-lg"
          >
            Obrisi
          </div>
        </div>
      </div>
    </div>
  );
}
