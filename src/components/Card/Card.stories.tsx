import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Card } from './Card';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardVariant } from './Context';
import classes from './Card.stories.module.css';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/Card`,
  component: Card,
  parameters: {
    design: config([
      {
        type: 'figma',
        url: figmaLink,
      },
      {
        type: 'link',
        url: figmaLink,
      },
    ]),
    docs: {
      page: () => (
        <StoryPage
          description={`TODO: Add a description (supports markdown)`}
        />
      ),
    },
  },
  args: {
    //TODO: Add default args
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => {
  return (
    <div className={classes['showcase-container']}>
      <div className={classes['card-container']}>
        <Card cardVariant={CardVariant.ProfilePrimaryCard}>
          <CardHeader>
            <span className={classes['card-header__text']}>
              Primary card på profilside
            </span>
          </CardHeader>
          <CardContent>
            <div className={classes['card-content']}>
              CardHeader med marineblå bakgrunn og cardContent med hvit bakgrunn
            </div>
          </CardContent>
        </Card>
      </div>
      <div className={classes['card-container']}>
        <Card cardVariant={CardVariant.Unstyled}>
          <CardHeader>
            <div className={classes['card-header--unstyled']}>
              <span className={classes['card-header__text']}>
                Unstyled card for custom styling
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className={
                (classes['card-content'], classes['card-content--unstyled'])
              }
            >
              CardHeader og CardContents stylet kun med children
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  // TODO: Add story specific args
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
