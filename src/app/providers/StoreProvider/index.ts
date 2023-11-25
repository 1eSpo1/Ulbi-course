import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/strore';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkConfig,
};
