import Styles from "./Overlay.module.css";

export const Overlay = (props) => {
  return (
    <div
      className={`${Styles["overlay"]} ${props.IsOpened && Styles["overlay_is-opened"]}`}
      onClick={props.closePopup}
    ></div>
  );
};
