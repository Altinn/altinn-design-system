import { SortDirection } from './Toolbox';

export interface MyExampleTableData {
  caseNum: number;
  product: string;
  status: string;
  image: { src: string; alt: string };
}

const myExampleRows: MyExampleTableData[] = [
  {
    caseNum: 20220873,
    product: 'Embalasje for snacksprodukter',
    status: 'Under behandling',
    image: {
      src: 'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png',
      alt: 'chipspose',
    },
  },
  {
    caseNum: 20220590,
    product: 'Apparat for rengjøring av sveisesøm',
    status: 'Registert',
    image: {
      src: 'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg',
      alt: 'apparat for rengjøring av sveisesøm',
    },
  },
  {
    caseNum: 20220827,
    product: 'Logo',
    status: 'Besluttet gjeldene',
    image: {
      src: 'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG',
      alt: 'logo',
    },
  },
  {
    caseNum: 20220582,
    product:
      'Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe',
    status: 'Registrert',
    image: {
      src: 'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg',
      alt: 'bilde av handikaprampe',
    },
  },
  {
    caseNum: 20220408,
    product: 'Bil',
    status: 'Registert',
    image: {
      src: 'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg',
      alt: 'Bil',
    },
  },
  {
    caseNum: 20208507,
    product: 'Vippesykkel',
    status: 'Besluttet gjeldende',
    image: {
      src: 'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg',
      alt: 'vippesykkel',
    },
  },
  {
    caseNum: 20081269,
    product: 'SHELL',
    status: 'Besluttet gjeldende',
    image: {
      src: 'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg',
      alt: 'shell',
    },
  },
  {
    caseNum: 20110659,
    product: 'DNB',
    status: 'Registrert',
    image: {
      src: 'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg',
      alt: 'dnb',
    },
  },
];

interface PretendApiRequest {
  page: number;
  rowsPerPage: number;
  sortColumn: keyof MyExampleTableData | undefined;
  sortDirection: SortDirection;
}

interface PretendApiReturnValue {
  totalNum: number;
  rows: MyExampleTableData[];
}

export function getExampleTableRows({
  page,
  rowsPerPage,
  sortColumn,
  sortDirection,
}: PretendApiRequest): PretendApiReturnValue {
  const rowsCopy = [...myExampleRows];

  if (sortColumn) {
    rowsCopy.sort((a, b) => {
      if (a[sortColumn] === b[sortColumn]) {
        return 0;
      }

      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    });

    if (sortDirection === SortDirection.Descending) {
      rowsCopy.reverse();
    }
  }

  return {
    totalNum: rowsCopy.length,
    rows: rowsCopy.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
  };
}
