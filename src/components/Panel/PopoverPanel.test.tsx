import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render as renderRtl, screen } from '@testing-library/react';

import { PanelVariant } from '../Panel';

import type { PopoverPanelProps } from './PopoverPanel';
import { PopoverPanel } from './PopoverPanel';

const render = (props: Partial<PopoverPanelProps> = {}) => {
  const allProps = {
    children: <div data-testid='popover-content'>Popover text</div>,
    trigger: <button>Open</button>,
    variant: PanelVariant.Warning,
    open: false,
    onOpenChange: jest.fn(),
    ...props,
  };
  renderRtl(<PopoverPanel {...allProps} />);
};

const user = userEvent.setup();

describe('Panel', () => {
  describe('onOpenChange', () => {
    it('should call onOpenChange with true when popover trigger is clicked', async () => {
      const onOpenChange = jest.fn();
      render({ onOpenChange });
      const popoverTrigger = screen.getByRole('button', { name: 'Open' });

      await user.click(popoverTrigger);
      expect(onOpenChange).toHaveBeenCalledWith(true);
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });

    it('should call onOpenChange with false when trigger is clicked and open is true', async () => {
      const onOpenChange = jest.fn();
      await act(async () => {
        render({ onOpenChange, open: true });
      });
      const popoverTrigger = screen.getByRole('button', { name: 'Open' });

      await user.click(popoverTrigger);
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });

    it('should call onOpenChange with true when trigger is clicked by space', async () => {
      const onOpenChange = jest.fn();
      render({ onOpenChange });
      const popoverTrigger = screen.getByRole('button', { name: 'Open' });
      popoverTrigger.focus();
      await user.keyboard('[Space]');
      expect(onOpenChange).toHaveBeenCalledWith(true);
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });

    it('should call onOpenChange with false when trigger is clicked by space and open is true', async () => {
      const onOpenChange = jest.fn();
      await act(async () => {
        render({ onOpenChange, open: true });
      });
      const popoverTrigger = screen.getByRole('button', { name: 'Open' });
      popoverTrigger.focus();
      await user.keyboard('[Space]');
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });

    it('should call onOpenChange with true when trigger is clicked by enter', async () => {
      const onOpenChange = jest.fn();
      render({ onOpenChange });
      const popoverTrigger = screen.getByRole('button', { name: 'Open' });
      popoverTrigger.focus();
      await user.keyboard('[Enter]');
      expect(onOpenChange).toHaveBeenCalledWith(true);
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });

    it('should call onOpenChange with false when trigger is clicked by enter and open is true', async () => {
      const onOpenChange = jest.fn();
      await act(async () => {
        render({ onOpenChange, open: true });
      });
      const popoverTrigger = screen.getByRole('button', { name: 'Open' });
      popoverTrigger.focus();
      await user.keyboard('[Enter]');
      expect(onOpenChange).toHaveBeenCalledWith(false);
      expect(onOpenChange).toHaveBeenCalledTimes(1);
    });
  });

  it('should show popover content when isOpen=true', async () => {
    await act(async () => {
      render({ open: true });
    });
    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
  });

  it('should not show popover content when isOpen=false', () => {
    render({ open: false });

    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();
  });
});
