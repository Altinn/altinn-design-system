import React from 'react';

import tokens from '@altinn/figma-design-tokens';
import jsonTokens from '@altinn/figma-design-tokens/dist/tokens.json';
import '@altinn/figma-design-tokens/dist/tokens.css';

import './styles.css';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="ads-button"
      style={{
        paddingBottom: 'var(--space-tight)',
        paddingLeft: tokens.SpaceStandard,
        paddingRight: jsonTokens.space.standard.value,
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
