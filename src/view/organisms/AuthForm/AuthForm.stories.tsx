import { AuthForm } from './AuthForm';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Design system/organisms/Form',
  component: AuthForm,
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = () => <AuthForm />;

export const index = Template.bind({});
