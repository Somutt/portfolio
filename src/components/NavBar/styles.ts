import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 120px;
      font-size: ${theme.font.sizes.default};
    }

    li {
      transition: ${theme.transition.fontColor};

      &:hover {
        transform: ${theme.transform.vertical};
        transition: ${theme.transition.vartical};
      }
    }

    .active {
      border-image: linear-gradient(90deg, #9089fb 0%, #9ef7ac 100%) 1;
      border-bottom: 4px solid;
    }

    .link {
      color: unset;
    }

    .link > h2 {
      font-size: ${theme.font.sizes.large};
    }

    @media ${theme.media.lteMedium} {
      ul {
        gap: 55px;
      }

      .link > h2 {
        font-size: ${theme.font.sizes.big};
      }
    }
  `}
`;
