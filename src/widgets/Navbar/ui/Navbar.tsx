import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import Applink, { AppLinkTheme } from "shared/ui/AppLink/Applink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        
      <div className={cls.links}>
        <Applink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Главная
        </Applink>
        <Applink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О сайте
        </Applink>
      </div>
    </div>
  );
}

export default Navbar;
