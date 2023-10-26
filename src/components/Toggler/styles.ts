import styled, { css } from 'styled-components';

export const Toggler = styled.span`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.medium};

    &:hover {
      transform: ${theme.transform.vertical};
      transition: ${theme.transition.standard};
    }
  `}
`;
