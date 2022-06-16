import { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.scss";

function Image({ image }) {
  const [imgNum, setImgNum] = useState(0);

  const next = useCallback(() => {
    if (imgNum < image.length - 1) {
      setImgNum((curr) => curr + 1);
    }
  }, [image.length, imgNum]);

  const prev = () => {
    if (imgNum > 0) {
      setImgNum((curr) => curr - 1);
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
      <button onClick={prev}>back</button>
      <div className={styles.imgWrap}>
        <img src={image[imgNum]} alt="cutie"></img>
      </div>
      <button onClick={next}>next</button>
    </div>
  );
}

export default Image;
