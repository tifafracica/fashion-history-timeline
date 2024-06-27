// app/components/Timeline.tsx
import { useState } from "react";
import Modal from "~/components/Modal";

type Event = {
  id: number;
  period: string;
  img: string;
}

const events: Event[] = [
  { id: 1, period: "Antiguo Egipto", img: '/src/images/assets/antiguo-egipto.jpg' },
  { id: 2, period: "Grecia", img: "/src/images/assets/grecia.jpg" },
  { id: 3, period: "Roma", img: "/src/images/assets/roma.jpg" },
  { id: 4, period: "Edad Media", img: "/src/images/assets/edad-media.jpg" },
  { id: 5, period: "Renacimiento", img: "/src/images/assets/renacimiento.jpg" },
  { id: 6, period: "Barroco", img: "/src/images/assets/barroco.jpg" },
  { id: 7, period: "Rococó", img: "/src/images/assets/rococo.jpg" },
  { id: 8, period: "Neoclásico - Imperio", img: "/src/images/assets/estilo-directoire-empire.jpg" },
  { id: 9, period: "Victoriana", img: "/src/images/assets/victoriana.jpg" },
  { id: 10, period: "Romanticismo", img: "/src/images/assets/romanticismo.jpg" },
  { id: 11, period: "Primera Decada del 1900s", img: "/src/images/assets/años-10.jpg" },
  { id: 12, period: "Años 20s", img: "/src/images/assets/años-20.jpg" },
  { id: 13, period: "Años 30s", img: "/src/images/assets/años-30.jpg" },
  { id: 14, period: "Años 40s", img: "/src/images/assets/años-40.jpg" },
  { id: 15, period: "Años 50s", img: "/src/images/assets/años-50.jpg" },
  { id: 16, period: "Años 60s", img: "/src/images/assets/años-60.jpg" },
  { id: 17, period: "Años 70s", img: "/src/images/assets/años-70.jpg" },
  { id: 18, period: "Años 80s", img: "/src/images/assets/años-80.jpg" },
  { id: 19, period: "Años 90s", img: "/src/images/assets/años-90.jpg" },
  { id: 20, period: "Años 00s - Y2K", img: "/src/images/assets/años-00s.jpg" },
  { id: 21, period: "Años 2010 y Más Allá", img: "/src/images/assets/años-00s.jpg" },
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="relative my-8">
      <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 z-[-1]"></div>
      <div className="flex justify-between items-center relative"></div>
      <div className="flex flex-col items-center">
        {events.map(event => (
          <div key={event.id} className="m-4">
            <button
              className="bg-blue-500 text-white p-2 rounded z-1"
              onClick={() => setSelectedEvent(event)}
            >
              {event.period}
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
