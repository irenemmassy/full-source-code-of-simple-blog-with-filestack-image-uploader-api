import React from "react";
import MainModal from "./MainModal";
import { PickerInline } from "filestack-react";

function UploaderModal({ modalOpen, setModalOpen, setFile }) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-subMain text-text rounded-2xl">
        <h2 className="text-3xl font-bold">Upload File</h2>
        <div className="w-full py-4">
          <PickerInline
            apikey={process.env.REACT_APP_FILESTACK_API_KEY}
            pickerOptions={{
              accept: ["image/*", "video/*", "audio/*", "application/*"],
              maxFiles: 6,
            }}
            onUploadDone={(res) => {
              setFile(res.filesUploaded);
              setModalOpen(false);
            }}
          />
        </div>
      </div>
    </MainModal>
  );
}

export default UploaderModal;
