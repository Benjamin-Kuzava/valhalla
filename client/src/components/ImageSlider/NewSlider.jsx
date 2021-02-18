import "../ImageSlider/ImageSlider.css";
import { useState, useRef, useEffect } from "react";
import { newSliderData } from "./NewSliderData";

const NewSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = newSliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeout.current);
    // return false;
  }, [current, length]);

  return (
    <div className="newSlider">
      {newSliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image2} alt="island-image" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NewSlider;
