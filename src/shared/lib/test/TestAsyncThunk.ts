import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  actionCreator: AsyncThunk<Returned, Arg, {rejectValue: RejectedValue}>;

  constructor(actionCreator: AsyncThunk<Returned, Arg, {rejectValue: RejectedValue}>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
