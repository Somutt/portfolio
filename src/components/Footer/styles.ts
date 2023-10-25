import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;
    opacity: 0.7;
  `}
`;
