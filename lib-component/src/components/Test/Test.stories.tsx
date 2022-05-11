import React from 'react';
import { Story, Meta } from '@storybook/react';
import Test  from './Test';
import 'bootstrap/dist/css/bootstrap.css';
export default {
  title: 'Lib-Component/Test',
  component: Test,
  argTypes: {
  },
} as Meta<typeof Test>;

const Template: Story = () => <Test language='en' />;

export const TestTemplate = Template.bind({});
