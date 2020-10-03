import React from 'react'

import { CustomButtonContainer } from './custom-buttom.styles';

const CustomButton = ({ children, ...otherProps}) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton;