import { useEffect, useState } from "react";
import { coverDesigns, covers } from "../../data/stepsData";
import layout1 from "../steps/images/layout1.jpg";
import layout2 from "../steps/images/layout2.png";
import layout3 from "../steps/images/layout3.jpeg";
import Button from "../reusable/Button";
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
              <div
                onClick={() => handleCoverTypeChange(cover)}
                className="flex text-xl gap-x-5"
              >
                <>
                  <input
                    type="radio"
                    name="coverType"
                    value={cover.name}
                    onChange={(e) => handleCoverTypeChange(cover)}
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
              <div
                onClick={(e) => {
                  showImage(coverDesign.id);
                  handleCoverDesignChange(coverDesign.name);
                }}
                className="flex text-xl gap-x-5"
              >
                <input
                  type="radio"
                  name="coverDesign"
                  value={coverDesign.name}
                  onChange={(e) => handleCoverDesignChange(e.target.value)}
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
            <div
              onClick={(e) => handleFrontPageChange("true")}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="frontPage"
                value={true}
                onChange={(e) => handleFrontPageChange(e.target.value)}
                checked={selectedFrontPage === "true"}
              />
              <p>Da</p>
            </div>
            <div
              onClick={(e) => handleFrontPageChange("false")}
              className="flex text-xl gap-x-5"
            >
              <input
                type="radio"
                name="frontPage"
                value={false}
                onChange={(e) => handleFrontPageChange(e.target.value)}
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
