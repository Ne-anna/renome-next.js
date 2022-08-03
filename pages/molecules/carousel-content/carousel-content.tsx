import { CarouselData } from "../../../data";
import style from "../carousel-content/carousel-content.module.scss";
import Image from "next/image";

export default function CarouselContent(props: CarouselData) {
  return (
    <div className={style.container}>
      {props.carousel.map((post, index) => {
        return (
          <div
            className={`${style.item} ${
              index < 1 && props.blockAnimation
                ? style.animationBlocked
                : props.slideIndex === index + 1
                ? style["active-" + props.slideDirection]
                : props.prevSlide === index + 1
                ? style["item-" + props.slideDirection]
                : style.animationActive
            } `}
            key={index}
          >
            <div
              className={`${style.text} ${
                index < 1 && props.blockAnimation
                  ? style.animationBlocked
                  : props.slideIndex === index + 1
                  ? style["text-" + props.slideDirection]
                  : style.animationActive
              } `}
            >
              <h2 className={style.title}>{post.title}</h2>
              <h5 className={style.subtitle}>{post.subTitle}</h5>
            </div>
            <div>
              <Image
                src={post.path}
                alt={post.altTag}
                width={390}
                height={490}
                layout="responsive"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
