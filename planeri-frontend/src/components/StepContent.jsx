import React, { useEffect, useState } from "react";

export default function StepContent({ content }) {
  return (
    <div className="flex flex-row w-[70%] h-[65%] lg:h-[80%] justify-center items-center bg-green-400">
      {content}
    </div>
  );
}
