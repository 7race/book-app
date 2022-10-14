import { Input } from './Input';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Design system/atoms/Input (textField mui)',
  component: Input,
  argTypes: {
    label: {
      type: 'string',
    },
    variant: {
      control: { type: 'radio' },
      options: ['outlined', 'filled', 'standard'],
      defaultValue: 'outlined',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const index = Template.bind({});
