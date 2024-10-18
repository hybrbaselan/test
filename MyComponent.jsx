import React from 'react';
import { Button } from 'antd';

const MyComponent = ({ text }) => {
  return (
      <>
      <p>{text}</p>
      <Button type="primary">Click me</Button>
      </>
  );
};

export default MyComponent;