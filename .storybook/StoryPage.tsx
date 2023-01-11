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
import {DeprecationWarning} from "@sb/DeprecationWarning";

interface StoryPageProps {
  description: string; // supports markdown
  deprecationWarning?: string;
}

export const StoryPage = ({ description, deprecationWarning }: StoryPageProps) => {
  return (
    <AppWrapper>
      <Title />
      {deprecationWarning && <DeprecationWarning>{deprecationWarning}</DeprecationWarning>}
      <Description>{description}</Description>
      <Stories includePrimary={true} />
      <Heading>Props</Heading>
      <ArgsTable story={PRIMARY_STORY} />
    </AppWrapper>
  );
};
