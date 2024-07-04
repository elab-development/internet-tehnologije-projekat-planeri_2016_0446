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
  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-10 gap-y-5">
      <div className="flex flex-row w-full h-full justify-center items-start">
        <div className="flex flex-col w-full h-full gap-y-5">
          {selectedPlanerType?.name === "Bullet" ? (
            <div className="flex flex-col w-full h-full justify-start items-start">
              <p className="text-2xl font-semibold">
                Izaberite izgled stranica
              </p>
              <div className="flex text-xl gap-x-5">
                <input
                  type="radio"
                  name="pageLayout"
                  value="Tackice"
                  onChange={(e) => handlePageLayoutChange(e)}
                  checked={selectedPageLayout === "Tackice"}
                />
                <p>Tackice</p>
              </div>
              <div className="flex text-xl gap-x-5">
                <input
                  type="radio"
                  name="pageLayout"
                  value="Linije"
                  onChange={(e) => handlePageLayoutChange(e)}
                  checked={selectedPageLayout === "Linije"}
                />
                <p>Linije</p>
              </div>
              <div className="flex text-xl gap-x-5">
                <input
                  type="radio"
                  name="pageLayout"
                  value="Kvadratici"
                  onChange={(e) => handlePageLayoutChange(e)}
                  checked={selectedPageLayout === "Kvadratici"}
                />
                <p>Kvadratici</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col w-full h-full justify-start items-start">
                <p className="text-2xl font-semibold">Da li ima beleske?</p>
                <div className="flex text-xl gap-x-5">
                  <input
                    type="radio"
                    name="hasNotes"
                    onChange={(e) => setShowNotes(true)}
                    checked={showNotes === true}
                  />
                  <p>Ima</p>
                </div>
                <div className="flex text-xl gap-x-5">
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
                  <div className="flex text-xl gap-x-5">
                    <input
                      type="radio"
                      name="notesLayout"
                      value="Tackice"
                      onChange={(e) => handleNoteTypeChange(e)}
                      checked={selectedNoteType === "Tackice"}
                    />
                    <p>Tackice</p>
                  </div>
                  <div className="flex text-xl gap-x-5">
                    <input
                      type="radio"
                      name="notesLayout"
                      value="Linije"
                      onChange={(e) => handleNoteTypeChange(e)}
                      checked={selectedNoteType === "Linije"}
                    />
                    <p>Linije</p>
                  </div>
                  <div className="flex text-xl gap-x-5">
                    <input
                      type="radio"
                      name="notesLayout"
                      value="Kvadratici"
                      onChange={(e) => handleNoteTypeChange(e)}
                      checked={selectedNoteType === "Kvadratici"}
                    />
                    <p>Kvadratici</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="flex flex-col w-2/3 h-[300px] border border-green-950"></div>
      </div>
      <div className="flex flex-row w-full h-fit justify-between items-center">
        <div
          onClick={() => prevStep(step)}
          className="flex w-[20%] h-10 justify-center items-center bg-orange-400 rounded-lg text-white"
        >
          Previous step
        </div>
        <div
          onClick={() => finishCustomization()}
          className="flex w-[20%] h-10 justify-center items-center bg-orange-400 rounded-lg text-white"
        >
          Finish customization
        </div>
      </div>
    </div>
  );
}
