import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 25,
            country: Country.Russia,
            lastname: 'pupipu',
            first: 'alek',
            city: 'yarik',
            currency: Currency.RUB,
        };
        const state:DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });
    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
