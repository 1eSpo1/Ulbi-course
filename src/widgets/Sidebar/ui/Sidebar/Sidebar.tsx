import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwither from 'widgets/LangSwitcher/LangSwither';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
        console.log('на меня нажали', collapsed);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
