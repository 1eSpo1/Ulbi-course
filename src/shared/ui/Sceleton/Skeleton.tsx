import React, { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string | number
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        border,
        width,
    } = props;

    const styles: CSSProperties = {
        borderRadius: border,
        width,
        height,
    };
    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        >
            {}
        </div>
    );
});
