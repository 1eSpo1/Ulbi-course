import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
}

export const Modal = ({ className }: ModalProps) => (
    <div className={classNames(cls.Modal, {}, [className])}>
        {}
    </div>
);
