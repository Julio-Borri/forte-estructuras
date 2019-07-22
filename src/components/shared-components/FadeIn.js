import styled, { keyframes } from 'styled-components';

const fadeInConst = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`
const FadeIn = styled.div`
  animation: ${fadeInConst} ${props => props.sec} ease;
  animation-iteration-count: 1;
`

export default FadeIn;