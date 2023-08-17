import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwither.module.scss';

interface LangSwitherProps {
  className?: string
}

export const LangSwither = ({ className }: LangSwitherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (

        <Button
            className={classNames(cls.LangSwither, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Перевод')}
        </Button>

    );
};

export default LangSwither;
