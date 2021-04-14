import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import { Icon } from "@/components/Icon";

import styles from "./Toast.module.css";

interface ToastFullProps {
  readonly id: number;
  readonly status?: "success" | "error";
  readonly message: string;
}

export interface ToastRef {
  notify(props: ToastProps): void;
}

export type ToastProps = Omit<ToastFullProps, "id">;

export const Toast = forwardRef(ToastInternal);

export function ToastInternal(_, ref) {
  const [toastId, setToastId] = useState(0);
  const [toasts, setToasts] = useState<ToastFullProps[]>([]);

  useImperativeHandle(ref, () => ({
    notify: ({ status = "success", message }: ToastProps) => {
      setToastId(toastId + 1);
      setToasts([{ id: toastId, status, message }, ...toasts]);
    },
  }));

  const toast = (
    <div className={styles.container}>
      {toasts.map(({ status, message, id }: ToastFullProps) => (
        <Slice status={status} message={message} key={id} />
      ))}
    </div>
  );

  if (typeof window === "undefined") {
    return <></>;
  }

  return createPortal(toast, document.body);
}

function Slice({ status, message }: ToastProps) {
  const [open, setOpen] = useState(true);
  const timer = 5000;

  setTimeout(() => {
    setOpen(false);
  }, timer);

  const toastClass = classnames(styles.toast, styles[status]);
  const timerClass = classnames(styles.timer, styles[status]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={toastClass}
          initial={{ opacity: 0, translateY: "50%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          exit={{ opacity: 0, translateY: "10%" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.icon}>
            <Icon icon={status === "success" ? "Check" : "X"} />
          </div>
          {message}
          <motion.div
            className={timerClass}
            initial={{ opacity: 1, width: "100%" }}
            animate={{ opacity: 0.5, width: "0%" }}
            transition={{ duration: timer / 1000, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
