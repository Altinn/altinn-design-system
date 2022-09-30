import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import type { ChangeProps } from './Context';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: `Components/Table`,
  component: Table,
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
} as ComponentMeta<typeof Table>;

function createData(applicationNr: string, product: string, status: string) {
  return {
    applicationNr,
    product,
    status,
  };
}

const rows = [
  createData('20220873', 'Embalasje for snacksprodukter', 'Under behandling'),
  createData('20220590', 'Apparat for rengjøring av sveisesøm', 'Registert'),
  createData('20220827', 'Logo', 'Besluttet gjeldene'),
  createData(
    '20220582',
    'Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe',
    'Registrert',
  ),
  createData('20220408', 'Bil', 'Registert'),
];

const Template: ComponentStory<typeof Table> = (args) => {
  const [selected, setSelected] = useState('');

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  return (
    <Table
      radiobutton={args.radiobutton}
      onChange={handleChange}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          <TableCell>Søknadsnr.</TableCell>
          <TableCell>Produkt</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.applicationNr}
            value={row.applicationNr}
          >
            <TableCell>{row.applicationNr}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const BasicTable = Template.bind({});
BasicTable.args = {
  radiobutton: false,
};
BasicTable.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  radiobutton: true,
};
RadioButton.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
