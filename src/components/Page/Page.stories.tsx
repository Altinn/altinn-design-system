import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { PageColor } from './Context';
import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { Page } from './Page';
import classes from './Page.stories.module.css';
import { ReactComponent as ClientBold } from './ClientBold.svg';

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
        <Page color={PageColor.Primary}>
          <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
          <PageContent>PageContent</PageContent>
        </Page>
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
