import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Modal.module.css";

interface ModalProps {
  readonly open: boolean;
  onClose(): void;
}
export function Modal({
  open,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) {
  const modal = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, top: "60%" }}
            animate={{ opacity: 1, top: "50%" }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.inner}>
              {children}
              <hr />
              <button type="button" onClick={handleClose}>
                Do onClose
              </button>
            </div>
          </motion.div>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </AnimatePresence>
  );

  function handleClose() {
    onClose();
  }

  return createPortal(modal, document.body);
}
