import styled from '../../../utils/styled-components';

const StyledInput = styled<{}, 'div'>('div')`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export default StyledInput;
