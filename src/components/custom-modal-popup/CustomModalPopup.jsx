import React, { useState } from "react";
import styles from "../../styles/custom-modal-popup/customModalPopup.module.css";
import Modal from "./Modal";

function CustomModalPopup() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup((showModalPopup) => !showModalPopup);
  }

  return (
    <div className={styles.customModalPopupConatiner}>
      <button onClick={handleToggleModalPopup}>Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          body={<div>Customized Body</div>}
          footer={<h1>Customized footer</h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default CustomModalPopup;
