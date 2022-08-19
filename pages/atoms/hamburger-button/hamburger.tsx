import style from "../../organisms/navigation/navigation.module.scss";

const Hamburger = () => {
  return (
    <div role="hamburger" aria-label="hamburger button">
      <span className={style.navigationHamburgerBar}></span>
      <span className={style.navigationHamburgerBar}></span>
      <span className={style.navigationHamburgerBar}></span>
    </div>
  );
};

export default Hamburger;
