import {
  render as renderRtl,
  screen,
  createEvent,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import type { SearchFieldProps } from './SearchField';
import { SearchField } from './SearchField';

const user = userEvent.setup();

describe('SearchField', () => {
  it('should trigger onPaste when pasting into input', () => {
    const handlePaste = jest.fn();
    render({
      onPaste: handlePaste,
    });

    const element = screen.getByRole('textbox');
    const paste = createEvent.paste(element, {
      clipboardData: {
        getData: () => 'hello world',
      },
    });

    fireEvent(element, paste);

    expect(handlePaste).toHaveBeenCalledTimes(1);
  });

  it('should trigger onBlur event when field loses focus', async () => {
    const handleChange = jest.fn();
    render({ onBlur: handleChange });

    const element = screen.getByRole('textbox');
    await user.click(element);
    expect(element).toHaveFocus();
    await user.tab();

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should trigger onChange event for each keystroke', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange });

    const element = screen.getByRole('textbox');
    await user.click(element);
    expect(element).toHaveFocus();
    await user.keyboard('test');

    expect(handleChange).toHaveBeenCalledTimes(4);
  });
});

const render = (props: Partial<SearchFieldProps> = {}) => {
  const allProps = {
    id: 'id',
    onChange: jest.fn(),
    ...props,
  } as SearchFieldProps;

  return renderRtl(<SearchField {...allProps} />);
};
