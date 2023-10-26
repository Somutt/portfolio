import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 15vh);

    .portfolio {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      padding: 20px 0 20px 0;

      > a {
        color: unset;
        font-size: ${theme.font.sizes.default};
        padding: 8px;
        border: 2px solid;
        border-radius: 25px;

        > span {
          font-size: ${theme.font.sizes.default};
          margin-left: 3px;
        }
      }
    }
  `}
`;
