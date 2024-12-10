import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData test', () => {
  test('fetchProfileData 200', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchProfileData);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({
      data,
    }));

    const result = await testAsyncThunk.callThunk();

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('fetchProfileData 403', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchProfileData);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await testAsyncThunk.callThunk();

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Empty server response');
  });
});
