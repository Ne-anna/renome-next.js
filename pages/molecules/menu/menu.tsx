import { MenuData } from "../../../data";
import style from "../menu/menu.module.scss";
import Search from "../search-button/search-button";

interface MenuProps {
  menuData: MenuData;
}

export default function Menu(props: MenuProps) {
  return (
    <div className={style.menu}>
      <div className={style.scroll}>
        {props.menuData.menu.map((post, index) => {
          return (
            <li
              key={index}
              className={`${style.item} ${
                post.isSubMenu
                  ? style.itemFeatures
                  : post.title === "Search"
                  ? style.itemSearch
                  : ""
              }`}
            >
              {post.title === "Search" ? (
                <>
                  <input className={style.input} placeholder={post.title} />
                  <Search
                    buttonSearchPath={post.buttonSearchPath}
                    searchAltTag={post.searchAltTag}
                  />
                </>
              ) : post.title === "Features" ? (
                <div
                  className={style.itemFeatures}
                  // onClick={props.openSubMenu}
                >
                  <a className={style.link} href={post.url}>
                    {post.title}
                  </a>
                  <div>
                    {/* <FeaturesNext
                      buttonNextPath={post.buttonNextPath}
                      buttonNextAltTag={post.buttonNextAltTag}
                    /> */}
                  </div>
                </div>
              ) : (
                <a className={style.link} href={post.url}>
                  {post.title}
                </a>
              )}
            </li>
          );
        })}
      </div>
    </div>
  );
}