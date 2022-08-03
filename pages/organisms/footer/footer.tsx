import { FooterData } from "../../../data";
import FooterIcon from "../../molecules/footer-icon/footer-icon";
import style from "../footer/footer.module.scss";

export default function Footer(props: FooterData) {
  return (
    <div className={style.footer}>
      <h5 className={style.footerTitle}>{props.title}</h5>
      <div className={style.footerSocialMedia}>
        <div className={style.footerIcon}>
          {props.footerIcons.map((items, index) => {
            return (
              <div key={index}>
                <FooterIcon
                  icon={items.icon}
                  altTag={items.altTag}
                  id={items.id}
                />
              </div>
            );
          })}
        </div>
      </div>

      <h2 className={style.footerLogo}>{props.logo}</h2>
      <h5 className={style.copyright}>{props.copyright}</h5>
    </div>
  );
}
