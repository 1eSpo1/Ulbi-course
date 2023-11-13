import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'textasdadsdssadsa',
};

export const Error = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'textasdadsdssadsa',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'textasdadsdssadsa',
};

export const PrimaryDark = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'textasdadsdssadsa',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyText.args = {
    text: 'textasdadsdssadsa',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
