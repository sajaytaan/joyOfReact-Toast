import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import useEscapeKey from "../hooks";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, message, showAll }) {
  const { show, setShow } = useEscapeKey();
  if (!ICONS_BY_VARIANT[variant]) {
    throw new Error(
      `Unrecognized variant: ${
        variant ? variant : "undefined"
      } Expected variants: ${JSON.stringify(
        Object.keys(ICONS_BY_VARIANT)
      )}`
    );
  }

  const IconTag = ICONS_BY_VARIANT[variant];
  return (
    show && (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <IconTag size={24} />
        </div>
        <p className={styles.content}>{message}</p>
        <button
          className={styles.closeButton}
          onClick={() => setShow(false)}
        >
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
    )
  );
}

export default Toast;
