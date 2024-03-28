import React from "react";
import styles from "../../styles/custom-modal-popup/customModalPopup.module.css";

function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className={styles.modalContainer}>
      <div className={styles.modalContain}>
        <div className={styles.header}>
          <span className={styles.closeModalIcon} onClick={onClose}>
            &times;
          </span>
          {header ? header : <h2>Header</h2>}
        </div>
        <div className={styles.body}>
          {body ? (
            body
          ) : (
            <div>
              <p>This is our Modal Body !</p>
            </div>
          )}
        </div>
        <div className={styles.footer}>{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
}

export default Modal;
