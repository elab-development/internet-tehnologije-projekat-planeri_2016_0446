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
import SelectField from "../reusable/SelectField";
import Button from "../reusable/Button";

export default function ManagePlaners() {
  const [editPlaner, setEditPlaner] = useState(null);
  const [planers, setPlaners] = useState([]);

  const { getPlanersRequest, createPlanerRequest, deletePlanerRequest } =
    usePlanersService();

  const getPlanersData = async () => {
    await getPlanersRequest().then((result) => setPlaners(result));
  };

  const createPlaner = async () => {
    const planerRequest = {
      planer_type_id: parseInt(editPlaner?.planerType),
      cover_type: editPlaner.cover,
      cover_design: editPlaner.coverDesign,
      page_number: editPlaner.pageNumber,
      page_layout: null,
      price: 1500,
      size: editPlaner.size,
      front_page: null,
      dates: editPlaner.date,
      daily_planer_design: null,
      notes: editPlaner.note,
    };
    await createPlanerRequest(planerRequest)
      .then(getPlanersData())
      .finally(
        alert(
          `Planer successfully created: ${editPlaner.cover}, ${editPlaner.coverDesign}`
        )
      );
  };

  const deletePlaner = async () => {
    await deletePlanerRequest(editPlaner.id)
      .then(alert(`Planer successfully deleted!`))
      .then(getPlanersData())
      .finally(setEditPlaner({}));
  };

  const selectPlaner = (planer) => {
    setEditPlaner(planer);
  };

  useEffect(() => {
    getPlanersData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full p-3 gap-y-5">
      <div className="flex flex-col w-full h-full bg-[#FFFBEC]">
        <div className="flex flex-row w-full border pl-2 pr-4">
          <div className="flex w-[5%]">ID</div>
          <div className="flex w-[8%]">Korica</div>
          <div className="flex w-[14%]">Dizajn korice</div>
          <div className="flex w-[10%]">Velicina</div>
          <div className="flex w-[10%]">Tip planera</div>
          <div className="flex w-[16%]">Raspored planera</div>
          <div className="flex w-[14%]">Datumi</div>
          <div className="flex w-[10%]">Beleske</div>
          <div className="flex w-[10%]">Broj strana</div>
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
            <SelectField
              value={editPlaner?.cover}
              setValue={(value) =>
                setEditPlaner({
                  ...editPlaner,
                  cover: value,
                })
              }
              placeholder={"Korice"}
              options={covers}
            />
            <SelectField
              value={editPlaner?.coverDesign}
              setValue={(value) =>
                setEditPlaner({
                  ...editPlaner,
                  coverDesign: value,
                })
              }
              placeholder={"Dizajn korice"}
              options={coverDesigns}
            />
            <SelectField
              value={editPlaner?.size}
              setValue={(value) =>
                setEditPlaner({
                  ...editPlaner,
                  size: value,
                })
              }
              placeholder={"Velicina"}
              options={sizes}
            />
            <div className="flex flex-col justify-start items-start">
              <p>Tip planera</p>
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
                  <option value={planerType.id}>{planerType.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-5">
            <SelectField
              value={editPlaner?.planerTypeLayout}
              setValue={(value) =>
                setEditPlaner({
                  ...editPlaner,
                  planerTypeLayout: value,
                })
              }
              placeholder={"Raspored planera"}
              options={planerLayouts}
            />
            <SelectField
              value={editPlaner?.dates}
              setValue={(value) =>
                setEditPlaner({
                  ...editPlaner,
                  date: value,
                })
              }
              placeholder={"Datumi"}
              options={dates}
            />
            <SelectField
              value={editPlaner?.note}
              setValue={(value) =>
                setEditPlaner({
                  ...editPlaner,
                  note: value,
                })
              }
              placeholder={"Beleske"}
              options={notes}
            />
            <SelectField
              value={editPlaner?.pageNumber}
              setValue={(value) =>
                setEditPlaner({
                  ...editPlaner,
                  pageNumber: value,
                })
              }
              placeholder={"Broj strana"}
              options={pageNumbers}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full gap-y-5">
          <Button
            text={"Dodaj"}
            handleClick={() => createPlaner()}
            width={"w-full"}
          />
          <Button
            text={"Obrisi"}
            handleClick={() => deletePlaner()}
            width={"w-full"}
          />
        </div>
      </div>
    </div>
  );
}
