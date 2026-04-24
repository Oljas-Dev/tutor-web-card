import { useEffect } from "react";
import { useBookings } from "../../../contexts/useBookings";

export default function ModalDelete() {
  // Close dialog when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalDeleteSlot.current?.open) {
        modalDeleteSlot.current.close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalDeleteSlot]);

  // Close dialog when clicking outside
  const handleClickOutside = (e) => {
    const dialog = modalDeleteSlot.current;
    if (dialog && e.target === dialog) {
      dialog.close();
    }
  };

  return (
    <dialog
      ref={modalDeleteSlot}
      onClick={handleClickOutside}
      className="flex flex-col justify-center "
    >
      <div className="w-50 h-25 ">
        <p>Do you really want to delete lesson from 07:00 - 08:00?</p>
        <button onClick={() => modalDeleteSlot.current.close()}>close</button>
      </div>
    </dialog>
  );
}
