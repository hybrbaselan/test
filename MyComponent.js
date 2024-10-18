import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';

const MyComponent = ({ text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <p>{text}</p>
      <Button type="primary">Click me</Button>
    </motion.div>
  );
};

export default MyComponent;