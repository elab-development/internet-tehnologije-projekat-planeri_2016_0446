import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";

export default function Contact() {
  const position = { lat: 44.772987198755025, lng: 20.47532673549389 };
  return (
    <div className="flex flex-col h-full w-full justify-center items-center px-80 gap-10 m-5">
      <>
        <p className="font-bold text-lg">Kontakt - Personalni planeri</p>
        <p>
          Ukoliko želite kontakt sa nama, ovde možete da izaberete način na koji
          želite da nas kontaktirate, kao i kontakt podatke. Pitajte sve što Vas
          interesuje, rado ćemo odgovoriti.
        </p>
      </>
      <div className="flex flex-row w-full">
        <div className="flex flex-col">
          <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col items-start gap-y-4">
              <p className="font-bold">Personalni planeri</p>
              <div className="flex flex-col items-start">
                <p>Jove Ilica 154</p>
                <p>11010 Beograd</p>
                <p>Srbija</p>
                <p>061123123</p>
                <p>Pon-Pet 09:00 – 17:00</p>
                <p>Subota 09:00 – 15:00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col items-start  gap-y-4">
              <div className="w-full text-center">
                <p className="font-bold">Postavite pitanje</p>
              </div>

              <div className="flex flex-col items-start">
                <p>Vasa poruka ce biti prosledjena odgovarajucem timu.</p>
                <p>Prosecno vreme odgovora je 1 cas.</p>
                <p>
                  Posaljite e-mail na:{" "}
                  <span className="font-bold">
                    kontakt@personalniplaneri.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "50vh", width: "100%" }}>
          <Map
            defaultZoom={13}
            defaultCenter={position}
            mapId={"9946934f72e8cbff"}
          >
            <AdvancedMarker position={position} onClick={() => {}}>
              <Pin
                background={"red"}
                borderColor={"white"}
                glyphColor={"white"}
              />
            </AdvancedMarker>
          </Map>
        </div>
      </div>
    </div>
  );
}
