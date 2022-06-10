import React from 'react';
import {
  Title,
  ArgsTable,
  Stories,
  Description,
  Heading,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { AppWrapper } from '@/components/AppWrapper/AppWrapper';

interface StoryPageProps {
  description: string; // supports markdown
}

export const StoryPage = ({ description }: StoryPageProps) => {
  return (
    <AppWrapper>
      <Title />
      <Description>{description}</Description>
      <Stories includePrimary={true} />
      <Heading>Props</Heading>
      <ArgsTable story={PRIMARY_STORY} />
    </AppWrapper>
  );
};
