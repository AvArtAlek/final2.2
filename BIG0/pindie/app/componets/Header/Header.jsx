"use client";

import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import Link from "next/link";
import { useStore } from "@/app/store/app-store";
import { useState} from "react";
import { usePathname} from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [popupIsOpened, setPopupIsOpened] = useState(false);
  
  const openPopup = () => {
    setPopupIsOpened(true);
  };
  const closePopup = () => {
    setPopupIsOpened(false);
  };
  // Сохраняем в authContext хук-хранилище
  const authContext = useStore();

  const handleLogout = () => {
    authContext.logout(); // Используем метод logout из хранилища
  };

  return (
    <header className={Styles["header"]}>
      {pathname === "/" ? (
        <span className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </span>
      ) : (
        <Link href="/" className={Styles["logo"]}>
          <img
            className={Styles["logo__image"]}
            src="/images/logo.svg"
            alt="Логотип Pindie"
          />
        </Link>
      )}
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" && Styles["menu__link_active"]
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/popular"
              className={`${Styles["menu__link"]} ${
                pathname === "/popular" && Styles["menu__link_active"]
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooters"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooters" && Styles["menu__link_active"]
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runner"
              className={`${Styles["menu__link"]} ${
                pathname === "/runner" && Styles["menu__link_active"]
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel" && Styles["menu__link_active"]
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/TDS"
              className={`${Styles["menu__link"]} ${
                pathname === "/TDS" && Styles["menu__link_active"]
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {authContext.isAuth ? (
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button className={Styles["auth__button"]} onClick={openPopup}>
              Войти
            </button>
          )}
          
        </div>
      </nav>
      <Overlay IsOpened={popupIsOpened} close={closePopup} />
      <Popup IsOpened={popupIsOpened} close={closePopup}>
        <AuthForm close={closePopup}/>
      </Popup>
    </header>
  )}