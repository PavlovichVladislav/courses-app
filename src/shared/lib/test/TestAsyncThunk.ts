import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: AsyncThunk<Returned, Arg, {rejectValue: RejectedValue}>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFunction<any>;

  constructor(
    actionCreator: AsyncThunk<Returned, Arg, {rejectValue: RejectedValue}>,
    state?: Partial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

    return result;
  }
}
