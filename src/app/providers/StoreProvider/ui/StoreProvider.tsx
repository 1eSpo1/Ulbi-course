import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/strore';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import cls from './StoreProvider.module.scss';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
