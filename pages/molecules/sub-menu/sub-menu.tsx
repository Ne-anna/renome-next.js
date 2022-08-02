import { BackButtonTitle, MenuData } from "../../../data";
import SubMenuBack from "../../atoms/subMenu-back-button/submenu-back";
import style from "../sub-menu/sub-menu.module.scss";

interface SubMenuProps {
  menuData: MenuData;
  backButton: BackButtonTitle;
}

export default function SubMenu(props: SubMenuProps) {
  return (
    <div className={style.subMenu}>
      <div
        className={style.subMenuItemBack}
        onClick={props.menuData.closeSubMenu}
      >
        <SubMenuBack
          buttonBackPath={props.backButton.buttonBackPath}
          buttonBackAltTag={props.backButton.buttonBackAltTag}
        />
        <p className={style.subMenuTextBack}>{props.backButton.title}</p>
      </div>
      {props.menuData.menu.map((post, menuIndex) => {
        return typeof post.subMenu == "object" ? (
          <div key={menuIndex}>
            {post.subMenu.map((post, subMenuIndex) => (
              <div className={style.subMenuItem} key={subMenuIndex}>
                <p className={style.subMenuText}>{post.title}</p>
              </div>
            ))}
          </div>
        ) : null;
      })}
    </div>
  );
}
