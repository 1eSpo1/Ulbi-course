import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import LangSwither from 'widgets/LangSwitcher/LangSwither'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
        console.log('на меня нажали', collapsed)
    }

  return (
        <div
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
          <button onClick={onToggle}>toggle</button>
          <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang}/>
            </div>
      </div>
  );
}

export default Sidebar
