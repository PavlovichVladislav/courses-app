import { StateSchema } from 'app/providers/StoreProvider';

export const getCommetFormText = (state: StateSchema) => state.addCommentForm?.text || '';
export const getCommetFormError = (state: StateSchema) => state.addCommentForm?.error || '';
