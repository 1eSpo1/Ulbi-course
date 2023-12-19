import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFromText = (state: StateSchema) => state.addCommentFrom?.text ?? '';
export const getAddCommentFromError = (state: StateSchema) => state.addCommentFrom?.error;
// export const getAddCommentFrom = (state: StateSchema) => state.addCommentFrom?.;
