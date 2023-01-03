import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { tokens } from '@/DesignTokens';

import { Pagination } from '../Pagination';
import { RadioButton, RadioButtonSize } from '../RadioButton';
import type { DescriptionText } from '../Pagination/Pagination';

import { ScreenSize, Table } from './Table';
import { TableHeader } from './TableHeader';
import { SortDirection, TableCell } from './TableCell';
import type { RowData } from './TableRow';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import type { ChangeProps, SortProps } from './Context';
import { useTableContext } from './Context';
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
        />
      ),
    },
  },
  args: {
    //TODO: Add default args
  },
} as ComponentMeta<typeof Table>;

function createMobileData(Saksnr: string, Produkt: string, Status: string) {
  return {
    Saksnr,
    Produkt,
    Status,
  };
}

const rowsMobile = [
  createMobileData(
    '20220873',
    'Embalasje for snacksprodukter',
    'Under behandling',
  ),
  createMobileData(
    '20220590',
    'Apparat for rengjøring av sveisesøm',
    'Registert',
  ),
  createMobileData('20220827', 'Logo', 'Besluttet gjeldene'),
  createMobileData(
    '20220582',
    'Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe',
    'Registrert',
  ),
  createMobileData('20220408', 'Bil', 'Registert'),
  createMobileData('200208507', 'Vippesykkel', 'Besluttet gjeldende'),
  createMobileData('200812696', 'SHELL', 'Besluttet gjeldende'),
  createMobileData('201106591', 'DNB', 'Registrert'),
];

function createData(
  Saksnr: string,
  Produkt: string,
  Status: string,
  BildeSrc: string,
  BildeAlt: string,
) {
  return {
    Saksnr,
    Produkt,
    Status,
    BildeSrc,
    BildeAlt,
  };
}

const rows = [
  createData(
    '20220873',
    'Embalasje for snacksprodukter',
    'Under behandling',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png',
    'chipspose',
  ),
  createData(
    '20220590',
    'Apparat for rengjøring av sveisesøm',
    'Registert',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg',
    'apparat for rengjøring av sveisesøm',
  ),
  createData(
    '20220827',
    'Logo',
    'Besluttet gjeldene',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG',
    'logo',
  ),
  createData(
    '20220582',
    'Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe',
    'Registrert',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg',
    'bilde av handikaprampe',
  ),
  createData(
    '20220408',
    'Bil',
    'Registert',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg',
    'Bil',
  ),
  createData(
    '200208507',
    'Vippesykkel',
    'Besluttet gjeldende',
    'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg',
    'vippesykkel',
  ),
  createData(
    '200812696',
    'SHELL',
    'Besluttet gjeldende',
    'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg',
    'shell',
  ),
  createData(
    '201106591',
    'DNB',
    'Registrert',
    'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg',
    'dnb',
  ),
];

const MobileView = () => {
  const mobile: boolean = useMediaQuery(`(max-width: ${tokens.BreakpointsSm})`);
  if (mobile) {
    return true;
  } else {
    return false;
  }
};

const DecideLayout = () => {
  const mobile: boolean = MobileView();
  if (mobile) {
    return ScreenSize.Mobile;
  } else {
    return ScreenSize.Laptop;
  }
};

const Template: ComponentStory<typeof Table> = (args) => {
  const screenSize = DecideLayout();
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    sortedColumn: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const description: DescriptionText = {
    rowsPerPage: 'Rader per side',
    of: 'av',
    navigateFirstPage: 'Naviger til første side i tabell',
    previousPage: 'Forrige side i tabell',
    nextPage: 'Neste side i tabell',
    navigateLastPage: 'Naviger til siste side i tabell',
  };

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  const handleSortChange = ({
    sortedColumn,
    previousSortDirection,
  }: SortProps) => {
    if (previousSortDirection === SortDirection.Ascending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    } else if (previousSortDirection === SortDirection.Descending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Ascending,
      });
    } else {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeInCurrentPage = (newPage: number) => {
    setPage(newPage);
  };
  const handleRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
    const value: RowData = { Saksnr: event.target.value };
    setSelected(value);
  };
  const checkSelectedValue = (row: RowData) => {
    const value: RowData = { Saksnr: row.Saksnr };
    if (JSON.stringify(selected) == JSON.stringify(value)) {
      return true;
    }
    return false;
  };
  console.log(rowsMobile);

  const isMobile = () => {
    return (
      <Table
        selectRows={args.selectRows}
        onChange={handleChange}
        selectedValue={selected}
        screenSize={ScreenSize.Mobile}
      >
        <TableBody>
          {rowsMobile
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.Saksnr}
                rowData={{ Saksnr: row.Saksnr }}
              >
                {args.selectRows && (
                  <TableCell radiobutton={true}>
                    <RadioButton
                      name={row.Saksnr}
                      onChange={(event) => handleRadioButton(event)}
                      value={row.Saksnr}
                      checked={checkSelectedValue(row)}
                      label={row.Saksnr}
                      hideLabel={true}
                      size={RadioButtonSize.Xsmall}
                    ></RadioButton>
                  </TableCell>
                )}
                <TableCell mobileViewShownProperties={row}></TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>
              <Pagination
                numberOfRows={rows.length}
                rowsPerPageOptions={[5, 10, 15, 20]}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                currentPage={page}
                setCurrentPage={handleChangeInCurrentPage}
                descriptionTexts={description}
                screenSize={ScreenSize.Mobile}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  };

  const isLaptop = () => {
    return (
      <Table
        selectRows={args.selectRows}
        onChange={handleChange}
        selectedValue={selected}
        screenSize={ScreenSize.Laptop}
      >
        <TableHeader>
          <TableRow>
            {args.selectRows && <TableCell radiobutton={true}></TableCell>}
            <TableCell
              onChange={handleSortChange}
              sortKey={'Søknadsnr.'}
              sortDirecton={
                selectedSort.sortedColumn === 'Søknadsnr.'
                  ? selectedSort.sortDirection
                  : SortDirection.NotActive
              }
            >
              Søknadsnr.
            </TableCell>
            <TableCell
              sortKey={'Produkt'}
              onChange={handleSortChange}
              sortDirecton={
                selectedSort.sortedColumn === 'Produkt'
                  ? selectedSort.sortDirection
                  : SortDirection.NotActive
              }
            >
              Produkt
            </TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Bilde</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.Saksnr}
                rowData={{ Saksnr: row.Saksnr }}
              >
                {args.selectRows && (
                  <TableCell radiobutton={true}>
                    <RadioButton
                      name={row.Saksnr}
                      onChange={(event) => handleRadioButton(event)}
                      value={row.Saksnr}
                      checked={checkSelectedValue(row)}
                      label={row.Saksnr}
                      hideLabel={true}
                    ></RadioButton>
                  </TableCell>
                )}
                <TableCell>{row.Saksnr}</TableCell>
                <TableCell>{row.Produkt}</TableCell>
                <TableCell>{row.Status}</TableCell>
                <TableCell>
                  <img
                    className={cn(classes['checkmark'])}
                    src={row.BildeSrc}
                    alt={row.BildeAlt}
                  ></img>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>
              <Pagination
                numberOfRows={rows.length}
                rowsPerPageOptions={[5, 10, 15, 20]}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                currentPage={page}
                setCurrentPage={handleChangeInCurrentPage}
                descriptionTexts={description}
                screenSize={ScreenSize.Laptop}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  };

  return <>{screenSize === ScreenSize.Mobile ? isMobile() : isLaptop()}</>;
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
