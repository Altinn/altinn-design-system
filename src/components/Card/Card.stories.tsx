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
      <div className={classes['showcase-container__card-container']}>
        <Card variant={CardVariant.Primary}>
          <CardHeader>
            <span className={classes['card-header__text']}>
              Primary card variant for profilside
            </span>
          </CardHeader>
          <CardContent>
            <div className={classes['card-content__container']}>
              CardHeader med marineblå bakgrunn og cardContent med hvit bakgrunn
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  // TODO: Add story specific args
};
Primary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
