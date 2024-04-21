export default function Step1({
  step,
  nextStep,
  selectedPlanerType,
  handlePlanerTypeChange,
  selectedPlanerSize,
  handlePlanerSizeChange,
}) {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-10 gap-y-5">
      <div className="flex flex-row w-full h-full justify-center items-start">
        <div className="flex flex-col w-full h-full gap-y-5">
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">Izaberi vrstu planera</p>
            <div className="flex text-xl gap-x-5">
              <input
                type="radio"
                name="planerType"
                value="Dnevni"
                onChange={(e) => handlePlanerTypeChange(e)}
                checked={selectedPlanerType === "Dnevni"}
              />
              <p>Dnevni planer (1500 din)</p>
            </div>
            <div className="flex text-xl gap-x-5">
              <input
                type="radio"
                name="planerType"
                value="Studentski"
                onChange={(e) => handlePlanerTypeChange(e)}
                checked={selectedPlanerType === "Studentski"}
              />
              <p>Studentski planer (1200 din)</p>
            </div>
            <div className="flex text-xl gap-x-5">
              <input
                type="radio"
                name="planerType"
                value="Bullet"
                onChange={(e) => handlePlanerTypeChange(e)}
                checked={selectedPlanerType === "Bullet"}
              />
              <p>Bullet journal (1000 din)</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">Izaberi velicinu planera</p>
            <div className="flex text-xl gap-x-5">
              <input
                type="radio"
                name="planerSize"
                value="A5"
                onChange={(e) => handlePlanerSizeChange(e)}
                checked={selectedPlanerSize === "A5"}
              />
              <p>A5</p>
            </div>
            <div className="flex text-xl gap-x-5">
              <input
                type="radio"
                name="planerSize"
                value="A6"
                onChange={(e) => handlePlanerSizeChange(e)}
                checked={selectedPlanerSize === "A6"}
              />
              <p>A6</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 h-[300px] border border-green-950"></div>
      </div>
      <div className="flex flex-col w-full h-fit justify-center items-end">
        <div
          onClick={() => nextStep(step)}
          className="flex w-[20%] h-10 justify-center items-center bg-green-800 rounded-lg text-white"
        >
          Next step
        </div>
      </div>
    </div>
  );
}