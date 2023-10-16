import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwither from 'widgets/LangSwitcher/LangSwither';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import Button, { ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
        console.log('на меня нажали', collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
