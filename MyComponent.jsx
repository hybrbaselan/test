import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const MyComponent = ({ text }) => {
  return (
    <>
      <StyledParagraph>{text}</StyledParagraph>
    </>
  );
};

export default MyComponent;