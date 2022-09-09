import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { PageVariant } from './Context';
import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { Page } from './Page';
import classes from './Page.stories.module.css';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/Page`,
  component: Page,
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
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => {
  return (
    <div className={classes['showcase-container']}>
      <div className={classes['showcase-container__page-container']}>
        <Page variant={PageVariant.Primary}> </Page>
        <PageHeader>
          <span className={classes['page-header__text']}>
            Primary page variant for profilside
          </span>
        </PageHeader>
        <PageContent>
          <div className={classes['page-content__container']}>
            PageHeader med marineblå bakgrunn og pageContent med hvit bakgrunn
          </div>
        </PageContent>
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
