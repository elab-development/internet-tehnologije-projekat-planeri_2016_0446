export default function AboutPlaners() {
  return (
    <div className="flex flex-col h-[560px] w-full overflow-y-auto px-20">
      <div className="flex flex-row w-full bg-red-300">
        <div className="flex flex-col h-[350px] w-[20%] justify-center items-center px-5">
          Dnevni
        </div>
        <div className="flex flex-col w-full justify-center items-center bg-red-200">
          <ul className="list-disc ml-5 text-2xl">
            <li>Opis 1</li>
            <li>Opis 2</li>
            <li>Opis 3</li>
            <li>Opis 4</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full bg-green-300">
        <div className="flex flex-col h-[350px] w-[20%] justify-center items-center px-5">
          Studentski
        </div>
        <div className="flex flex-col w-full justify-center items-center bg-green-200">
          <ul className="list-disc ml-5 text-2xl">
            <li>Opis 1</li>
            <li>Opis 2</li>
            <li>Opis 3</li>
            <li>Opis 4</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full bg-blue-300">
        <div className="flex flex-col h-[350px] w-[20%] justify-center items-center px-5">
          Bullet
        </div>
        <div className="flex flex-col w-full justify-center items-center bg-blue-200">
          <ul className="list-disc ml-5 text-2xl">
            <li>Opis 1</li>
            <li>Opis 2</li>
            <li>Opis 3</li>
            <li>Opis 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
