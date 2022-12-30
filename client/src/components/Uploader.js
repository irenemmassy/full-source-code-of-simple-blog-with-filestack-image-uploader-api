import React, { useState } from "react";
import UploaderModal from "./modal/UploaderModal";

function Uploader({ setFile }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="col-span-10">
      <UploaderModal
        setFile={setFile}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <button
        onClick={() => setModalOpen(true)}
        className="w-full flex-colo text-main border-dashed h-32 p-5 border border-gray-300 rounded-md bg-subMain "
      >
        Upload file
      </button>
    </div>
  );
}

export default Uploader;
