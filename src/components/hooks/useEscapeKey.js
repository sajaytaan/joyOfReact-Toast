import React from "react";

const useEscapeKey = () => {
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    // TODO
    function handleEscapeKey(e) {
      if (e.code !== "Escape") {
        return;
      }
      setShow(false);
    }
    window.addEventListener("keydown", handleEscapeKey);

    return () =>
      window.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return { show, setShow };
};

export default useEscapeKey;
