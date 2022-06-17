import clsx from "clsx";
import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";

function Image({ image, title, author }) {
  const [dataIndex, setDataIndex] = useState(0);

  const next = useCallback(() => {
    if (dataIndex < image.length - 1) {
      setDataIndex((curr) => curr + 1);
    } else if (dataIndex === image.length - 1) {
      setDataIndex(0);
    }
  }, [image.length, dataIndex]);

  const prev = () => {
    if (dataIndex > 0) {
      setDataIndex((curr) => curr - 1);
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
    <div>
      <div className={styles.outer}>
        <button onClick={prev} className={clsx(styles.btn)}>
          ◀︎
        </button>
        <div className={styles.imgWrap}>
          <img src={image[dataIndex]} alt="cutie"></img>
        </div>
        <button onClick={next} className={clsx(styles.btn, styles.btnLeft)}>
          ▶︎
        </button>
      </div>
      <div className={styles.capWrap}>
        <div className={styles.caption}>"{title[dataIndex]}"</div>
        <div className={styles.author}>- {author[dataIndex]}</div>
      </div>
    </div>
  );
}

export default Image;
