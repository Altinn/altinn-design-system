import React from 'react';

import tokens from '@altinn/figma-design-tokens';
import jsonTokens from '@altinn/figma-design-tokens/dist/tokens.json';

import '@altinn/figma-design-tokens/dist/tokens.css';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        padding: 'var(--space-standard)',
        paddingLeft: tokens.SpaceStandard,
        paddingRight: jsonTokens.space.standard.value,
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
