import { GalleryData } from "../../../data";
import GalleryImage from "../../molecules/gallery-image/gallery-image";
import style from "../gallery/gallery.module.scss";

export default function Gallery(props: GalleryData) {
  return (
    <div className={style.gallery}>
      <h1 className={style.galleryTitle}>{props.title}</h1>
      <h5 className={style.gallerySubtitle}>{props.subTitle}</h5>
      <div className={style.galleryImageContainer}>
        {props.galleryImages.map((image, index) => {
          return (
            <div className={style.galleryImageContainerImg} key={index}>
              <>
                <GalleryImage path={image.path} altTag={image.altTag} />
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}
