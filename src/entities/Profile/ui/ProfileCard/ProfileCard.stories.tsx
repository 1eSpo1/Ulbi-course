import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from '../../../../shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

// @ts-ignore
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 25,
        country: Country.Russia,
        lastname: 'pupipu',
        first: 'alek',
        city: 'yarik',
        currency: Currency.RUB,
        avatar,
    },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
