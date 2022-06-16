import { useEffect, useState } from "react";

function Carousel() {
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch("https://www.reddit.com/r/aww/top/.json?t=all")
      .then((res) => res.json())
      .then((data) => {
        // filter out urls that return an img from an array of objects
        // TODO: REFACTOR WITH REGEX
        const allDataObj = data.data.children;
        for (let i = 0; i < allDataObj.length; i++) {
          if (allDataObj[i].data.url_overridden_by_dest.slice(-3) === "jpg")
            setImg((curr) => {
              return [...curr, allDataObj[i].data.url_overridden_by_dest];
            });
        }
      });
  }, []);

  return (
    <div>
      <div>img img img</div>
      {img.length > 0
        ? img.map((x) => {
            return <img src={x} alt="random"></img>;
          })
        : null}
    </div>
  );
}

export default Carousel;
