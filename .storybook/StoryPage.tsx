import React from 'react';
import {
  Title,
  ArgsTable,
  Stories,
  Description,
  Heading,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

interface StoryPageProps {
  description: string; // supports markdown
}

export const StoryPage = ({ description }: StoryPageProps) => {
  return (
    <div>
      <Title />
      <Description>{description}</Description>
      <Stories includePrimary={true} />
      <Heading>Props</Heading>
      <ArgsTable story={PRIMARY_STORY} />
    </div>
  );
};
