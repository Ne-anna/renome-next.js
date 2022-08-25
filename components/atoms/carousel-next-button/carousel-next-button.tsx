import style from "../carousel-next-button/carousel-next-button.module.scss";
import Image from "next/image";
import { CarouselButton } from "../../../data";

export default function CarouselNextButton(props: CarouselButton) {
  return (
    <button className={style.carouselButton} onClick={props.loadNextSlide}>
      {props.carouselButtonNext && (
        <Image
          src={props.carouselButtonNext}
          alt={props.altTagNext}
          width={28}
          height={28}
        />
      )}
    </button>
  );
}
