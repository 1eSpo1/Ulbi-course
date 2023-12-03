import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return data', () => {
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
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
