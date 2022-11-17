import {
  render as renderRtl,
  screen,
  createEvent,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { TextArea } from './TextArea';
import type { TextAreaProps } from './TextArea';

const user = userEvent.setup();

describe('TextArea', () => {
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

  it('Focuses on text area when label is clicked', async () => {
    const label = 'Lorem ipsum';
    render({ label });
    await user.click(screen.getByText(label));
    expect(screen.getByRole('textbox')).toHaveFocus();
  });
});

const render = (props: Partial<TextAreaProps> = {}) => {
  const allProps = {
    id: 'id',
    onChange: jest.fn(),
    ...props,
  } as TextAreaProps;

  return renderRtl(<TextArea {...allProps} />);
};
