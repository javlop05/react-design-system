import React from 'react';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Success = Template.bind({});
Success.args = {
  text: 'Label',
  type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Be careful',
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  text: 'Wrong',
  type: 'error',
};
