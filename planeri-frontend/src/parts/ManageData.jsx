import { useState } from "react";
import ManagePlaners from "../components/manageData/ManagePlaners";
import ManagePlanerTypes from "../components/manageData/ManagePlanerTypes";
import ManagePlanerLayouts from "../components/manageData/ManagePlanerLayouts";
import ManageUsers from "../components/manageData/ManageUsers";
import ManageOrders from "../components/manageData/ManageOrders";

export default function ManageData() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      displayText: "Planers",
      content: <ManagePlaners></ManagePlaners>,
      isSelected: false,
    },
    {
      id: 2,
      displayText: "Planer Types",
      content: <ManagePlanerTypes></ManagePlanerTypes>,
      isSelected: false,
    },
    {
      id: 3,
      displayText: "Planer Layouts",
      content: <ManagePlanerLayouts></ManagePlanerLayouts>,
      isSelected: false,
    },
    {
      id: 4,
      displayText: "Orders",
      content: <ManageOrders></ManageOrders>,
      isSelected: false,
    },
    {
      id: 5,
      displayText: "Users",
      content: <ManageUsers></ManageUsers>,
      isSelected: false,
    },
  ]);
  const updateTabs = (tabId) => {
    setTabs((prevTabs) => {
      return prevTabs.map((tab) => {
        if (tab.id === tabId) {
          return { ...tab, isSelected: true };
        } else {
          return { ...tab, isSelected: false };
        }
      });
    });
  };

  return (
    <div className="flex flex-row w-full h-full justify-center items-center px-5">
      <div className="flex flex-col w-[20%] h-full justify-start items-center gap-y-4 bg-orange-700 p-5">
        {tabs.map((tab) => {
          return (
            <div
              className={`flex w-full justify-center rounded-lg ${
                tab.isSelected && "bg-slate-500"
              } hover:bg-slate-500 cursor-pointer`}
              onClick={() => updateTabs(tab.id)}
            >
              {tab.displayText}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col w-full h-full justify-center bg-orange-900">
        {tabs.find((tab) => tab.isSelected)?.content}
      </div>
    </div>
  );
}
