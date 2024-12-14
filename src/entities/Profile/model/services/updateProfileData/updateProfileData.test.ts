import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../validateProfileData/validateProfileData';

jest.mock('axios');

const data = {
  firstname: 'Vladislav',
  lastname: 'Pavlovich',
  age: 22,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'main admin',
  avatar: 'avatar',
};

describe('updateProfileData test', () => {
  test('updateProfileData 200', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
        isLoading: false,
        readonly: true,
      },
    });
    testAsyncThunk.api.put.mockReturnValue(Promise.resolve({
      data,
    }));

    const result = await testAsyncThunk.callThunk();

    expect(testAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('updateProfileData 403', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
        isLoading: false,
        readonly: true,
      },
    });
    testAsyncThunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await testAsyncThunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(testAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('updateProfileData validate error', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: {...data, firstname: ''},
        isLoading: false,
        readonly: true,
      },
    });

    const result = await testAsyncThunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(testAsyncThunk.api.put).not.toHaveBeenCalled();
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
