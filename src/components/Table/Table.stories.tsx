import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';
import type { ResponsiveTableConfig } from '@/components/Table/ResponsiveTable';
import { ResponsiveTable } from '@/components/Table/ResponsiveTable';
import { descriptionTexts } from '@/components/Pagination/Pagination.stories';
import type { MyExampleTableData } from '@/components/Table/ExampleData';
import { getExampleTableRows } from '@/components/Table/ExampleData';

import { Pagination } from '../Pagination';
import { RadioButton } from '../RadioButton';

import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { SortDirection } from './Toolbox';
import classes from './Table.stories.module.css';
import { TableFooter } from './TableFooter';

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
          deprecationWarning={`Use Table from @digdir/design-system-react instead.`}
        />
      ),
    },
  },
  args: {
    //TODO: Add default args
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(
    undefined,
  );
  const [sortColumn, setSortColumn] = useState<
    keyof MyExampleTableData | undefined
  >(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NotActive,
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const { rows, totalNum } = getExampleTableRows({
    page,
    rowsPerPage,
    sortColumn,
    sortDirection,
  });

  return (
    <Table
      selectRows={args.selectRows}
      onChange={({ selectedValue }) => setSelected(selectedValue)}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell
            onChange={({ next }) => {
              setSortColumn('caseNum');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'caseNum' ? sortDirection : SortDirection.NotActive
            }
          >
            Søknadsnr.
          </TableCell>
          <TableCell
            onChange={({ next }) => {
              setSortColumn('product');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'product' ? sortDirection : SortDirection.NotActive
            }
          >
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.caseNum}
            rowData={{ caseNum: row.caseNum }}
          >
            {args.selectRows && (
              <TableCell radiobutton={true}>
                <RadioButton
                  name={`${row.caseNum}`}
                  onChange={() => setSelected(row)}
                  value={`${row.caseNum}`}
                  checked={selected?.caseNum === row.caseNum}
                  label={`${row.caseNum}`}
                  hideLabel={true}
                ></RadioButton>
              </TableCell>
            )}
            <TableCell>{row.caseNum}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <img
                className={cn(classes['checkmark'])}
                src={row.image.src}
                alt={row.image.alt}
              ></img>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination
              numberOfRows={totalNum}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
              }}
              currentPage={page}
              setCurrentPage={(newPage) => setPage(newPage)}
              descriptionTexts={descriptionTexts}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

const ResponsiveTemplate: ComponentStory<typeof ResponsiveTable> = () => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(
    undefined,
  );
  const [sortColumn, setSortColumn] = useState<
    keyof MyExampleTableData | undefined
  >(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NotActive,
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const { rows, totalNum } = getExampleTableRows({
    rowsPerPage,
    page,
    sortColumn,
    sortDirection,
  });

  const config: ResponsiveTableConfig<MyExampleTableData> = {
    rows,
    headers: {
      caseNum: 'Søknadsnr.',
      product: 'Produkt',
      status: 'Status',
      image: 'Bilde',
    },
    showColumnsMobile: ['product', 'caseNum', 'status'],
    columnSort: {
      onSortChange: ({ column, next }) => {
        setSortColumn(column);
        setSortDirection(next);
      },
      sortable: ['caseNum', 'product'],
      currentlySortedColumn: sortColumn,
      currentDirection: sortDirection,
    },
    renderCell: {
      image: (imageObj) => (
        <img
          className={cn(classes['checkmark'])}
          src={imageObj.src}
          alt={imageObj.alt}
        />
      ),
    },
    rowSelection: {
      onSelectionChange: (row) => setSelected(row),
      selectedValue: selected,
    },
    footer: (
      <Pagination
        numberOfRows={totalNum}
        rowsPerPageOptions={[5, 10, 15, 20]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        currentPage={page}
        setCurrentPage={(newPage) => setPage(newPage)}
        descriptionTexts={descriptionTexts}
      />
    ),
  };

  return <ResponsiveTable config={config} />;
};

export const BasicTable = Template.bind({});
BasicTable.args = {
  selectRows: false,
};
BasicTable.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SelectRows = Template.bind({});
SelectRows.args = {
  selectRows: true,
};
SelectRows.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Responsive = ResponsiveTemplate.bind({});
Responsive.args = {};
Responsive.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
