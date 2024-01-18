import styled, { css } from 'styled-components';

interface Sizes {
  small: ReturnType<typeof css>;
  medium: ReturnType<typeof css>;
  large: ReturnType<typeof css>;
}

interface Variations {
  primary: ReturnType<typeof css>;
  secondary: ReturnType<typeof css>;
}

interface RoundedTypes {
  roundedSmall: ReturnType<typeof css>;
  roundedAll: ReturnType<typeof css>;
}

interface ButtonProps {
  size?: keyof Sizes;
  variation?: keyof Variations;
  roundedType?: keyof RoundedTypes;
}

const sizes: Sizes = {
  small: css`
    display: inline-block;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    display: inline-block;
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    display: inline-block;
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations: Variations = {
  primary: css`
    color: #fff;
    background-color: var(--color-primary-1);

    &:hover {
      background-color: hsl(180, 67%, 80%);
    }
  `,
  secondary: css`
    color: #fff;
    background: var(--color-primary-2);

    &:hover {
      background-color: hsl(258, 28%, 55%);
    }
  `,
};

const roundedType: RoundedTypes = {
  roundedSmall: css`
    border: none;
    border-radius: var(--border-radius-sm);
    font-weight: 700;
  `,
  roundedAll: css`
    border: none;
    border-radius: var(--border-radius-rounded);
    font-weight: 700;
  `,
};

const Button = styled.button<ButtonProps>`
  ${(props) => sizes[props.size || 'medium']}
  ${(props) => variations[props.variation || 'primary']}
  ${(props) => roundedType[props.roundedType || 'roundedSmall']}
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
  roundedType: 'roundedSmall',
};

export default Button;
