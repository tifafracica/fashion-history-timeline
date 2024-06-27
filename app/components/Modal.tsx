import React from "react";

type ModalProps = {
  event: {
    period: string;
    img: string;
    age: string;
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-[4]">
      <div className="bg-white p-4 rounded">
        <button className="float-right" onClick={onClose}>
          Close
        </button>
        <h2 className="pb-2 pt- text-center text-[3.25rem]">{event.period}</h2>
        <p className="pb-2 text-center text-[1.25rem]">{event.age}</p>
        <img src={event.img} alt={event.period} className="max-w-[80%] mx-auto h-auto" />
      </div>
    </div>
  );
};

export default Modal;
