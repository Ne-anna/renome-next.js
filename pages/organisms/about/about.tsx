import style from "../about/about.module.scss";
import Grid from "../../molecules/grid-images/grid";
import { AboutData, Images } from "../../../data";
interface AboutDataProps {
  textData: AboutData;
  imageData: Images;
}

export default function About(props: AboutDataProps) {
  return (
    <div className={style.aboutContainer}>
      <div data-testid="GridID">
        <Grid
          altTagBack={props.imageData.altTagBack}
          top={props.imageData.top}
          bottom={props.imageData.bottom}
          altTagFront={props.imageData.altTagFront}
        />
      </div>
      <div className={style.about}>
        <h1 className={style.aboutTitle}>{props.textData.title}</h1>
        <h5 className={style.aboutSubTitle}>{props.textData.subTitle}</h5>
        <p className={style.aboutParagraph}>{props.textData.text}</p>
      </div>
    </div>
  );
}
