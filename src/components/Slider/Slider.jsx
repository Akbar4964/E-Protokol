import React, { useEffect, useState } from "react";
import { Sliders } from "./style";
import {
  MainPageSecurityImg,
  MainPageLikeImg,
  MainPageTimeImg,
} from "../../assets/icons";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title:
        "Ovoz berish yopiq aloqa kanallari orqali amalga oshiriladi, bu hujjat mazmunidagi o'zgarishlardan va imzo qalbakilashtirishdan himoya qiladi",
      content: MainPageSecurityImg,
    },
    {
      id: 2,
      title:
        "Yig'ilishda qatnashish masofadan qat'iy nazar ishtirok etishingiz mumkin. Sizga kerak bo'lgan yagona narsa-Internetga kirish, kompyuter, planshet yoki smartfon",
      content: MainPageLikeImg,
    },
    {
      id: 3,
      title:
        "Oddiy xat o'rtacha 10-20 kun ichida etkazib beriladi. Elektron pochta xabarnomasi darhol",
      content: MainPageTimeImg,
    },
  ];

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timerId);
  }, [currentIndex, slides.length]);

  return (
    <Sliders>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${currentIndex === index ? "active" : ""} row1`}
        >
          <h2>{slide.title}</h2>
          <img className="security" src={slide.content} alt="" />
        </div>
      ))}
    </Sliders>
  );
};

export default Slider;
