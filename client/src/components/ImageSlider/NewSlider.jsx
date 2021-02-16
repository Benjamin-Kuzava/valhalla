import "../ImageSlider/ImageSlider.css";
import { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
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
  }, [current, length]);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  if (!Array.isArray(newSliderData) || newSliderData.length <= 0) return null;

  return (
    <div className="newSlider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
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
