import { Button } from './Button';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Design system/atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const index = Template.bind({});

index.args = {
  children: 'Click',
};
