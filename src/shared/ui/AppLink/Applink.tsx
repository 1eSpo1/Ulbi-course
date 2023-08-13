import React, { FC } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Applink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface ApplinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme, 
}

export const Applink: FC<ApplinkProps> = (props) => {
  const { 
    to, 
    children, 
    theme = AppLinkTheme.PRIMARY, 
    className, 
    ...OtherProps 
    } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.Applink, {}, [className, cls[theme]])}
      {...OtherProps}
    >
      {children}
    </Link>
  );
};

export default Applink;
