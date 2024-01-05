import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf";

import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const {
    message,
    setMessage,
    variant,
    setVariant,
    handleToast,
    VARIANT_OPTIONS,
  } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((variantRef) => {
              return (
                <label
                  key={variantRef}
                  htmlFor={`variant-${variantRef}`}
                >
                  <input
                    id={`variant-${variantRef}`}
                    type='radio'
                    name='variant'
                    value={variantRef}
                    checked={variantRef === variant}
                    onChange={() => setVariant(variantRef)}
                  />
                  {variantRef}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
