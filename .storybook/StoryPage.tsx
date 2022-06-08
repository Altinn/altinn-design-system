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
  showStories?: boolean;
}

export const StoryPage = ({
  description,
  showStories = true,
}: StoryPageProps) => {
  return (
    <AppWrapper>
      <Title />
      <Description>{description}</Description>
      {showStories && (
        <>
          <Stories includePrimary={true} />
          <Heading>Props</Heading>
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )}
    </AppWrapper>
  );
};
