import { useState } from "react";
import { dates } from "../../data/stepsData";
import Button from "../reusable/Button";
import layout1 from "../../images/layout1Step3.jpeg";
import layout2 from "../../images/layout2Step3.png";
import layout3 from "../../images/layout3Step3.png";

export default function Step3({
  step,
  nextStep,
  prevStep,
  selectedPlanerType,
  showDatePicker,
  setShowDatePicker,
  selectedDate,
  handleDateChange,
  selectedPlanerLayout,
  handlePlanerLayoutChange,
  selectedPageNumber,
  handlePageNumberChange,
  selectedDailyPlanerType,
  handleDailyPlanerTypeChange,
}) {
  const [img, setImg] = useState(null);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-10 gap-y-5">
      <div className="flex flex-row w-full h-full justify-center items-start">
        <div className="flex flex-col w-full h-full gap-y-5">
          {selectedPlanerType?.name === "Studentski" && (
            <div className="flex flex-col w-full h-full justify-start items-start">
              <p className="text-2xl font-semibold">Izaberite raspored</p>
              <div
                onClick={(e) => {
                  setImg(layout1);
                  handlePlanerLayoutChange("StudentLayout1");
                }}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="planerLayout"
                  value="StudentLayout1"
                  onChange={(e) => {
                    setImg(layout1);
                    handlePlanerLayoutChange(e.target.value);
                  }}
                  checked={selectedPlanerLayout === "StudentLayout1"}
                />
                <p>Layout 1</p>
              </div>
              <div
                onClick={(e) => {
                  setImg(layout2);
                  handlePlanerLayoutChange("StudentLayout2");
                }}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="planerLayout"
                  value="StudentLayout2"
                  onChange={(e) => {
                    setImg(layout2);
                    handlePlanerLayoutChange(e.target.value);
                  }}
                  checked={selectedPlanerLayout === "StudentLayout2"}
                />
                <p>Layout 2</p>
              </div>
              <div
                onClick={(e) => {
                  setImg(layout3);
                  handlePlanerLayoutChange("StudentLayout3");
                }}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="planerLayout"
                  value="StudentLayout3"
                  onChange={(e) => {
                    setImg(layout3);
                    handlePlanerLayoutChange(e.target.value);
                  }}
                  checked={selectedPlanerLayout === "StudentLayout3"}
                />
                <p>Layout 3</p>
              </div>
            </div>
          )}
          {selectedPlanerType?.name === "Bullet" && (
            <div className="flex flex-col w-full h-full justify-start items-start">
              <p className="text-2xl font-semibold">Izaberite broj stranica</p>
              <div
                onClick={(e) => handlePageNumberChange("90")}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="pageNumber"
                  value="90"
                  onChange={(e) => handlePageNumberChange(e)}
                  checked={selectedPageNumber === "90"}
                />
                <p>90</p>
              </div>
              <div
                onClick={(e) => handlePageNumberChange("140")}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="pageNumber"
                  value="140"
                  onChange={(e) => handlePageNumberChange(e)}
                  checked={selectedPageNumber === "140"}
                />
                <p>140</p>
              </div>
            </div>
          )}
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">
              Da li zelite datumiran planer?
            </p>
            <div
              onClick={(e) => setShowDatePicker(true)}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="dateChoose"
                onChange={(e) => setShowDatePicker(true)}
                checked={showDatePicker === true}
              />
              <p>Da</p>
            </div>
            <div
              onClick={(e) => setShowDatePicker(false)}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="dateChoose"
                onChange={(e) => setShowDatePicker(false)}
                checked={showDatePicker === false}
              />
              <p>Ne</p>
            </div>
          </div>
          {showDatePicker && (
            <div className="flex flex-col w-full h-full justify-start items-start">
              <p className="text-2xl font-semibold">Od kog datuma zelite?</p>
              <div className="flex text-xl gap-x-5">
                <select
                  onChange={(e) => handleDateChange(e)}
                  value={selectedDate}
                >
                  <option value="" disabled selected hidden>
                    Odaberite datum
                  </option>
                  {dates.map((date) => (
                    <option>{date}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {selectedPlanerType?.name === "Dnevni" && (
            <div className="flex flex-col w-full h-full justify-start items-start">
              <p className="text-2xl font-semibold">Vrsta dnevnog rasporeda</p>
              <div
                onClick={(e) => handleDailyPlanerTypeChange("Horizontalni")}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="dailyPlanerType"
                  value="Horizontalni"
                  onChange={(e) => handleDailyPlanerTypeChange(e.target.value)}
                  checked={selectedDailyPlanerType === "Horizontalni"}
                />
                <p>Horizontalno</p>
              </div>
              <div
                onClick={(e) => handleDailyPlanerTypeChange("Vertikalni")}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="dailyPlanerType"
                  value="Vertikalni"
                  onChange={(e) => handleDailyPlanerTypeChange(e.target.value)}
                  checked={selectedDailyPlanerType === "Vertikalni"}
                />
                <p>Vertikalno</p>
              </div>
              <div
                onClick={(e) => handleDailyPlanerTypeChange("Kvadrati")}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="dailyPlanerType"
                  value="Kvadrati"
                  onChange={(e) => handleDailyPlanerTypeChange(e.target.value)}
                  checked={selectedDailyPlanerType === "Kvadrati"}
                />
                <p>Kvadrati</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col w-2/3 h-[300px]">
          <img className="w-full h-full" src={img} alt="" />
        </div>
      </div>
      <div className="flex flex-row w-full h-fit justify-between items-center">
        <Button
          text={"Prethodni korak"}
          handleClick={() => prevStep(step)}
          width={"w-1/5"}
        />
        <Button
          text={"Sledeci korak"}
          handleClick={() => nextStep(step)}
          width={"w-1/5"}
        />
      </div>
    </div>
  );
}
