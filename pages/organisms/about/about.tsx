import style from "../../../styles/about.module.scss";
import { AboutData } from "../../../data";

export default function About(props: AboutData) {
  return (
    <div className={style.aboutContainer}>
      <h1 className={style.aboutTitle}>{props.title}</h1>
      <h5 className={style.aboutSubTitle}>{props.subTitle}</h5>
      <p className={style.aboutParagraph}>{props.text}</p>
    </div>
  );
}
