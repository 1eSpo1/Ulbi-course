import React, { useState } from "react"
import { classNames } from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from "widgets/ThemeSwitcher";


interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed( prev => !prev)
        console.log('на меня нажали', collapsed);
        
    }

  return (
    <div 
        className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
    >
        <button onClick={onToggle}>toggle</button>
        <div className={cls.swithers}>
            <ThemeSwitcher className=""/>
        </div>
    </div>
  );
}

export default Sidebar;