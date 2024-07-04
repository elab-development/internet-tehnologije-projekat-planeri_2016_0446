import { useEffect, useState } from "react";
import {
  coverDesigns,
  covers,
  dates,
  notes,
  pageNumbers,
  planerLayouts,
  planerTypes,
  sizes,
} from "../../data/stepsData";
import { usePlanersService } from "../../service/usePlanersService";

export default function ManagePlaners() {
  const [editPlaner, setEditPlaner] = useState(null);
  const [planers, setPlaners] = useState([]);

  const { getPlanersRequest, createPlanerRequest } = usePlanersService();

  const getPlanersData = async () => {
    await getPlanersRequest().then((result) => setPlaners(result));
  };

  const createPlaner = async () => {
    await createPlanerRequest(editPlaner)
      .then(getPlanersData())
      .finally(
        alert(
          `Planer successfully created: ${editPlaner.cover}, ${editPlaner.coverDesign}`
        )
      );
  };

  const selectPlaner = (planer) => {
    setEditPlaner(planer);
  };

  useEffect(() => {
    getPlanersData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full p-3 gap-y-5">
      <div className="flex flex-col w-full h-full bg-cyan-600">
        <div className="flex flex-row w-full border pl-2 pr-4">
          <div className="flex w-[5%]">ID</div>
          <div className="flex w-[8%]">Cover</div>
          <div className="flex w-[14%]">CoverDesign</div>
          <div className="flex w-[10%]">Size</div>
          <div className="flex w-[10%]">PlanerType</div>
          <div className="flex w-[16%]">PlanerTypeLayout</div>
          <div className="flex w-[14%]">Dates</div>
          <div className="flex w-[10%]">Notes</div>
          <div className="flex w-[10%]">PageNumbers</div>
        </div>
        <div className="flex flex-col w-full h-[200px] overflow-y-scroll">
          {planers.map((planer) => (
            <div
              onClick={() => selectPlaner(planer)}
              className={`flex flex-row w-full border pl-2 cursor-pointer ${
                planer.id === editPlaner?.id && "bg-orange-400"
              }`}
            >
              <div className="flex w-[5%]">{planer.id}</div>
              <div className="flex w-[8%]">{planer.cover}</div>
              <div className="flex w-[14%]">{planer.cover_design}</div>
              <div className="flex w-[10%]">{planer.size}</div>
              <div className="flex w-[10%]">{planer.planer_type.name}</div>
              <div className="flex w-[16%]">{planer.page_layout}</div>
              <div className="flex w-[14%]">{planer.dates}</div>
              <div className="flex w-[10%]">{planer.notes}</div>
              <div className="flex w-[10%]">{planer.page_number}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-full h-full justify-center items-center gap-x-5">
        <div className="flex flex-row w-2/3 h-full gap-x-5">
          <div className="flex flex-col w-full gap-y-5">
            <div className="flex flex-col justify-start items-start">
              <p>Cover</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    cover: event.target.value,
                  });
                }}
                value={editPlaner?.cover}
                className="w-full"
              >
                {covers.map((cover) => (
                  <option>{cover.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Cover design</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    cover: event.target.value,
                  });
                }}
                value={editPlaner?.coverDesign}
                className="w-full"
              >
                {coverDesigns.map((coverDesign) => (
                  <option>{coverDesign.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Size</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    size: event.target.value,
                  });
                }}
                value={editPlaner?.size}
                className="w-full"
              >
                {sizes.map((size) => (
                  <option>{size}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Planer type</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    planerType: event.target.value,
                  });
                }}
                value={editPlaner?.planerType}
                className="w-full"
              >
                {planerTypes.map((planerType) => (
                  <option>{planerType.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-5">
            <div className="flex flex-col justify-start items-start">
              <p>Planer layout</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    planerTypeLayout: event.target.value,
                  });
                }}
                value={editPlaner?.planerTypeLayout}
                className="w-full"
              >
                {planerLayouts.map((planerLayout) => (
                  <option>{planerLayout.name}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Dates</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    date: event.target.value,
                  });
                }}
                value={editPlaner?.dates}
                className="w-full"
              >
                {dates.map((date) => (
                  <option>{date}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Notes</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    note: event.target.value,
                  });
                }}
                value={editPlaner?.note}
                className="w-full"
              >
                {notes.map((note) => (
                  <option>{note}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p>Page number</p>
              <select
                onChange={(event) => {
                  setEditPlaner({
                    ...editPlaner,
                    pageNumber: event.target.value,
                  });
                }}
                value={editPlaner?.pageNumber}
                className="w-full"
              >
                {pageNumbers.map((pageNumber) => (
                  <option>{pageNumber}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full gap-y-5">
          <div
            onClick={() => createPlaner()}
            className="flex w-full h-10 justify-center items-center bg-orange-400 rounded-lg font-bold text-lg cursor-pointer"
          >
            Add
          </div>
          <div className="flex w-full h-10 justify-center items-center bg-blue-600 rounded-lg font-bold text-lg">
            Edit
          </div>
          <div className="flex w-full h-10 justify-center items-center bg-red-600 rounded-lg font-bold text-lg">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}
