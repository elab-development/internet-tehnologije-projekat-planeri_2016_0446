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
      name: editPlanerLayout.name,
      price: editPlanerLayout.price,
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
      <div className="flex flex-col w-full h-full bg-cyan-600">
        <div className="flex flex-row w-full border pl-2 pr-4">
          <div className="flex w-[10%]">ID</div>
          <div className="flex w-[20%]">Name</div>
          <div className="flex w-[15%]">Price</div>
        </div>
        <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
          {planerLayouts.map((planerLayout) => (
            <div
              onClick={() => selectPlanerLayout(planerLayout)}
              className="flex flex-row w-full border pl-2 cursor-pointer"
            >
              <div className="flex w-[10%]">{planerLayout.id}</div>
              <div className="flex w-[20%]">{planerLayout.name}</div>
              <div className="flex w-[15%]">{planerLayout.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
        <div className="flex flex-row w-2/3 h-full gap-x-5">
          <div className="flex flex-col w-full gap-y-5">
            <div className="flex flex-col justify-start items-start">
              <p>Name</p>
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
              <p>Price</p>
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
              <p>Planer type</p>
              <select
                onChange={(event) => {
                  setEditPlanerLayout({
                    ...editPlanerLayout,
                    planerType: event.target.value,
                  });
                }}
                value={editPlanerLayout?.planerType.name}
                className="w-full"
              >
                {planerTypes.map((planerType) => (
                  <option>{planerType.name}</option>
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
            Add
          </div>
          <div
            onClick={() => updatePlanerLayout()}
            className="flex w-full h-10 justify-center items-center bg-blue-600 rounded-lg font-bold text-lg"
          >
            Edit
          </div>
          <div
            onClick={() => deletePlanerLayout()}
            className="flex w-full h-10 justify-center items-center bg-red-600 rounded-lg font-bold text-lg"
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}
