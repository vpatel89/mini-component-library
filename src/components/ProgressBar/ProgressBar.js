/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Wrapper;
  if (size === 'small') {
    Wrapper = SmallBar;
  } else if (size === 'medium') {
    Wrapper = MediumBar;
  } else if (size === 'large') {
    Wrapper = LargeBar;
  } else {
    throw new Error('Unknown Size passed to Progress Bar: ' + size);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Bar style={{ '--width': value + '%' }} />
      </BarWrapper>
    </Wrapper>
  )
};

const BarStyle = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `;

const BarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden; /* hiding the bar if it spills */
`;

const Bar = styled.div`
  width: var(--width);
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

const SmallBar = styled(BarStyle)`
  height: 8px;
  border-radius: 4px;
  padding: 0;
`;

const MediumBar = styled(BarStyle)`
  height: 12px;
  border-radius: 4px;
  padding: 0;
`;

const LargeBar = styled(BarStyle)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

export default ProgressBar;
