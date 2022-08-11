import style from "../carousel-next-button/carousel-next-button.module.scss";
import Image from "next/image";
import { CarouselButton } from "../../../data";

export default function CarouselPreviousButton(props: CarouselButton) {
  return (
    <button
      className={style.carouselButton}
      onClick={props.loadPreviousSlide}
      aria-label="previous button"
    >
      {props.carouselButtonPrevious && (
        <Image
          src={props.carouselButtonPrevious}
          alt={props.altTagPrevious}
          width={28}
          height={28}
        />
      )}
    </button>
  );
}
