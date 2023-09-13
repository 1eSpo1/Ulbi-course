import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './BugButton.module.scss';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    function onThrow() {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            onClick={onThrow}
        >
            {t('Произошла ошибка')}
        </Button>
    );
};

export default BugButton;
