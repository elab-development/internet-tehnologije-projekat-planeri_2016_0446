export default function AboutPlaners() {
  return (
    <div className="flex flex-col h-[560px] w-full overflow-y-auto px-20 gap-y-5">
      <div className="flex flex-row w-full bg-orange-400 rounded-xl">
        <div className="flex flex-col h-[350px] w-[20%] justify-center items-center px-5 text-2xl font-bold">
          Studentski
        </div>
        <div className="flex flex-col w-full justify-center items-start bg-[#FFECA1] text-start px-20 rounded-r-xl">
          <ul className="list-disc ml-5 text-2xl">
            <li>Organizator za raspored časova</li>
            <li>Prostor za beleženje zadataka i rokova</li>
            <li>Mesečne i nedeljne kalendare</li>
            <li>Sekcije za planiranje ciljeva i praćenje napretka</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full bg-orange-400 rounded-xl">
        <div className="flex flex-col h-[350px] w-[20%] justify-center items-center px-5 text-2xl font-bold">
          Dnevni
        </div>
        <div className="flex flex-col w-full justify-center items-start bg-[#FFECA1] text-start px-20 rounded-r-xl">
          <ul className="list-disc ml-5 text-2xl">
            <li>Organizujete svaki dan sa detaljnim rasporedom</li>
            <li>Prostorom za beleženje zadataka i prioritetima</li>
            <li>Listom za kupovinu ili beleške</li>
            <li>
              Sekcije za praćenje hidratacije, ishrane, vežbanja i refleksiju na
              kraju dana
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full bg-orange-400 rounded-xl">
        <div className="flex flex-col h-[350px] w-[20%] justify-center items-center px-5 text-2xl font-bold">
          Bullet
        </div>
        <div className="flex flex-col w-full justify-center items-start bg-[#FFECA1] text-start px-20 rounded-r-xl">
          <ul className="list-disc ml-5 text-2xl">
            <li>Kreativno organizujete svoje obaveze, ciljeve i ideje.</li>
            <li>
              Prazne stranice koje možete koristiti za kreiranje mesečnih i
              nedeljnih rasporeda
            </li>
            <li>
              Idealan je za sve koji žele jedinstven i personalizovan pristup
              planiranju i organizaciji.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
