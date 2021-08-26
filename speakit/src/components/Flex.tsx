import React from "react";
import styled from "styled-components";

interface StyledFlexProps {
  display: string;
  direction: string;
  align: string;
  justify: string;
  margin: string;
};

const StyledFlex = styled.div<StyledFlexProps>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'row'};
justify-content: ${props => props.justify || 'row'};
margin:${({ margin }) => margin || '0'};
`;

const Flex = (props: StyledFlexProps) => {
  return <StyledFlex {...props} />
};

export default Flex;
