import { useState } from "react";
import Button from "../reusable/Button";
import dottedNotesLayout from "../../images/dottedNotesLayout.png";
import linesNotesLayout from "../../images/linesNotesLayout.png";
import squaredNotesLayout from "../../images/squaredNotesLayout.png";

export default function Step4({
  step,
  prevStep,
  selectedPlanerType,
  showNotes,
  setShowNotes,
  selectedNoteType,
  handleNoteTypeChange,
  selectedPageLayout,
  handlePageLayoutChange,
  finishCustomization,
}) {
  const [img, setImg] = useState(null);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-10 gap-y-5">
      <div className="flex flex-row w-full h-full justify-center items-start">
        <div className="flex flex-col w-full h-full gap-y-5">
          {selectedPlanerType?.name === "Bullet" ? (
            <div className="flex flex-col w-full h-full justify-start items-start">
              <p className="text-2xl font-semibold">
                Izaberite izgled stranica
              </p>
              <div
                onClick={(e) => {
                  setImg(dottedNotesLayout);
                  handlePageLayoutChange("Tackice");
                }}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="pageLayout"
                  value="Tackice"
                  onChange={(e) => {
                    setImg(dottedNotesLayout);
                    handlePageLayoutChange(e);
                  }}
                  checked={selectedPageLayout === "Tackice"}
                />
                <p>Tackice</p>
              </div>
              <div
                onClick={(e) => {
                  setImg(linesNotesLayout);
                  handlePageLayoutChange("Linije");
                }}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="pageLayout"
                  value="Linije"
                  onChange={(e) => {
                    setImg(linesNotesLayout);
                    handlePageLayoutChange(e);
                  }}
                  checked={selectedPageLayout === "Linije"}
                />
                <p>Linije</p>
              </div>
              <div
                onClick={(e) => {
                  setImg(squaredNotesLayout);
                  handlePageLayoutChange("Kvadratici");
                }}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="pageLayout"
                  value="Kvadratici"
                  onChange={(e) => {
                    setImg(squaredNotesLayout);
                    handlePageLayoutChange(e);
                  }}
                  checked={selectedPageLayout === "Kvadratici"}
                />
                <p>Kvadratici</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col w-full h-full justify-start items-start">
                <p className="text-2xl font-semibold">Da li ima beleske?</p>
                <div
                  onClick={(e) => setShowNotes(true)}
                  className="flex text-xl gap-x-5"
                >
                  <input
                    type="radio"
                    name="hasNotes"
                    onChange={(e) => setShowNotes(true)}
                    checked={showNotes === true}
                  />
                  <p>Ima</p>
                </div>
                <div
                  onClick={(e) => setShowNotes(false)}
                  className="flex text-xl gap-x-5"
                >
                  <input
                    type="radio"
                    name="hasNotes"
                    onChange={(e) => setShowNotes(false)}
                    checked={showNotes === false}
                  />
                  <p>Nema</p>
                </div>
              </div>
              {showNotes && (
                <div className="flex flex-col w-full h-full justify-start items-start">
                  <p className="text-2xl font-semibold">
                    Izaberite vrstu beleski
                  </p>
                  <div
                    onClick={(e) => {
                      setImg(dottedNotesLayout);
                      handleNoteTypeChange("Tackice");
                    }}
                    className="flex text-xl gap-x-5"
                  >
                    <input
                      type="radio"
                      name="notesLayout"
                      value="Tackice"
                      onChange={(e) => {
                        setImg(dottedNotesLayout);
                        handleNoteTypeChange(e.target.value);
                      }}
                      checked={selectedNoteType === "Tackice"}
                    />
                    <p>Tackice</p>
                  </div>
                  <div
                    onClick={(e) => {
                      setImg(linesNotesLayout);
                      handleNoteTypeChange("Linije");
                    }}
                    className="flex text-xl gap-x-5"
                  >
                    <input
                      type="radio"
                      name="notesLayout"
                      value="Linije"
                      onChange={(e) => {
                        setImg(linesNotesLayout);
                        handleNoteTypeChange(e.target.value);
                      }}
                      checked={selectedNoteType === "Linije"}
                    />
                    <p>Linije</p>
                  </div>
                  <div
                    onClick={(e) => {
                      setImg(squaredNotesLayout);
                      handleNoteTypeChange("Kvadratici");
                    }}
                    className="flex text-xl gap-x-5"
                  >
                    <input
                      type="radio"
                      name="notesLayout"
                      value="Kvadratici"
                      onChange={(e) => {
                        setImg(squaredNotesLayout);
                        handleNoteTypeChange(e.target.value);
                      }}
                      checked={selectedNoteType === "Kvadratici"}
                    />
                    <p>Kvadratici</p>
                  </div>
                </div>
              )}
            </>
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
          text={"Zavrsi kreiranje"}
          handleClick={() => finishCustomization()}
          width={"w-1/5"}
        />
      </div>
    </div>
  );
}
