import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/strore';
import type { StateSchema, ReduxStoreWithManager } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
};
