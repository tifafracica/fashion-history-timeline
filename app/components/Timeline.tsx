// app/components/Timeline.tsx
import { useState } from "react";
import Modal from "~/components/Modal";

type Event = {
  id: number;
  period: string;
  img: string;
  age: string;
}

const events: Event[] = [
  { id: 1, age: "(3100 a.C. - 30 a.C.)", period: "Antiguo Egipto", img: '/src/images/assets/antiguo-egipto.jpg' },
  { id: 2, age: "(800 a.C. - 146 a.C.)", period: "Grecia", img: "/src/images/assets/grecia.jpg" },
  { id: 3, age: "(27 a.C. - 476 d.C.)", period: "Roma", img: "/src/images/assets/roma.jpg" },
  { id: 4, age: "(476 d.C. - 1453 d.C.)", period: "Edad Media", img: "/src/images/assets/edad-media.jpg" },
  { id: 5, age: "(siglos XIV - XVI)", period: "Renacimiento", img: "/src/images/assets/renacimiento.jpg" },
  { id: 6, age: "(siglos XVII y principios del XVIII, 1600-1750)", period: "Barroco", img: "/src/images/assets/barroco.jpg" },
  { id: 7, age: "(siglos XVII y principios del XVIII, 1720-1780)", period: "Rococó", img: "/src/images/assets/rococo.jpg" },
  { id: 8, age: "finales del siglo XVIII - principios del XIX)", period: "Neoclásico - Imperio", img: "/src/images/assets/estilo-directoire-empire.jpg" },
  { id: 9, age: "(principios del siglo XIX)", period: "Romanticismo", img: "/src/images/assets/romanticismo.jpg" },
  { id: 10, age: "(1837-1901)", period: "Victoriana", img: "/src/images/assets/victoriana.jpg" },
  { id: 11, age: "1901-1917", period: "Primera Decada del 1900s", img: "/src/images/assets/años-10.jpg" },
  { id: 12, age: "1920-1929", period: "Años 20s", img: "/src/images/assets/años-20.jpg" },
  { id: 13, age: "1930-1939", period: "Años 30s", img: "/src/images/assets/años-30.jpg" },
  { id: 14, age: "1940-1947", period: "Años 40s", img: "/src/images/assets/años-40.jpg" },
  { id: 15, age: "1950-1959", period: "Años 50s", img: "/src/images/assets/años-50.jpg" },
  { id: 16, age: "1960-1969", period: "Años 60s", img: "/src/images/assets/años-60.jpg" },
  { id: 17, age: "1970-1979", period: "Años 70s", img: "/src/images/assets/años-70.jpg" },
  { id: 18, age: "1980-1989", period: "Años 80s", img: "/src/images/assets/años-80.jpg" },
  { id: 19, age: "1990-1999", period: "Años 90s", img: "/src/images/assets/años-90.jpg" },
  { id: 20, age: "2000-2009", period: "Años 00s - Y2K", img: "/src/images/assets/años-00s.jpg" },
  { id: 21, age: "", period: "Años 2010 y Más Allá", img: "/src/images/assets/años-2010.jpg" },
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="relative my-8">
      <div className="absolute h-full w-1 bg-slate-900 left-1/2 transform -translate-x-1/2 z-[1]"></div>
      <div className="flex justify-between items-center relative"></div>
      <div className="flex flex-col items-center">
        {events.map(event => (
          <div key={event.id} className="m-4 z-[2]">
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={() => setSelectedEvent(event)}
              >
              {event.period}
              <p>{event.age}</p>
            </button>
          </div>
        ))}
        {selectedEvent && (
          <Modal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Timeline;
