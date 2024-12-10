import { StateSchema } from 'app/providers/StoreProvider';

export const getValidatePorfileErrors = (state: StateSchema) => state.profile?.validateErrors || [];
