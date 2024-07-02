import { useEffect, useState } from "react";
import { coverDesigns, covers } from "../../data/stepsData";
import layout1 from "../steps/images/layout1.jpg";
import layout2 from "../steps/images/layout2.png";
import layout3 from "../steps/images/layout3.jpeg";
export default function Step2({
  step,
  nextStep,
  prevStep,
  selectedCoverType,
  handleCoverTypeChange,
  selectedCoverDesign,
  handleCoverDesignChange,
  selectedFrontPage,
  handleFrontPageChange,
}) {
  const [img, setImg] = useState(null);
  const showImage = (id) => {
    switch (id) {
      case 1:
        setImg(layout1);
        break;
      case 2:
        setImg(layout2);
        break;
      case 3:
        setImg(layout3);
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center p-10 gap-y-5">
      <div className="flex flex-row w-full h-full justify-center items-start">
        <div className="flex flex-col w-full h-full gap-y-5">
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">Izaberite vrstu poveza</p>
            {covers.map((cover) => (
              <div className="flex text-xl gap-x-5">
                <>
                  <input
                    type="radio"
                    name="coverType"
                    value={cover.name}
                    onChange={() => handleCoverTypeChange(cover)}
                    checked={selectedCoverType?.name === cover.name}
                  />
                  <p>
                    {cover.name} povez ({cover.price} din)
                  </p>
                </>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">Izaberite dizajn korice</p>
            {coverDesigns.map((coverDesign) => (
              <div className="flex text-xl gap-x-5">
                <input
                  type="radio"
                  name="coverDesign"
                  value={coverDesign.name}
                  onChange={(e) => {
                    showImage(coverDesign.id);
                    handleCoverDesignChange(e);
                  }}
                  checked={selectedCoverDesign === coverDesign.name}
                />
                <p>{coverDesign.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full h-full justify-start items-start">
            <p className="text-2xl font-semibold">
              Da li zelite naslovnu stranu?
            </p>
            <div className="flex text-xl gap-x-5">
              <input
                type="radio"
                name="frontPage"
                value={true}
                onChange={(e) => handleFrontPageChange(e)}
                checked={selectedFrontPage === "true"}
              />
              <p>Da</p>
            </div>
            <div className="flex text-xl gap-x-5">
              <input
                type="radio"
                name="frontPage"
                value={false}
                onChange={(e) => handleFrontPageChange(e)}
                checked={selectedFrontPage === "false"}
              />
              <p>Ne</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 h-[300px]">
          <img className="w-full h-full" src={img} alt="" />
        </div>
      </div>
      <div className="flex flex-row w-full h-fit justify-between items-center">
        <div
          onClick={() => prevStep(step)}
          className="flex w-[20%] h-10 justify-center items-center bg-green-800 rounded-lg text-white"
        >
          Previous step
        </div>
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
