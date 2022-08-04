import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { ListProps } from './List';
import { List } from './List';
import { ListItem } from './ListItem';
import { BorderStyle } from './Context';

const render = (props: Partial<ListProps> = {}) => {
  const allProps = {
    children: (
      <>
        <ListItem>AccordionHeader</ListItem>
      </>
    ),
    ...props,
  };
  renderRtl(<List {...allProps} />);
};

describe('List', () => {
  it('should render a List and ListItem with solid border style when "borderStyle" is not set', () => {
    render();
    const List = screen.getByRole('list');
    expect(List.classList.contains('list--solid')).toBe(true);
    expect(List.classList.contains('list--dashed')).toBe(false);
  });

  it('should render a List and ListItem with solid border style when "borderStyle" is solid', () => {
    render({ borderStyle: BorderStyle.Solid });
    const List = screen.getByRole('list');
    expect(List.classList.contains('list--solid')).toBe(true);
    expect(List.classList.contains('list--dashed')).toBe(false);
  });

  it('should render a List and ListItem with dashed border style when "borderStyle" is dashed', () => {
    render({ borderStyle: BorderStyle.Dashed });
    const List = screen.getByRole('list');
    expect(List.classList.contains('list--solid')).toBe(false);
    expect(List.classList.contains('list--dashed')).toBe(true);
  });
});
