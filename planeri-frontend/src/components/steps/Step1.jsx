import { useEffect } from "react";

export default function Step1({
  step,
  nextStep,
  planerTypes,
  selectedPlanerType,
  handlePlanerTypeChange,
  selectedPlanerSize,
  handlePlanerSizeChange,
  selectedPageNumber,
  handlePageNumberChange,
}) {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-10 gap-y-5">
      <div className="flex flex-row w-full h-full justify-center items-start">
        <div className="flex flex-col w-full h-full gap-y-5">
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">Izaberi vrstu planera</p>
            {planerTypes?.map((pType) => (
              <div
                onClick={() => handlePlanerTypeChange(pType)}
                key={pType.id}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="planerType"
                  value={pType.name}
                  onChange={() => handlePlanerTypeChange(pType)}
                  checked={selectedPlanerType?.name === pType.name}
                />
                <p>{`${pType.name} (${pType.price} din)`}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">Izaberi velicinu planera</p>
            <div
              onClick={(e) => handlePlanerSizeChange("A5")}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="planerSize"
                value="A5"
                onChange={(e) => handlePlanerSizeChange(e.target.value)}
                checked={selectedPlanerSize === "A5"}
              />
              <p>A5</p>
            </div>
            <div
              onClick={(e) => handlePlanerSizeChange("A6")}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="planerSize"
                value="A6"
                onChange={(e) => handlePlanerSizeChange(e.target.value)}
                checked={selectedPlanerSize === "A6"}
              />
              <p>A6</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">Izaberi broj strana</p>
            <div
              onClick={(e) => handlePageNumberChange("100")}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="pageNumber"
                value="100"
                onChange={(e) => handlePageNumberChange(e.target.value)}
                checked={selectedPageNumber === "100"}
              />
              <p>100</p>
            </div>
            <div
              onClick={(e) => handlePageNumberChange("250")}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="pageNumber"
                value="250"
                onChange={(e) => handlePageNumberChange(e.target.value)}
                checked={selectedPageNumber === "250"}
              />
              <p>250</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 h-[300px] border border-green-950"></div>
      </div>
      <div className="flex flex-col w-full h-fit justify-center items-end">
        <div
          onClick={() => nextStep(step)}
          className="flex w-[20%] h-10 justify-center items-center bg-orange-400 rounded-lg text-white"
        >
          Next step
        </div>
      </div>
    </div>
  );
}
