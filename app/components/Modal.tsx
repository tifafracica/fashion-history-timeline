import React from "react";

type ModalProps = {
  event: {
    period: string;
    img: string
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <button className="float-right" onClick={onClose}>
          Close
        </button>
        <h2 className="pb-8 pt-8 text-center text-[3.25rem]">{event.period}</h2>
        <img src={event.img} alt={event.period} className="max-w-[80%] mx-auto h-auto" />
      </div>
    </div>
  );
};

export default Modal;
