import clsx from "clsx";
import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";

function Image({ image }) {
  const [imgIndex, setImgIndex] = useState(0);

  const next = useCallback(() => {
    if (imgIndex < image.length - 1) {
      setImgIndex((curr) => curr + 1);
    }
  }, [image.length, imgIndex]);

  const prev = () => {
    if (imgIndex > 0) {
      setImgIndex((curr) => curr - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [next]);

  return (
    <div className={styles.outer}>
      <button onClick={prev} className={clsx(styles.btn)}>
        ◀︎
      </button>
      <div className={styles.imgWrap}>
        <img src={image[imgIndex]} alt="cutie"></img>
      </div>
      <button onClick={next} className={clsx(styles.btn, styles.btnLeft)}>
        ▶︎
      </button>
    </div>
  );
}

export default Image;
