import React from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variant, message, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} message={message} />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
