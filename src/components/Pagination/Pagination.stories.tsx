import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Pagination } from './Pagination';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/Pagination`,
  component: Pagination,
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
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Pagination
      {...args}
      rowsPerPage={rowsPerPage}
      currentPage={page}
      setCurrentPage={setPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  numberOfRows: 200,
  rowsPerPageOptions: [5, 10, 15, 20],
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
